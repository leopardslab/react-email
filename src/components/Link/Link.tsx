import { ReactNode, CSSProperties } from 'react';

export interface LinkProps {
  children?: ReactNode;
  href: string;
  align?: 'left' | 'center' | 'right';
  style?: CSSProperties;
}

export const Link = ({ children, href, align = 'left', style }: LinkProps): JSX.Element => {
  return (
    <td
      align={align}
      style={{
        padding: '10px 20px',
        wordBreak: 'break-word',
      }}
    >
      <a
        href={href}
        target="_blank"
        style={{
          fontSize: '18px',
          ...style,
        }}
      >
        {children}
      </a>
    </td>
  );
};
