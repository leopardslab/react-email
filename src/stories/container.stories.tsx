import React from 'react';
import Container from '../component/atoms/container';

export default {
  title: 'Container component',
  component: Container,
};

export const Basic = () => (
  <Container
    style={{
      border: '3px solid black',
      backgroundColor: 'red',
      padding: 10,
      borderSpacing: 10,
      width: '100px',
      height: '100px',
      cssFloat: 'left',
    }}
  >
    Hello, World!!
  </Container>
);
