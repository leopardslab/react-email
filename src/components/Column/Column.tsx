import { ReactNode } from 'react';

export interface ColumnProps {
  children?: ReactNode;
}

export const Column = ({ children }: ColumnProps): JSX.Element => {
  return <tbody>{children}</tbody>;
};
