import React from 'react';
import { atom, RecoilRoot } from 'recoil';

interface ComponentProps {
    children: React.ReactNode;
}

export const FormControlState = (formId, model) => atom<any>({
  key: `${formId}--${model}`,
  default: {}
})

const EasyFormConsumer = ({ children }: ComponentProps) => {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  );
};

export default EasyFormConsumer;