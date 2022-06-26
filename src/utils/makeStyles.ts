import { CSSProperties } from 'react';

interface CSSClasses {
  [key: string]: CSSProperties;
}

const mergeStyles = (target: CSSClasses, source: CSSClasses): CSSClasses => {
  for (const key in source) {
    target[key] = Object.assign({ ...target[key] }, { ...source[key] });
  }

  return target;
};

export const makeStyles = (classes: CSSClasses) => {
  return (classes_?: CSSClasses) => {
    return mergeStyles(classes, classes_ as CSSClasses);
  };
};
