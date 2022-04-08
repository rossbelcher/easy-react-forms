/// <reference types="react" />
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
}
declare const EasyCurrencyInput: ({ model, onChange, onBlur, onFocus, inputName, value, required, label, id, disabled, wholeNumbersOnly, testingId, defaultValue, unlink, validateOnLoad, placeholder, min, max, }: CurrencyInputProps) => JSX.Element;
export default EasyCurrencyInput;
