import React, { ReactChild, ReactChildren } from 'react';

const defaultProps = {
  colspan: 1,
  rowspan: 1,
};

type Props = {
  colspan?: number;
  rowspan?: number;
  headers?: string;
  style?: object;
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
} & typeof defaultProps;

const Cell = (props: Props) => {
  const { colspan, rowspan, headers, style, children } = props;

  return (
    <td colSpan={colspan} rowSpan={rowspan} headers={headers} style={style}>
      {children}
    </td>
  );
};

Cell.defaultProps = defaultProps;

export default Cell;
