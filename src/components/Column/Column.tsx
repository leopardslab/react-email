import { CSSProperties, ReactNode } from 'react';
import { makeStyles } from '../../utils/makeStyles';
import { sx } from '../../utils/sx';
import { BaseStyleProp } from '../types';

type ColumnStyles = 'root';

export interface ColumnProps extends BaseStyleProp<ColumnStyles> {
  children?: ReactNode;
  align?: 'left' | 'center' | 'right';
  verticalAlign?: CSSProperties['verticalAlign'];
}

const useStyles = makeStyles({
  root: {},
});

export const Column = ({
  children,
  className,
  classes,
  align = 'center',
  verticalAlign = 'top',
}: ColumnProps): JSX.Element => {
  const styles = useStyles({ classes });

  return (
    <td className={className} style={sx(styles.root, { verticalAlign })} align={align}>
      {children}
    </td>
  );
};
