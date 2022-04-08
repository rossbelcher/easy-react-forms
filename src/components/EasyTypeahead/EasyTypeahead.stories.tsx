import React from "react";
import { RecoilRoot } from "recoil";
import EasyTypeahead from "./";

export default {
    title: "Elements/EasyTypeahead"
};

export const Basic = () => <RecoilRoot><EasyTypeahead items={[{value: 'Test 1'}, {value: 'Test 2'}]} label='Test typeahead' /></RecoilRoot>;
export const Placeholder = () => <RecoilRoot><EasyTypeahead items={[{value: 'Test 1'}, {value: 'Test 2'}]} label='Test typeahead' placeholder='Please type 3 characters...' /></RecoilRoot>;
export const Required = () => <RecoilRoot><EasyTypeahead items={[{value: 'Test 1'}, {value: 'Test 2'}]} label='Test typeahead' required /></RecoilRoot>;
export const RequiredLength = () => <RecoilRoot><EasyTypeahead items={[{value: 'Test 1'}, {value: 'Test 2'}]} label='Test typeahead' requiredLength={2} /></RecoilRoot>;