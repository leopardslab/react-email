import { ReactNode } from 'react';

export interface EmailProps {
  children?: ReactNode;
}

export const Email = ({ children }: EmailProps): JSX.Element => {
  return (
    <div style={{ margin: '0px auto', maxWidth: '600px' }}>
      <table
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
        style={{ width: '100%', border: '0', verticalAlign: 'top' }}
      >
        {children}
      </table>
    </div>
  );
};
