import React from 'react';
import Button from '../component/Button/Button';

export default {
  title: 'Button component',
  component: Button,
};

export const Basic = () => (
  <Button
    type="primary"
    text="Click me"
    onClick={() => {
      // eslint-disable-next-line no-console
      console.log('Clicked me');
    }}
  />
);
