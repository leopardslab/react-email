import { ReactNode } from 'react';

export interface SectionProps {
  children?: ReactNode;
  className?: string;
}

export const Section = ({ children, className }: SectionProps): JSX.Element => {
  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
      style={{ width: '100%', border: '0', verticalAlign: 'top' }}
      className={className}
    >
      <tr>{children}</tr>
    </table>
  );
};
