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
declare const EasyTextInput: ({ model, onChange, onBlur, onFocus, inputName, value, required, label, id, disabled, testingId, defaultValue, unlink, validateOnLoad, placeholder, className, items, defaultText, addDefault }: TextInputProps) => JSX.Element;
export default EasyTextInput;
