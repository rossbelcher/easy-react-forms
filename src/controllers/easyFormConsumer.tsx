import React, { useEffect } from 'react';
import { atom, RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';

interface ComponentProps {
    children: React.ReactChild;
}

export const FormControlData = atom<any>({
  key: `formStateData`,
  default: {}
})

export const FormControlState = (formId, model) => atom<any>({
  key: `${formId}--${model}`,
  default: {}
})

const EasyFormConsumer = ({ children }: ComponentProps) => {
  return (
    <RecoilRoot>{children}</RecoilRoot>
  );
};

export default EasyFormConsumer;