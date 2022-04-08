import React from "react";
import { RecoilRoot } from "recoil";
import EasyCurrencyInput from ".";

export default {
    title: "Elements/EasyCurrencyInput"
};

export const Basic = () => <RecoilRoot><EasyCurrencyInput label="New currency input" /></RecoilRoot>;
export const Required = () => <RecoilRoot><EasyCurrencyInput label="New currency input" required /></RecoilRoot>;
export const MinValue = () => <RecoilRoot><EasyCurrencyInput label="New currency input" min={3} /></RecoilRoot>;
