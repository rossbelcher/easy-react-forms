import React from "react";
import { RecoilRoot } from "recoil";
import EasyCheckbox from './';

export default {
    title: "Elements/EasyCheckbox"
};

export const Basic = () => <RecoilRoot><EasyCheckbox label='My Checkbox' /></RecoilRoot>;
export const Required = () => <RecoilRoot><EasyCheckbox label='My Checkbox' required /></RecoilRoot>;
