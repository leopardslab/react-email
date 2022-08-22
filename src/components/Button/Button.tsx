import { ReactNode, HTMLAttributeAnchorTarget } from 'react';
import type { BaseStyleProp } from '../types';
import { makeStyles } from '../../utils/makeStyles';
import { sx } from '../../utils/sx';
import { useTheme } from '../ThemeProvider';

export type ButtonStyles = 'root' | 'primary' | 'secondary';

/**
 * Interface for PropTypes for the `Button` component.
 */
export interface ButtonProps extends BaseStyleProp<ButtonStyles> {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Applies the theme button styles.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary';
  /**
   * The URL to link to when the button is clicked.
   * An `a` element will be used as the root node.
   */
  href: string;
  /**
   * The target of the link.
   * @default '_blank'
   */
  target?: HTMLAttributeAnchorTarget;
}

const useStyles = makeStyles({
  root: {},
  primary: {},
  secondary: {},
});

export const Button = ({
  children,
  variant = 'primary',
  href,
  target = '_blank',
  classes,
  className,
}: ButtonProps): JSX.Element => {
  const themeClasses = useTheme('button');
  const styles = useStyles({ classes }, themeClasses);
  const buttonStyle = sx(styles.root, styles[variant]);

  return (
    <a href={href} target={target} style={buttonStyle} className={className}>
      {children}
    </a>
  );
};
