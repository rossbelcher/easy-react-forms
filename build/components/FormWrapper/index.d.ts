import React, { Component, RefObject } from 'react';
export declare const FormContext: React.Context<any>;
export declare const FormAttibuteContext: React.Context<{
    disabled: boolean;
}>;
interface ComponentProps {
    className?: string;
    children?: any;
    onUpdate?: Function;
    formRef?: RefObject<HTMLFormElement>;
    renderWrapperAsDiv?: boolean;
    formId?: string;
    disabled?: boolean;
}
interface ComponentState {
    id: string;
    valid: boolean;
}
export default class FormWrapper extends Component<ComponentProps, ComponentState> {
    constructor(props: ComponentProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    valueChange: (formData: any) => void;
    setValues: (data: any, dataToSend: any) => boolean;
    render(): JSX.Element;
}
export {};
