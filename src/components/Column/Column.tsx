import { CSSProperties, ReactNode } from 'react';
import { makeStyles } from '../../utils/makeStyles';
import { sx } from '../../utils/sx';
import type { BaseStyleProp } from '../types';
import { useTheme } from '../ThemeProvider';

export type ColumnStyles = 'root';

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
  const themeClasses = useTheme('column');
  const styles = useStyles({ classes }, themeClasses);

  return (
    <td className={className} style={sx(styles.root, { verticalAlign })} align={align}>
      {children}
    </td>
  );
};
