import React from 'react';
import Container from '../component/atoms/container';
import Row from '../component/atoms/row';
import Cell from '../component/atoms/cell';

export default {
  title: 'Cell',
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
      <Cell>Hello 1</Cell>
      <Cell>Hello 2</Cell>
      <Cell>Hello 3</Cell>
    </Row>
    <Row
      style={{
        align: 'right',
        backgroundColor: 'white',
        verticalAlign: 'bottom',
      }}
    >
      <Cell
        colspan={3}
        style={{ backgroundColor: 'yellow', textAlign: 'center' }}
      >
        World
      </Cell>
    </Row>
  </Container>
);
