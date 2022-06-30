import { ReactNode, CSSProperties } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  variant?: 'primary' | 'secondary';
  href: string;
  align?: 'left' | 'center' | 'right';
  style?: CSSProperties;
}

export const Button = ({
  children,
  //   variant = 'primary',
  href,
  align = 'center',
  style,
}: ButtonProps): JSX.Element => {
  return (
    <td
      align={align}
      style={{
        padding: '10px 25px',
        wordBreak: 'break-word',
      }}
    >
      <a
        href={href}
        target="_blank"
        style={{
          fontSize: '18px',
          textDecoration: 'none',
          padding: '10px 16px',
          borderRadius: '5px',
          cursor: 'pointer',
          ...style,
        }}
      >
        {children}
      </a>
    </td>
  );
};
