import { ReactNode } from 'react';

interface EmailProps {
  children?: ReactNode;
}

export const Email = ({ children }: EmailProps) => {
  return <div>{children}</div>;
};
