import { CSSProperties } from 'react';
import { CSSClasses } from './stylings';

const isObject = (item: CSSClasses | CSSProperties): boolean => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

export const mergeDeep = (target: CSSClasses, ...sources: CSSClasses[]): CSSClasses => {
  if (!sources.length) return target;
  const source: CSSClasses = sources.shift() as CSSClasses;

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, {
            [key]: source[key],
          });
        } else {
          const targetObject = { ...target[key] };
          const srcObject = { ...source[key] };
          const mergedObject = Object.assign(targetObject, srcObject);
          target[key] = mergedObject;
        }
      } else {
        Object.assign(target, {
          [key]: source[key],
        });
      }
    }
  }

  if (sources.length) {
    return mergeDeep(target, ...sources);
  } else {
    return target;
  }
};
