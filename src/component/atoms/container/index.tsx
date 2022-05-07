import React, { ReactChild, ReactChildren } from 'react';

type Props = {
  style?: Object;
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
};

const Container = (props: Props) => {
  const { style, children } = props;
  return (
    <table style={style}>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Container;
