import { ReactNode } from 'react';
import { makeStyles } from '../../utils/makeStyles';
import { BaseStyleProp } from '../types';

type QuoteStyles = 'root';

export interface QuoteProps extends BaseStyleProp<QuoteStyles> {
  children?: ReactNode;
}

const useStyles = makeStyles({
  root: { margin: 0, padding: 0 },
});

export const Quote = ({ children, classes, className }: QuoteProps) => {
  const styles = useStyles({ classes });

  return (
    <div style={styles.root} className={className}>
      {'>'} {children}
    </div>
  );
};
