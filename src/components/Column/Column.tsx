import { CSSProperties, ReactNode } from 'react';

export interface ColumnProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  align?: 'left' | 'center' | 'right';
}

export const Column = ({
  children,
  className,
  style,
  align = 'left',
}: ColumnProps): JSX.Element => {
  return (
    <td className={className} style={style} align={align}>
      {children}
    </td>
  );
};
