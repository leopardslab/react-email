import React, { ReactChild, ReactChildren } from 'react';

type Props = {
  cellpadding?: number;
  cellspacing?: number;
  width?: string;
  style?: Object;
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
};

const Container = (props: Props) => {
  const { cellpadding, cellspacing, width, style, children } = props;
  return (
    <table
      cellPadding={cellpadding}
      cellSpacing={cellspacing}
      width={width}
      style={style}
    >
      <tbody>{children}</tbody>
    </table>
  );
};

export default Container;
