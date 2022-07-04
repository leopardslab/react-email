import { ReactNode } from 'react';
import { BaseStyleProp } from '../types';
import { makeStyles } from '../../utils/makeStyles';
import { sx } from '../../utils/sx';

type ButtonStyles = 'root' | 'primary' | 'secondary';

export interface ButtonProps extends BaseStyleProp<ButtonStyles> {
  children?: ReactNode;
  variant?: 'primary' | 'secondary';
  href: string;
}

const useStyles = makeStyles({
  root: {
    fontSize: '18px',
    textDecoration: 'none',
    padding: '10px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  primary: {},
  secondary: {},
});

export const Button = ({
  children,
  variant = 'primary',
  href,
  classes,
  className,
}: ButtonProps): JSX.Element => {
  const styles = useStyles({ classes });
  const buttonStyle = sx(styles.root, styles[variant]);

  return (
    <a href={href} target="_blank" style={buttonStyle} className={className}>
      {children}
    </a>
  );
};
