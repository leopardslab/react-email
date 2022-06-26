import { CSSProperties } from 'react';
import { sx } from './sx';

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

export const makeStyles = (classes: CSSClasses) => {
  return (options?: overrideOptions) => {
    const overrideClasses = options?.classes;
    if (!overrideClasses) {
      return classes;
    }

    return mergeStyles(classes, overrideClasses);
  };
};
