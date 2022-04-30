import React from 'react';
import Container from '../component/atoms/container';

export default {
  title: 'Container component',
  component: Container,
};

export const Basic = () => (
  <Container
    cellspacing={10}
    cellpadding={20}
    width="100px"
    style={{
      border: '3px solid black',
      backgroundColor: 'red',
    }}
  >
    Hello, World!!
  </Container>
);
