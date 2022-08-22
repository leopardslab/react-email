import { CSSProperties } from 'react';
import { makeStyles } from '../../utils/makeStyles';
import { sx } from '../../utils/sx';
import type { BaseStyleProp } from '../types';
import { useTheme } from '../ThemeProvider';

export type DividerStyles = 'root';

/**
 * Interface for PropTypes for the `Divider` component.
 */
export interface DividerProps extends BaseStyleProp<DividerStyles> {
  /**
   * The alignment of the divider.
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';
  /**
   * The color of the divider.
   */
  color?: CSSProperties['borderColor'];
  /**
   * The type of the divider.
   * @default 'solid'
   */
  type?: CSSProperties['borderStyle'];
  /**
   * The thickness of the divider.
   * @default '1px'
   */
  size?: CSSProperties['borderWidth'];
  /**
   * The width of the divider.
   * @default '100%'
   */
  width?: CSSProperties['width'];
}

const alignStyles: Record<'left' | 'center' | 'right', CSSProperties> = {
  left: { marginLeft: '0' },
  center: { margin: 'auto' },
  right: { marginRight: '0' },
};

const useStyles = makeStyles({
  root: {},
});

export const Divider = ({
  classes,
  className,
  align = 'left',
  color = '',
  type = 'solid',
  size = '1px',
  width = '100%',
}: DividerProps): JSX.Element => {
  const themeClasses = useTheme('divider');
  const styles = useStyles({ classes }, themeClasses);
  const hrStyles = sx(styles.root, alignStyles[align], {
    borderTop: `${size} ${type} ${color}`,
    width: width,
  });

  return <hr style={hrStyles} className={className} />;
};
