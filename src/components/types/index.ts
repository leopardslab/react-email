import { CSSProperties } from 'react';

export interface BaseStyleProp<T extends string> {
  classes?: Partial<Record<T, CSSProperties>>;
  className?: string;
}
