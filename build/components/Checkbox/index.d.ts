/// <reference types="react" />
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
    className?: string;
}
declare const EasyCheckbox: ({ model, onChange, inputName, checked, required, label, labelClass, id, disabled, unlink, className }: CheckboxProps) => JSX.Element;
export default EasyCheckbox;
