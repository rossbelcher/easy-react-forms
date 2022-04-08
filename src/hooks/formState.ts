import { useRecoilState } from "recoil";
import { FormControlData } from "../controllers/easyFormConsumer";
import FormController from "../controllers/form";
import { deepCopy } from "../utils/data-helpers";

export const useFormUpdate = (formId: string, model: string): ((value: any, valid: boolean) => void) => {
    const [componentData, setComponentData] = useRecoilState(FormControlData);
    const updateFormData = (value: any, valid: boolean) => {
        if (model == undefined) return;
        const newData = deepCopy(componentData);

        if (!newData[formId]) newData[formId] = {}

        let nodeToSet = newData[formId]

        if (model.indexOf('.') > -1) {
            const nameSplit = model.split('.');
            model = nameSplit[nameSplit.length - 1];
            nameSplit.splice(nameSplit.length - 1, 1);
            nameSplit.forEach(property => {
                if (!nodeToSet[property]) nodeToSet[property] = {};
                nodeToSet = nodeToSet[property];
            });
        }

        nodeToSet[model] = {
            value,
            model,
            valid
        }

        setComponentData(newData);
        FormController.updateForm(formId, newData);
    }
    let modelData = {};

    if (componentData[formId] && componentData[formId][model]) modelData = componentData[formId][model];

    return updateFormData;
}