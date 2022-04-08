/// <reference types="react" />
interface NumberInputProps {
    model?: string;
    onChange?: Function;
    onBlur?: Function;
    onFocus?: Function;
    inputName?: string;
    value?: any;
    required?: boolean;
    label?: string;
    id?: string;
    decimalPlaces?: number;
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
declare const EasyNumberInput: ({ model, onChange, onBlur, onFocus, inputName, value, required, label, id, decimalPlaces, min, max, disabled, wholeNumbersOnly, testingId, defaultValue, unlink, validateOnLoad, placeholder, }: NumberInputProps) => JSX.Element;
export default EasyNumberInput;
