import { CSSProperties } from 'react';
import { sx } from './sx';

const primary: CSSProperties = {
  color: 'red',
  backgroundColor: 'blue',
};

const button: CSSProperties = {
  color: 'yellow',
  borderRadius: '10px',
};

const expectedStyle: CSSProperties = {
  color: 'yellow',
  backgroundColor: 'blue',
  borderRadius: '10px',
};

describe('sx tests', () => {
  test('combining primary and button styles with sx should return expectedStyle', () => {
    const style = sx(primary, button);

    expect(style).toEqual(expectedStyle);
  });
});
