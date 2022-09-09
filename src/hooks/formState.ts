import FormController from "../controllers/form";

export const useFormUpdate = (formId: string, model: string): ((value: any, valid: boolean) => void) => {
    const updateFormData = (value: any, valid: boolean) => {
        FormController.updateFormState(value, model, valid, formId);
    }
    return updateFormData;
}