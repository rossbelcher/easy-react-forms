import React, { useContext, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { BaseErrorMessage, BaseInputStyle, BaseLabelStyle } from '../../baseStyles/input.styles';
import { FormControlState } from '../../controllers/easyFormConsumer';
import { useFormUpdate } from '../../hooks/formState';
import { UseCommaInCurrency } from '../../utils/currency-helper';
import { createUUID } from '../../utils/data-helpers';
import i18n from '../../utils/i18n';
import { cleanNumber, formatNumberToText, isValidValue } from '../../utils/number-helper';
import { isNullOrWhitespace } from '../../utils/text-helpers';
import { FormAttibuteContext, FormContext } from '../FormWrapper';

interface CurrencyInputProps {
  model?: string;
  onChange?: Function;
  onBlur?: Function;
  onFocus?: Function;
  inputName?: string;
  value?: any;
  required?: boolean;
  label?: string;
  id?: string;
  min?: number;
  max?: number;
  disabled?: boolean;
  wholeNumbersOnly?: boolean;
  testingId?: string;
  defaultValue?: any;
  unlink?: boolean;
  validateOnLoad?: boolean;
  placeholder?: string;
  className?: string;
}

const DefaultNumericMax = 10000000000000000000;
const decimalPlaces = 2;

const EasyCurrencyInput = ({
  model,
  onChange,
  onBlur,
  onFocus,
  inputName,
  value,
  required,
  label,
  id,
  disabled,
  wholeNumbersOnly,
  testingId,
  defaultValue,
  unlink,
  validateOnLoad,
  placeholder,
  min,
  max = DefaultNumericMax,
  className
}: CurrencyInputProps) => {
  const context = useContext(FormContext);
  const uuid = useRef(createUUID());
  const formId = unlink || !context ? null : context;
  const nameToUse = inputName ? inputName : model;
  const [componentState, setComponentState] = useRecoilState(FormControlState(formId || uuid.current, model || inputName));
  const setComponentData = useFormUpdate(formId, model);
  const inputRef = useRef();
  const { error, internalValue } = componentState;
  const valueToUse = isNullOrWhitespace(internalValue) ? '' : internalValue;

  useEffect(() => {
    return () => {
      setComponentData(value, true);
    }
  }, [model])

  useEffect(() => {
    if (model && formId) {
      setComponentData(value, isValidValue(value) || !required);
    }

    let newValue = value;

    if (defaultValue) {
      newValue = defaultValue;
    }

    newValue = formatDisplay(parseFloat(newValue));

    setComponentState({ internalValue: newValue, error });

    if (validateOnLoad) validate(newValue);
  }, [])

  useEffect(() => {
    if (value == '-') {
      setComponentState({
        internalValue: value
      })
    } else if (!isNaN(value)) {
      if (document.activeElement !== inputRef.current) {
        setComponentState({ internalValue: formatDisplay(parseFloat(value)), error })
      } else {
        setComponentState({ internalValue: value, error })
      }
      if (model && formId) {
        const [valid] = validate(value)
        setComponentData(value, valid);
      }
    } else {
      setComponentState({ internalValue: value, error })
    }
  }, [value]);

  useEffect(() => {
    if (!isNullOrWhitespace(internalValue)) {
      validate(internalValue)
    }
  }, [min, max])

  const setValue = (e: any, cleanNumber: boolean = false, blur: boolean = false) => {
    let value: any = '';

    if (!isNullOrWhitespace(e.target.value)) {
      value = formatCommaNumber(e.target.value, true);

      const split = value.split(UseCommaInCurrency() ? ',' : '.');
      if (split[1] && split[1].length > decimalPlaces) return e.preventDefault();

      if (value != '-') {
        if (isNaN(parseFloat(value))) return;
        value = parseFloat(value);
      }

      if (cleanNumber && !isNullOrWhitespace(value) && value != '-') {
        value = formatNumberToText(value, decimalPlaces);
      }
    }

    const [valid, newError, focused] = validate(value, false, true);

    if (model && formId) {
      setComponentData(value, valid);
    }

    if (onChange) {
      onChange(e, valid);
    }

    setComponentState({ internalValue: blur ? value : e.target.value, error: focused ? error : newError });
  }
  const formatCommaNumber = (value, output = false) => {
    if (isNullOrWhitespace(value)) return '';
    if (UseCommaInCurrency()) {
      return output ? value.toString().replace(',', '.') : value.toString().replace('.', ',');
    }

    return value;
  }

  const validate = (value, blur: boolean = false, passthrough = false): [boolean, string, boolean] => {
    // Essentially we don't want the page jumping around when the user is typing
    // This checks if our input is focused, if so clear errors until they finish typing
    let focused = false;
    if (document.activeElement === inputRef.current) {
      focused = isNullOrWhitespace(error) && !blur;
    }
    
    let preventStateSet = passthrough || focused;
    if (!isValidValue(value) && required) {
      const error = i18n('The value entered must be numeric');
      if (!preventStateSet) setComponentState({ error, internalValue });
      return [false, error, focused];
    } else if (isNaN(Number(value))) {
      const error = i18n('The value entered must be numeric');
      if (!preventStateSet) setComponentState({ error, internalValue });
      return [false, error, focused];
    } else if ((min || min === 0) && Number(value) < min) {
      const error = i18n('The number entered must be greater than or equal to ') + String(min);
      if (!preventStateSet) setComponentState({ error, internalValue });
      return [false, error, focused];
    } else if ((max || max === 0) && Number(value) > max) {
      const error = i18n('The number entered must be less than or equal to ') + String(max);
      if (!preventStateSet) setComponentState({ error, internalValue });
      return [false, error, focused];
    } else {
      if (!preventStateSet) setComponentState({ error: null, internalValue });
      return [true, null, focused];
    }
  }
  const formatDisplay = (value: any) => {
    return formatNumberToText(value, decimalPlaces);
  }
  return (
    <div className={className}>
      <FormAttibuteContext.Consumer>
        {attr => (
          <>
            {label &&
              <BaseLabelStyle className={required ? 'required' : ''} htmlFor={id ? id : nameToUse}>
                {label}
              </BaseLabelStyle>
            }
            <BaseInputStyle
              type='text'
              className={error ? 'error' : ''}
              name={nameToUse}
              id={id ? id : nameToUse}
              value={formatCommaNumber(valueToUse)}
              disabled={disabled || attr.disabled}
              data-e2e-id={testingId ? testingId : (id ? id : nameToUse)}
              required={required}
              ref={inputRef}
              onKeyDown={(e) => cleanNumber(e, wholeNumbersOnly)}
              onChange={(e) => setValue(e)}
              onFocus={(e) => onFocus ? onFocus(e) : null}
              placeholder={placeholder}
              onBlur={(e) => { setValue(e, true, true); if (onBlur) onBlur(); }} />

            {error &&
              <BaseErrorMessage className='error-message'>
                {error}
              </BaseErrorMessage>
            }
          </>
        )}
      </FormAttibuteContext.Consumer>
    </div>
  );
};

export default EasyCurrencyInput;