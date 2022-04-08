import React, { Component, createContext, RefObject } from 'react';
import FormController from '../../controllers/form';
import { createUUID } from '../../utils/data-helpers';

export const FormContext = createContext(null);
export const FormAttibuteContext = createContext({disabled: false});

interface ComponentProps {
  className?: string;
  children?: any;
  onUpdate?: Function;
  formRef?: RefObject<HTMLFormElement>;
  renderWrapperAsDiv?: boolean;
  formId?: string;
  disabled?: boolean;
}

interface ComponentState {
  id: string;
  valid: boolean;
}

export default class FormWrapper extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);

    this.state = {
      id: this.props.formId ? this.props.formId : createUUID(),
      valid: true
    }

    this.valueChange = this.valueChange.bind(this);
  }

  componentDidMount() {
    FormController.register(this.valueChange, this.props.formId ? this.props.formId : this.state.id);
  }

  componentDidUpdate() {
    if (this.props.formId && this.props.formId !== this.state.id) {
      this.setState({id: this.props.formId}, () => FormController.register(this.valueChange, this.state.id))
    }
  }

  valueChange = (formData) => {
    debugger
    const data: any = formData ? formData : FormController.getFormData(this.props.formId ? this.props.formId : this.state.id);

    if (!data) return;
    
    const dataToSend: any = {};
    let valid = this.setValues(data, dataToSend);
    this.setState({valid});
    if (this.props.onUpdate) this.props.onUpdate(dataToSend, valid);
  }

  setValues = (data, dataToSend): boolean => {
    let valid = true;
    Object.keys(data).forEach((key) => {
      if (data[key].hasOwnProperty('value') && data[key].hasOwnProperty('valid')) {
        dataToSend[key] = data[key].value;
        if (!data[key].valid) {
          valid = false;
        }
      } else {
        dataToSend[key] = {};
        const subValid = this.setValues(data[key], dataToSend[key]);
        if (!subValid) valid = false;
      }
    });
    return valid;
  }

  render() {
    if (!this.props.children) return null;

    const formId = this.props.formId ? this.props.formId : this.state.id;

    const element = this.props.renderWrapperAsDiv ? 'div' : 'form';
    const props = { id: formId, ref:this.props.formRef, className:this.props.className };
    const children = this.props.children && this.props.children({id: formId, valid: this.state.valid});

    return (
      <FormContext.Provider value={formId}>
        <FormAttibuteContext.Provider value={{disabled: this.props.disabled}}>
          {React.createElement(element, props, children)}
        </FormAttibuteContext.Provider>
      </FormContext.Provider>
    );
  }
}