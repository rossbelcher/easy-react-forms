import React, { useContext, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { BaseErrorMessage, BaseInputStyle, BaseLabelStyle } from '../../baseStyles/input.styles';
import { FormControlState } from '../../controllers/easyFormConsumer';
import { useFormUpdate } from '../../hooks/formState';
import { createUUID } from '../../utils/data-helpers';
import i18n from '../../utils/i18n';
import { isNullOrWhitespace } from '../../utils/text-helpers';
import { FormAttibuteContext, FormContext } from '../FormWrapper';

interface TextInputProps {
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
    testingId?: string;
    defaultValue?: any;
    unlink?: boolean;
    alphanumeric?: boolean;
    validateOnLoad?: boolean;
    placeholder?: string;
    className?: string;
}

const DefaultNumericMax = 10000000000000000000;

const EasyTextInput = ({
    model,
    onChange,
    onBlur,
    onFocus,
    inputName,
    value,
    required,
    label,
    id,
    min,
    max = DefaultNumericMax,
    disabled,
    testingId,
    defaultValue,
    unlink,
    alphanumeric,
    validateOnLoad,
    placeholder,
    className
}: TextInputProps) => {
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
            setComponentData(value, isValid(value) || !required);
        }

        let newValue = value;

        if (defaultValue) {
            newValue = defaultValue;
        }

        setComponentState({ internalValue: newValue, error });

        if (validateOnLoad) validate(value);
    }, [])

    useEffect(() => {
        if (internalValue != value) {
            setComponentState({ internalValue: value, error })

            if (model && formId) {
                const [valid, newError, focused] = validate(value)
                setComponentData(value, valid);
            }
        }
    }, [value])

    useEffect(() => {
        if (!isNullOrWhitespace(internalValue)) {
            validate(internalValue)
        }
    }, [min, max])

    const isValid = (value) => {
        return !!value;
    }

    const setValue = (e: any, blur: boolean = false) => {
        let value: any = e.target.value;

        const [valid, newError, focused] = validate(value);

        if (model && formId) setComponentData(value, valid);

        if (onChange) onChange(e, valid);

        setComponentState({ internalValue: blur ? value : e.target.value, error: focused ? error : newError })
    }

    const checkAlphanumeric = (e: any) => {
        if (!alphanumeric) return;
        const regex = new RegExp(/^[a-z0-9]+$/i);
        const passesRegex = regex.test(e.target.value + e.key);
        if (!passesRegex) return e.preventDefault();
    }

    const validate = (value, blur: boolean = false, passthrough = false): [boolean, string, boolean] => {
        // Essentially we don't want the page jumping around when the user is typing
        // This checks if our input is focused, if so clear errors until they finish typing
        let focused = false;
        if (document.activeElement === inputRef.current) {
            focused = isNullOrWhitespace(error) && !blur;
        }

        let preventStateSet = passthrough || focused;
        if (!isValid(value) && required) {
            let error = i18n('Required');
            if (!preventStateSet) setComponentState({ error, internalValue });
            return [false, error, focused];
        } else if ((min || min === 0) && value.length < min) {
            const error = i18n('The value entered must be greater than or equal to ') + String(min) + i18n(' characters');
            if (!preventStateSet) setComponentState({ error, internalValue });
            return [false, error, focused];
        } else if ((max || max === 0) && value.length > max) {
            const error = i18n('The value entered must be less than or equal to ') + String(max) + i18n(' characters');
            if (!preventStateSet) setComponentState({ error, internalValue });
            return [false, error, focused];
        } else {
            if (!preventStateSet) setComponentState({ error: null, internalValue });
            return [true, null, focused];
        }
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
                            value={valueToUse}
                            required={required}
                            disabled={disabled || attr.disabled}
                            data-e2e-id={testingId ? testingId : (id ? id : nameToUse)}
                            ref={inputRef}
                            autoComplete='off'
                            onBlur={(e) => { setValue(e, true); if (onBlur) onBlur(e); }}
                            onFocus={(e) => onFocus ? onFocus(e) : null}
                            placeholder={placeholder}
                            onKeyDown={(e) => checkAlphanumeric(e)}
                            onChange={(e) => setValue(e)} />

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

export default EasyTextInput;