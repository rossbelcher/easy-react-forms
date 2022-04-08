/// <reference types="react" />
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
}
declare const EasyRadioInput: ({ model, onChange, checked, required, label, id, value, unlink, inputName, }: RadioProps) => JSX.Element;
export default EasyRadioInput;
