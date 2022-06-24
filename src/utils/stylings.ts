import { CSSProperties } from 'react';
import { mergeDeep } from './mergeDeep';

export interface CSSClasses {
  [key: string]: CSSProperties;
}

export const sx = (...args: CSSProperties[]): CSSProperties => {
  const initialValue: CSSProperties = {};

  const result = args.reduce((prev: CSSProperties, curr: CSSProperties) => {
    return { ...prev, ...curr };
  }, initialValue);

  return result;
};

export const makeStyles = (classes: CSSClasses) => {
  return (classes_: CSSClasses) => {
    return mergeDeep(classes, classes_);
  };
};
