import React from "react";
import { RecoilRoot } from "recoil";
import EasyCalendar from './'

export default {
    title: "Elements/EasyCalendar"
};

// export const Basic = () => <RecoilRoot><EasyCalendar label='My calendar' /></RecoilRoot>;
// export const Required = () => <RecoilRoot><EasyCalendar label='My calendar' required /></RecoilRoot>;
export const TestCalendar = () => <RecoilRoot><EasyCalendar label='My calendar' required /></RecoilRoot>;
