import { CSSProperties, ReactNode } from 'react';

export interface ColumnProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Column = ({ children, className, style }: ColumnProps): JSX.Element => {
  return (
    <td className={className} style={style}>
      {children}
    </td>
  );
};
