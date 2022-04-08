import React from "react";
import { RecoilRoot } from "recoil";
import EasyNumberInput from "./";

export default {
    title: "Elements/EasyNumberInput"
};


export const Basic = () => <RecoilRoot><EasyNumberInput label="New number input" /></RecoilRoot>;
export const Required = () => <RecoilRoot><EasyNumberInput label="New number input" required /></RecoilRoot>;
export const MinValue = () => <RecoilRoot><EasyNumberInput label="New number input" min={3} /></RecoilRoot>;
