import { Header } from '@/components/header';
import React, { type PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={'container mx-auto flex flex-col gap-2'}>
      <Header />
      <div className={'mx-8'}>{children}</div>
    </div>
  );
};
