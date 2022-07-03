import { CSSProperties, ReactNode } from 'react';

export interface EmailProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Email = ({ children, className, style }: EmailProps): JSX.Element => {
  return (
    <div style={{ margin: '0px auto', maxWidth: '600px', ...style }} className={className}>
      {children}
    </div>
  );
};
