import { CSSProperties } from 'react';

export interface BaseStyleProp<T extends string> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<Record<T, CSSProperties>>;
  /**
   * The class name to be applied to the element.
   */
  className?: string;
}
