import React from "react";
import EasyFormConsumer from "../../controllers/easyFormConsumer";
import EasyCheckbox from "../Checkbox";
import NumberInput from "../NumberInput";
import TextInput from "../TextInput";
import FormWrapper from "./";

export default {
    title: "Containers/FormWrapper"
};

export const Basic = () => <EasyFormConsumer><FormWrapper onUpdate={(d) => console.log(d)}>
    {({ id, valid }) => (
        <>
            <NumberInput
                model='myProperty2'
                label='My Number Input:'
                required
            />
            <br />
            <br />
            <button disabled={!valid}>Test button</button>
        </>
    )}
</FormWrapper></EasyFormConsumer>;

export const Functional = () => <EasyFormConsumer><FormWrapper onUpdate={(d) => console.log(d)}>
    {({ id, valid }) => (
        <>
            <EasyCheckbox
                model='checky'
                label='My Text Input:'
            />
            <br />
            <EasyCheckbox
                model='checkyTwo'
                label='My Text Input:'
            />
        </>
    )}
</FormWrapper></EasyFormConsumer>;
