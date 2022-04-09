import React from "react";
import EasyFormConsumer from "../../controllers/easyFormConsumer";
import EasyTextInput from "../TextInput";
import EasyNumberInput from "../NumberInput";
import FormWrapper from "./";
import EasyTextArea from "../Textarea";

export default {
    title: "Containers/FormWrapper"
};

export const ExampleForm = () => <EasyFormConsumer>
    <FormWrapper onUpdate={(d) => console.log(d)}>
        {({ id, valid }) => (
            <>
                <EasyTextInput
                    model='text1'
                    label='My Text Input:'
                    required
                />
                <br />
                <EasyTextArea
                    model='text2'
                    label='My text area:'
                />
                <br />
                <EasyNumberInput
                    model='number1'
                    label='My Number Input:'
                    required
                    min={400}
                />
                <br />
                <br />
                <button disabled={!valid}>Submit button</button>
            </>
        )}
    </FormWrapper>
</EasyFormConsumer>;
