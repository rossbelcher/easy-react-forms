import React, { useContext, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { BaseErrorMessage } from '../../baseStyles/input.styles';
import { FormControlState } from '../../controllers/easyFormConsumer';
import { useFormUpdate } from '../../hooks/formState';
import { createUUID } from '../../utils/data-helpers';
import i18n from '../../utils/i18n';
import { FormAttibuteContext, FormContext } from '../FormWrapper';

interface CheckboxProps {
    model?: string;
    onChange?: Function;
    inputName?: string;
    checked?: any;
    required?: boolean;
    label?: string;
    id?: string;
    labelClass?: string;
    disabled?: boolean;
    unlink?: boolean;
}

const EasyCheckbox = ({
    model,
    onChange,
    inputName,
    checked,
    required,
    label,
    labelClass,
    id,
    disabled,
    unlink
}: CheckboxProps) => {
    const context = useContext(FormContext);
    const uuid = useRef(createUUID());
    const formId = unlink || !context ? null : context;
    const nameToUse = inputName ? inputName : model;
    const [componentState, setComponentState] = useRecoilState(FormControlState(formId || uuid.current, model || inputName));
    const setComponentData = useFormUpdate(formId, model);
    const { error, isChecked } = componentState;

    useEffect(() => {
        if (formId && model) {
            const valid = required ? required && checked : true;
            setComponentData(checked, valid);
        }
        setComponentState({ isChecked: !!checked, error });
    }, [])

    useEffect(() => {
        setComponentState({ isChecked: checked, error });
        const valid = validate(checked);

        if (formId && model) {
            setComponentData(checked, valid);
        }
    }, [checked])

    const validate = (value): boolean => {
        if (required && value) {
            let error = i18n('Required');
            setComponentState({ isChecked, error });
            return false;
        } else {
            setComponentState({ isChecked, error: null });
            return true;
        }
    }

    const setValue = (e: any) => {
        const value = e.target.checked;
        const valid = validate(e.target.checked);

        if (model && formId) {
            setComponentData(value, valid);
        }
        if (onChange) onChange(e);
        setComponentState({ isChecked: value, error })
    }
    return (
        <>
            <FormAttibuteContext.Consumer>
                {attr => (
                    <>
                        <input type='checkbox' className='chkbx'
                            checked={!!isChecked}
                            name={nameToUse}
                            id={id ? id : nameToUse}
                            required={required}
                            disabled={disabled || attr.disabled}
                            onChange={(e) => setValue(e)}>
                        </input>
                        {label &&
                            <label htmlFor={id ? id : nameToUse} className={labelClass}>
                                {label}
                            </label>
                        }
                        {error &&
                            <BaseErrorMessage className=''>
                                {error}
                            </BaseErrorMessage>
                        }
                    </>
                )}
            </FormAttibuteContext.Consumer>
        </>
    );
};

export default EasyCheckbox;