import { CSSProperties } from 'react';

export interface BaseStyleProp<T extends string> {
  classes?: Record<T, CSSProperties>;
  className?: string;
}
