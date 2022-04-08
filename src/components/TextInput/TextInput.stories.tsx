import React from "react";
import { RecoilRoot } from "recoil";
import EasyTextInput from "./";

export default {
    title: "Elements/EasyTextInput"
};

export const Basic = () => <RecoilRoot><EasyTextInput label="New text input" /></RecoilRoot>;
export const Required = () => <RecoilRoot><EasyTextInput label="New text input" required /></RecoilRoot>;
export const MinCharacters = () => <RecoilRoot><EasyTextInput label="New text input" min={3} /></RecoilRoot>;
