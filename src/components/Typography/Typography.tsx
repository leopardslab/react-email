import { CSSProperties, ReactNode } from 'react';

export interface TypographyProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption';
  children: ReactNode;
  style?: CSSProperties;
  align?: 'left' | 'center' | 'right';
}

const ComponentMapping = {
  h1: (children: ReactNode, styles?: CSSProperties) => <h1 style={styles}>{children}</h1>,
  h2: (children: ReactNode, styles?: CSSProperties) => <h2 style={styles}>{children}</h2>,
  h3: (children: ReactNode, styles?: CSSProperties) => <h3 style={styles}>{children}</h3>,
  h4: (children: ReactNode, styles?: CSSProperties) => <h4 style={styles}>{children}</h4>,
  h5: (children: ReactNode, styles?: CSSProperties) => <h5 style={styles}>{children}</h5>,
  h6: (children: ReactNode, styles?: CSSProperties) => <h6 style={styles}>{children}</h6>,
  subtitle1: (children: ReactNode, styles?: CSSProperties) => <h6 style={styles}>{children}</h6>,
  subtitle2: (children: ReactNode, styles?: CSSProperties) => <h6 style={styles}>{children}</h6>,
  body1: (children: ReactNode, styles?: CSSProperties) => <p style={styles}>{children}</p>,
  body2: (children: ReactNode, styles?: CSSProperties) => <p style={styles}>{children}</p>,
  caption: (children: ReactNode, styles?: CSSProperties) => <p style={styles}>{children}</p>,
};

export const Typography = ({
  children,
  variant = 'body1',
  style,
  align = 'left',
}: TypographyProps): JSX.Element => {
  return (
    <td
      align={align}
      style={{
        padding: '10px 20px',
        wordBreak: 'break-word',
      }}
    >
      {ComponentMapping[variant](children, { margin: '0', padding: '0', ...style })}
    </td>
  );
};
