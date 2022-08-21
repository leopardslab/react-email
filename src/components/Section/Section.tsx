import { ReactNode } from 'react';
import { makeStyles } from '../../utils/makeStyles';
import { sx } from '../../utils/sx';
import type { BaseStyleProp } from '../types';
import { useTheme } from '../ThemeProvider';

export type SectionStyles = 'root' | 'body' | 'row';

export interface SectionProps extends BaseStyleProp<SectionStyles> {
  children?: ReactNode;
  fullWidth?: boolean;
}

const useStyles = makeStyles({
  root: { border: '0', verticalAlign: 'top' },
  body: {},
  row: {},
});

export const Section = ({
  children,
  className,
  classes,
  fullWidth = true,
}: SectionProps): JSX.Element => {
  const themeClasses = useTheme('section');
  const styles = useStyles({ classes }, themeClasses);

  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
      style={sx(styles.root, fullWidth && { width: '100%' })}
      className={className}
    >
      <tbody style={styles.body}>
        <tr style={styles.row}>{children}</tr>
      </tbody>
    </table>
  );
};
