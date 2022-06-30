import { ReactNode } from 'react';

export interface SectionProps {
  children?: ReactNode;
}

export const Section = ({ children }: SectionProps): JSX.Element => {
  return <tr>{children}</tr>;
};
