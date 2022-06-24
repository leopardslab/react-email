import { CSSProperties } from 'react';

// interface CSSClasses {
//   [key: string]: CSSProperties;
// }

export const sx = (...args: CSSProperties[]): CSSProperties => {
  const initialValue: CSSProperties = {};

  const result = args.reduce((prev: CSSProperties, curr: CSSProperties) => {
    return { ...prev, ...curr };
  }, initialValue);

  return result;
};
