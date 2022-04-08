import React from "react";
import { RecoilRoot } from "recoil";
import EasyRadioInput from "./";

export default {
    title: "Elements/EasyRadioInput"
};

export const Basic = () => <>
    <RecoilRoot>
        <EasyRadioInput value="1" id="1" label="Radio 1" inputName="testRadio" />
        <br />
        <EasyRadioInput value="2" id="2" label="Radio 2" inputName="testRadio" />
    </RecoilRoot>
</>;
