import React, { ReactChild, ReactChildren } from 'react';

type Props = {
  style?: Object;
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
};

const Row = (props: Props) => {
  const { style, children } = props;

  return <tr style={style}>{children}</tr>;
};

export default Row;
