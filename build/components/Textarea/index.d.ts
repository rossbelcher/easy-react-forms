/// <reference types="react" />
interface TextAreaProps {
    model?: string;
    onChange?: Function;
    inputName?: string;
    value?: any;
    required?: boolean;
    rows?: number;
    label?: string;
    id?: string;
    placeholder?: string;
    disabled?: boolean;
    maxLength?: number;
    minLength?: number;
    unlink?: boolean;
    testingId?: string;
    className?: string;
}
declare const EasyTextArea: ({ model, onChange, inputName, value, required, rows, label, id, placeholder, disabled, maxLength, minLength, unlink, testingId, className }: TextAreaProps) => JSX.Element;
export default EasyTextArea;
