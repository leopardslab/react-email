import { ReactNode } from 'react';
import { makeStyles } from '../../utils/makeStyles';
import { BaseStyleProp } from '../types';

type SectionStyles = 'root' | 'body' | 'row';

export interface SectionProps extends BaseStyleProp<SectionStyles> {
  children?: ReactNode;
}

const useStyles = makeStyles({
  root: { width: '100%', border: '0', verticalAlign: 'top' },
  body: {},
  row: {},
});

export const Section = ({ children, className, classes }: SectionProps): JSX.Element => {
  const styles = useStyles({ classes });

  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
      style={styles.root}
      className={className}
    >
      <tbody style={styles.body}>
        <tr style={styles.row}>{children}</tr>
      </tbody>
    </table>
  );
};
