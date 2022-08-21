import { makeStyles } from '../../utils/makeStyles';
import type { BaseStyleProp } from '../types';
import { useTheme } from '../ThemeProvider';

export type PreheaderStyles = 'root';

export interface PreheaderProps extends BaseStyleProp<PreheaderStyles> {
  text: string;
}

const useStyles = makeStyles({
  root: {
    display: 'none',
    fontSize: '1px',
    color: '#fff',
    lineHeight: '1px',
    maxHeight: 0,
    maxWidth: 0,
    opacity: 0,
    overflow: 'hidden',
  },
});

export const Preheader = ({ text, classes, className }: PreheaderProps) => {
  const themeClasses = useTheme('preheader');
  const styles = useStyles({ classes }, themeClasses);

  return (
    <div style={styles.root} className={className} id="preheader">
      {text}
    </div>
  );
};
