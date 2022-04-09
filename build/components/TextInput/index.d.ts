/// <reference types="react" />
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
declare const EasyTextInput: ({ model, onChange, onBlur, onFocus, inputName, value, required, label, id, min, max, disabled, testingId, defaultValue, unlink, alphanumeric, validateOnLoad, placeholder, className }: TextInputProps) => JSX.Element;
export default EasyTextInput;
