import { CSSProperties } from 'react';
import { makeStyles } from '../../utils/makeStyles';
import { sx } from '../../utils/sx';
import type { BaseStyleProp } from '../types';
import { useTheme } from '../ThemeProvider';

export type DividerStyles = 'root';

export interface DividerProps extends BaseStyleProp<DividerStyles> {
  align?: 'left' | 'center' | 'right';
  color?: CSSProperties['borderColor'];
  type?: CSSProperties['borderStyle'];
  size?: CSSProperties['borderWidth'];
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
