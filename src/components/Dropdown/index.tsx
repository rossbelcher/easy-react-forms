import React, { useContext, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { BaseErrorMessage, BaseInputStyle, BaseLabelStyle, BaseSelectStyle } from '../../baseStyles/input.styles';
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
    disabled?: boolean;
    testingId?: string;
    defaultValue?: any;
    unlink?: boolean;
    validateOnLoad?: boolean;
    placeholder?: string;
    className?: string;
    items?: DropdownItem[];
    defaultText?: string;
    addDefault?: boolean;
}

export interface DropdownItem {
    value: string;
    text?: string;
}

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
    disabled,
    testingId,
    defaultValue,
    unlink,
    validateOnLoad,
    placeholder,
    className,
    items,
    defaultText,
    addDefault = true
}: TextInputProps) => {
    const context = useContext(FormContext);
    const uuid = useRef(createUUID());
    const formId = unlink || !context ? null : context;
    const nameToUse = inputName ? inputName : model;
    const [componentState, setComponentState] = useRecoilState(FormControlState(formId || uuid.current, model || inputName));
    const setComponentData = useFormUpdate(formId, model);
    const mounted = useRef<boolean>(false);
    const { error, internalValue } = componentState;
    const valueToUse = isNullOrWhitespace(internalValue) ? '' : internalValue;

    useEffect(() => {
        return () => {
            if (mounted.current) setComponentData(value, true);
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

        mounted.current = true;
    }, [])

    useEffect(() => {
        if (!valueMatches(internalValue, value) && mounted.current) {
            setComponentState({ internalValue: value, error })

            if (model && formId) {
                const [valid, newError] = validate(value)
                setComponentData(value, valid);
            }
        }
    }, [value])

    const valueMatches = (val1: any, val2: any) => {
        val1 = val1?.toString();
        val2 = val2?.toString();
        return val1?.toLowerCase() === val2?.toLowerCase();
    }

    const isValid = (value) => {
        return !(value == null || value == undefined || value == '');
    }

    const setValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let value: string = e.target.value;

        const [valid, newError] = validate(value);

        if (model && formId) setComponentData(value, valid);

        if (onChange) onChange(e, valid);

        setComponentState({ internalValue: value, error: newError })
    }

    const validate = (value): [boolean, string] => {
        if (!isValid(value) && required) {
            let error = i18n('Required');
            setComponentState({ error, internalValue: value });
            return [false, error];
        } else {
            setComponentState({ error: null, internalValue: value });
            return [true, null];
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
                        <BaseSelectStyle
                            className={error ? 'error' : ''}
                            name={nameToUse}
                            id={id ? id : nameToUse}
                            value={valueToUse}
                            required={required}
                            disabled={disabled || attr.disabled}
                            data-e2e-id={testingId ? testingId : (id ? id : nameToUse)}
                            onBlur={(e) => { setValue(e); if (onBlur) onBlur(e); }}
                            onFocus={(e) => onFocus ? onFocus(e) : null}
                            placeholder={placeholder}
                            onChange={(e) => setValue(e)}>
                            {addDefault &&
                                <option value=''>{defaultText ? defaultText : 'Please Select'}</option>
                            }
                            {items && items.map((item, index) => {
                                if (item.value !== null && item.value !== undefined) return (
                                    <option key={`${item.value}-${index}`} value={item.value}>{item.text === undefined || item.text === null ? item.value : item.text}</option>
                                )
                            })}
                        </BaseSelectStyle>

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