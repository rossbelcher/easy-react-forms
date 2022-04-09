import React, { useContext, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { BaseErrorMessage } from '../../baseStyles/input.styles';
import { FormControlState } from '../../controllers/easyFormConsumer';
import { useFormUpdate } from '../../hooks/formState';
import { createUUID } from '../../utils/data-helpers';
import { FormAttibuteContext, FormContext } from '../FormWrapper';

interface RadioProps {
    model?: string;
    onChange?: Function;
    checked?: boolean;
    required?: boolean;
    label?: string;
    id: string;
    value: string;
    unlink?: boolean;
    inputName?: string;
    className?: string;
}

const EasyRadioInput = ({
    model,
    onChange,
    checked,
    required,
    label,
    id,
    value,
    unlink,
    inputName,
    className
}: RadioProps) => {
    const context = useContext(FormContext);
    const uuid = useRef(createUUID());
    const formId = unlink || !context ? null : context;
    const nameToUse = inputName ? inputName : model;
    const [componentState, setComponentState] = useRecoilState(FormControlState(formId || uuid.current, model || inputName));
    const setComponentData = useFormUpdate(formId, model);
    const { error, isChecked } = componentState;

    useEffect(() => {
        if (formId && model) {
            const valid = required ? checked : true;
            setComponentData(checked, valid);
        }
        setComponentState({ isChecked: !!checked, error });
    }, [])

    useEffect(() => {
        setComponentState({ isChecked: checked, error });

        if (formId && model) {
            setComponentData(checked, true);
        }
    }, [checked])

    const setValue = (e: any) => {
        if (model && formId) setComponentData(e.target.value, true);

        if (onChange) onChange(e);

        setComponentState({ isChecked: e.target.checked })
    }

    return (
        <div className={className}>
            <FormAttibuteContext.Consumer>
                {attr => (
                    <>
                        <input type='radio'
                            checked={isChecked}
                            name={nameToUse}
                            id={id}
                            disabled={attr.disabled}
                            required={required}
                            onChange={(e) => setValue(e)}
                            value={value}>
                        </input>
                        {label &&
                            <label htmlFor={id}>
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
        </div>
    );
};

export default EasyRadioInput;