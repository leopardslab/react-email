import { ReactNode, HTMLAttributeAnchorTarget } from 'react';
import { BaseStyleProp } from '../types';
import { makeStyles } from '../../utils/makeStyles';
import { sx } from '../../utils/sx';

type ButtonStyles = 'root' | 'primary' | 'secondary';

export interface ButtonProps extends BaseStyleProp<ButtonStyles> {
  children?: ReactNode;
  variant?: 'primary' | 'secondary';
  href: string;
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
  const styles = useStyles({ classes });
  const buttonStyle = sx(styles.root, styles[variant]);

  return (
    <a href={href} target={target} style={buttonStyle} className={className}>
      {children}
    </a>
  );
};
