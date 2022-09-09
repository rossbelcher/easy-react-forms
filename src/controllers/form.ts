import cloneDeep from "lodash";

declare global {
  interface Window { formStateData: any; }
}

export default class FormController {
  private static formUpdate: any;
  private static updateQueue: string[] = [];
  static formState: any = {};

  static register(formUpdate: Function, id: string) {
    if (!this.formUpdate) this.formUpdate = {};

    this.formUpdate[id] = formUpdate;
  }

  static updateFormState(value: any, name: string, valid: boolean, id: string) {
    if (name == undefined) return;
    
    if (!window.formStateData) {
      window.formStateData = {};
    }

    if (!window.formStateData[id]) window.formStateData[id] = {}

    let nodeToSet = window.formStateData[id]

    if (name.indexOf('.') > -1) {
      const nameSplit = name.split('.');
      name = nameSplit[nameSplit.length - 1];
      nameSplit.splice(nameSplit.length - 1, 1);
      nameSplit.forEach(property => {
        if (!nodeToSet[property]) nodeToSet[property] = {};
        nodeToSet = nodeToSet[property];
      });
    }

    nodeToSet[name] = {
      value,
      name,
      valid
    }

    this.updateQueue.push(id);
    setTimeout(() => {
        this.updateQueue.splice(this.updateQueue.indexOf(id), 1);
        if (!this.updateQueue.find(x => x === id)) this.updateForm(id)
    }, 50);
  }
  
  static updateForm(id) {
    if (this.formUpdate[id]) this.formUpdate[id](window.formStateData[id]);
  }

  static getFormData(id: string) {
    return window.formStateData && window.formStateData[id] ? window.formStateData[id] : null;
  }

  static setState(element, state, callback = null) {
    const formId = element?.formId;
    const model = element?.props?.model;
    if (!formId || !model) {
      element.setState(state);
      if (callback) callback();
      return;
    }

    const formState = cloneDeep(this.formState);
    const keys = Object.keys(state);

    if (!formState[formId]) formState[formId] = {};
    if (!formState[formId][model]) formState[formId][model] = {};
    
    const form = formState[formId][model];
    const prevForm = JSON.stringify(form);

    for (let i = 0; i < keys.length; i++) {
      form[keys[i]] = state[keys[i]];
    }

    this.formState = formState;

    if (JSON.stringify(form) !== prevForm) element.setState(state);

    if (callback) callback();
  }

  static getState(element) {
    if (element?.formId) {
      const state = this.formState?.[element?.formId]?.[element?.props?.model];
      return state ? state : {};
    }
    return element.state;
  }
}
