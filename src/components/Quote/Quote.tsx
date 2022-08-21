import { ReactNode } from 'react';
import { makeStyles } from '../../utils/makeStyles';
import type { BaseStyleProp } from '../types';
import { useTheme } from '../ThemeProvider';

export type QuoteStyles = 'root';

export interface QuoteProps extends BaseStyleProp<QuoteStyles> {
  children?: ReactNode;
}

const useStyles = makeStyles({
  root: { margin: 0, padding: 0 },
});

export const Quote = ({ children, classes, className }: QuoteProps) => {
  const themeClasses = useTheme('quote');
  const styles = useStyles({ classes }, themeClasses);

  return (
    <div style={styles.root} className={className} id="quote">
      {children}
    </div>
  );
};
