/// <reference types="react" />
interface TypeaheadProps {
    model?: string;
    onChange?: Function;
    inputName?: string;
    value?: any;
    required?: boolean;
    placeholder?: string;
    label?: string;
    id?: string;
    items: TypeaheadDataItem[];
    disabled?: boolean;
    requiredLength?: number;
    onTextInput?: Function;
    identifier?: string;
    unlink?: boolean;
    allowCustomValue?: boolean;
    openOnFocus?: boolean;
    testingId?: string;
}
export interface TypeaheadDataItem {
    value: string;
    text?: any;
    rawTextValue?: string;
    section?: string;
    extraInfo?: any;
}
declare const EasyTypeahead: (props: TypeaheadProps) => JSX.Element;
export default EasyTypeahead;
