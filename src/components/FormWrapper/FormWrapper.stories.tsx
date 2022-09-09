import React, { useState } from "react";
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

export const ExampleFormWithPreInput = () => {
    const [data, setData] = useState({text1: 'Text 1', text2: 'Text 2', number1: '1400'});
    return (
        <EasyFormConsumer>
            <FormWrapper onUpdate={setData}>
                {({ id, valid }) => (
                    <>
                        <EasyTextInput
                            model='text1'
                            label='My Text Input:'
                            value={data.text1}
                            required
                        />
                        <br />
                        <EasyTextArea
                            model='text2'
                            label='My text area:'
                            value={data.text2}
                        />
                        <br />
                        <EasyNumberInput
                            model='number1'
                            label='My Number Input:'
                            value={data.number1}
                            required
                            min={400}
                        />
                        <br />
                        <br />
                        <button disabled={!valid}>Submit button</button>
                    </>
                )}
            </FormWrapper>
        </EasyFormConsumer>
    )
};

export const ExampleFormWithUpdateData = () => {
    const [data, setData] = useState<any>({});
    return (
        <EasyFormConsumer>
            <FormWrapper onUpdate={setData}>
                {({ id, valid }) => (
                    <>
                        <EasyTextInput
                            model='text1'
                            label='My Text Input:'
                            value={data.text1}
                            required
                        />
                        <br />
                        <EasyTextArea
                            model='text2'
                            label='My text area:'
                            value={data.text2}
                        />
                        <br />
                        <EasyNumberInput
                            model='number1'
                            label='My Number Input:'
                            value={data.number1}
                            required
                            min={400}
                        />
                        <br />
                        <br />
                        <button disabled={!valid}>Submit button</button>
                        <br />
                        <br />
                        <button onClick={() => setData({text1: 'Text 1', text2: 'Text 2', number1: '10'})}>Update form data</button>
                    </>
                )}
            </FormWrapper>
        </EasyFormConsumer>
    )
};
