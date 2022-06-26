import { CSSProperties } from 'react';

type SXProps = CSSProperties | false | undefined;

export const sx = (...args: SXProps[]): CSSProperties => {
  const initialValue: CSSProperties = {};

  const result = args.reduce((prev: CSSProperties, curr: SXProps) => {
    if (!curr) {
      return prev;
    }
    return { ...prev, ...curr };
  }, initialValue);

  return result;
};
