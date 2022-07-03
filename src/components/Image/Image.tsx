import { CSSProperties } from 'react';

export interface ImageProps {
  src: string;
  alt: string;
  width: string | number;
  height?: string | number;
  style?: CSSProperties;
  align?: 'left' | 'center' | 'right';
}

export const Image = ({
  src,
  alt,
  width,
  height = 'auto',
  style,
  align = 'left',
}: ImageProps): JSX.Element => {
  return (
    <td
      align={align}
      style={{
        padding: '10px 20px',
        wordBreak: 'break-word',
      }}
    >
      <img
        height={height}
        width={width}
        src={src}
        alt={alt}
        style={{
          border: '0',
          display: 'block',
          outline: 'none',
          ...style,
        }}
      />
    </td>
  );
};
