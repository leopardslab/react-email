import { CSSProperties } from 'react';
import { sx } from '../sx';

export interface CSSClasses {
  [key: string]: CSSProperties;
}

interface overrideOptions {
  classes?: CSSClasses;
}

const mergeStyles = (originalClasses: CSSClasses, overrideClasses: CSSClasses): CSSClasses => {
  const newClasses: CSSClasses = {};

  for (const key in originalClasses) {
    newClasses[key] = sx(originalClasses[key], overrideClasses[key]);
  }

  return newClasses;
};

/**
 * Function which revokes a hook to combine and merge classes.
 * @param classes - The classes to be merged with the override classes
 * @returns The `useStyles` hook to combine and merge classes.
 */

export const makeStyles = (classes: CSSClasses) => {
  return (options?: overrideOptions) => {
    const overrideClasses = options?.classes;
    if (!overrideClasses) {
      return classes;
    }

    return mergeStyles(classes, overrideClasses);
  };
};
