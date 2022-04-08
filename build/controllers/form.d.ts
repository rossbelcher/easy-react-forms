declare global {
    interface Window {
        formStateData: any;
    }
}
export default class FormController {
    private static formUpdate;
    private static updateQueue;
    static formState: any;
    static register(formUpdate: Function, id: string): void;
    static updateFormState(value: any, name: string, valid: boolean, id: string): void;
    static updateForm(id: any, data?: any): void;
    static getFormData(id: string): any;
    static setState(element: any, state: any, callback?: any): void;
    static getState(element: any): any;
}
