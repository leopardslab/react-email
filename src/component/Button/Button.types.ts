import { MouseEventHandler } from 'react';

export interface ButtonProps {
  type: 'primary' | 'secondary' | 'error';
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
