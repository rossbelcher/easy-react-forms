import React from 'react';
interface ComponentProps {
    children: React.ReactChild;
}
export declare const FormControlData: import("recoil").RecoilState<any>;
export declare const FormControlState: (formId: any, model: any) => import("recoil").RecoilState<any>;
declare const EasyFormConsumer: ({ children }: ComponentProps) => JSX.Element;
export default EasyFormConsumer;
