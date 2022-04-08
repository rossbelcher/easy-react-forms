import React, { useContext, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { BaseLabelStyle, BaseTextareaStyle, BaseErrorMessage } from '../../baseStyles/input.styles';
import { FormControlState } from '../../controllers/easyFormConsumer';
import { useFormUpdate } from '../../hooks/formState';
import { createUUID } from '../../utils/data-helpers';
import i18n from '../../utils/i18n';
import { isNullOrWhitespace } from '../../utils/text-helpers';
import { FormAttibuteContext, FormContext } from '../FormWrapper';

interface TextAreaProps {
  model?: string;
  onChange?: Function;
  inputName?: string;
  value?: any;
  required?: boolean;
  rows?: number;
  label?: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  unlink?: boolean;
  testingId?: string;
}

const EasyTextArea = ({
  model,
  onChange,
  inputName,
  value,
  required,
  rows,
  label,
  id,
  placeholder,
  disabled,
  maxLength,
  minLength,
  unlink,
  testingId,
}: TextAreaProps) => {
  const context = useContext(FormContext);
  const uuid = useRef(createUUID());
  const formId = unlink || !context ? null : context;
  const nameToUse = inputName ? inputName : model;
  const [componentState, setComponentState] = useRecoilState(FormControlState(formId || uuid.current, model || inputName));
  const setComponentData = useFormUpdate(formId, model);
  const { error, internalValue } = componentState;
  const valueToUse = isNullOrWhitespace(internalValue) ? '' : internalValue;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const [valid, newError] = validate(value, mounted);
    if (model && formId) setComponentData(value, valid);
    setComponentState({ internalValue: value, error });
    if (!mounted) setMounted(true);
  }, [value])

  const setValue = (e: any) => {
    const [valid, newError] = validate(e.target.value, false);

    if (model && formId) setComponentData(e.target.value, valid);

    if (onChange) onChange(e);

    setComponentState({ internalValue: e.target.value, error: newError });
  }

  const validate = (value, setState: boolean = true): [boolean, string] => {
    if (!value && required) {
      let error = i18n('Required');
      if (setState) setComponentState({ error, internalValue });
      return [false, error];
    } else if (value && minLength && value.length < minLength) {
      let error = i18n('Minimum number of characters is ') + minLength.toString();
      if (setState) setComponentState({ error, internalValue });
      return [false, error];
    } else if (value && maxLength && value.length > maxLength) {
      let error = i18n('Maximum number of characters is ') + maxLength.toString();
      if (setState) setComponentState({ error, internalValue });
      return [false, error];
    } else {
      if (setState) setComponentState({ error: null, internalValue });
      return [true, null];
    }
  }

  return (
    <>
      <FormAttibuteContext.Consumer>
        {attr => (
          <>
            {label &&
              <BaseLabelStyle className={required ? 'required' : ''} htmlFor={id ? id : nameToUse}>
                {label}
              </BaseLabelStyle>
            }

            <BaseTextareaStyle
              error={error}
              name={nameToUse}
              id={id ? id : nameToUse}
              className={error ? 'error' : ''}
              value={valueToUse}
              required={required}
              disabled={disabled || attr.disabled}
              rows={rows}
              placeholder={placeholder}
              autoComplete='off'
              data-e2e-id={testingId ? testingId : (id ? id : nameToUse)}
              onBlur={(e) => validate(e.target.value)}
              onChange={(e) => setValue(e)} />

            {error &&
              <BaseErrorMessage>
                {error}
              </BaseErrorMessage>
            }
          </>
        )}
      </FormAttibuteContext.Consumer>
    </>
  );
};

export default EasyTextArea;