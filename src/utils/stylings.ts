import { CSSProperties } from 'react';

export const sx = (...args: CSSProperties[]): CSSProperties => {
  const initialValue: CSSProperties = {};

  const result = args.reduce((prev: CSSProperties, curr: CSSProperties) => {
    return { ...prev, ...curr };
  }, initialValue);

  return result;
};
