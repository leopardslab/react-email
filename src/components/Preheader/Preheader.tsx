import { makeStyles } from '../../utils/makeStyles';
import { BaseStyleProp } from '../types';

type PreheaderStyles = 'root';

/**
 * Interface for PropTypes for the `Preheader` component.
 */
export interface PreheaderProps extends BaseStyleProp<PreheaderStyles> {
  /**
   * The text for the preheader.
   */
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
  const styles = useStyles({ classes });

  return (
    <div style={styles.root} className={className}>
      {text}
    </div>
  );
};
