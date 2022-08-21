import { CSSProperties, ReactNode } from 'react';
import { makeStyles } from '../../utils/makeStyles';
import { sx } from '../../utils/sx';
import { BaseStyleProp } from '../types';

type ColumnStyles = 'root';

/**
 * Interface for PropTypes for the `Column` component.
 */
export interface ColumnProps extends BaseStyleProp<ColumnStyles> {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * The alignment of the children.
   * @default 'center'
   */
  align?: 'left' | 'center' | 'right';
  /**
   * The vertical alignment of the children.
   * @default 'top'
   */
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
  const styles = useStyles({ classes });

  return (
    <td className={className} style={sx(styles.root, { verticalAlign })} align={align}>
      {children}
    </td>
  );
};
