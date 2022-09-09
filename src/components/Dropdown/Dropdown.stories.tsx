import React from "react";
import { RecoilRoot } from "recoil";
import EasyDropdown from "./";

export default {
    title: "Elements/EasyDropdown"
};

export const Basic = () => <RecoilRoot><EasyDropdown label="New dropdown" items={[{value: 'testItem1', text: 'Test Item 1'}, {value: 'testItem2', text: 'Test Item 2'}]} /></RecoilRoot>;
export const Required = () => <RecoilRoot><EasyDropdown label="New dropdown" items={[{value: 'testItem1', text: 'Test Item 1'}, {value: 'testItem2', text: 'Test Item 2'}]} required /></RecoilRoot>;
export const NoDefaultText = () => <RecoilRoot><EasyDropdown label="New dropdown" items={[{value: 'testItem1', text: 'Test Item 1'}, {value: 'testItem2', text: 'Test Item 2'}]} addDefault={false} /></RecoilRoot>;
export const CustomDefaultText = () => <RecoilRoot><EasyDropdown label="New dropdown" items={[{value: 'testItem1', text: 'Test Item 1'}, {value: 'testItem2', text: 'Test Item 2'}]} defaultText='My default text' /></RecoilRoot>;