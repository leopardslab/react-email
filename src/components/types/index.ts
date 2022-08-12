import { CSSProperties } from 'react';

export interface BaseStyleProp<T extends string> {
  /**
   * The classes object to be merged with the base styles.
   */
  classes?: Partial<Record<T, CSSProperties>>;
  /**
   * The class name to be applied to the element.
   */
  className?: string;
}
