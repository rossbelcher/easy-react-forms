import React from "react";
import { RecoilRoot } from "recoil";
import EasyTextArea from "./";

export default {
    title: "Elements/EasyTextArea"
};

export const Basic = () => <RecoilRoot><EasyTextArea label='My text area' /></RecoilRoot>;
export const Required = () => <RecoilRoot><EasyTextArea label='My text area' required /></RecoilRoot>;
export const MinLength = () => <RecoilRoot><EasyTextArea label='My text area' minLength={3} /></RecoilRoot>;
export const MaxLength = () => <RecoilRoot><EasyTextArea label='My text area' maxLength={3} /></RecoilRoot>;
export const TenRows = () => <RecoilRoot><EasyTextArea label='My text area' rows={10} /></RecoilRoot>;
