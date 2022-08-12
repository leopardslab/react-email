import { CSSProperties } from 'react';

type SXProps = CSSProperties | false | undefined;

/**
 * Function to merge CSSProperties.
 * @param args - The CSSProperties to be merged with the override CSSProperties
 * @returns The merged CSSProperties.
 */

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
