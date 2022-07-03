import { ReactNode } from 'react';
import { BaseStyleProp } from '../types';
import { makeStyles } from '../../utils/makeStyles';

type ColumnStyles = 'root';

export interface ColumnProps extends BaseStyleProp<ColumnStyles> {
  children?: ReactNode;
  align?: 'left' | 'center' | 'right';
}

const useStyles = makeStyles({
  root: {},
});

export const Column = ({
  children,
  className,
  classes,
  align = 'left',
}: ColumnProps): JSX.Element => {
  const styles = useStyles({ classes });

  return (
    <td className={className} style={styles.root} align={align}>
      {children}
    </td>
  );
};
