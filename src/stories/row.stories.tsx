import React from 'react';
import Container from '../component/atoms/container';
import Row from '../component/atoms/row';

export default {
  title: 'Row',
};

export const Default = () => (
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
    <Row
      style={{
        align: 'right',
        backgroundColor: 'blue',
        verticalAlign: 'bottom',
      }}
    >
      Row 1
    </Row>
    <Row
      style={{
        align: 'right',
        backgroundColor: 'blue',
        verticalAlign: 'bottom',
      }}
    >
      Row 2
    </Row>
  </Container>
);
