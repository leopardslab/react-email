import { ReactNode, HTMLAttributeAnchorTarget } from 'react';
import { BaseStyleProp } from '../types';
import { makeStyles } from '../../utils/makeStyles';

type LinkStyles = 'root';

export interface LinkProps extends BaseStyleProp<LinkStyles> {
  children?: ReactNode;
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

const useStyles = makeStyles({
  root: {},
});

export const Link = ({
  children,
  href,
  target = '_blank',
  classes,
  className,
}: LinkProps): JSX.Element => {
  const styles = useStyles({ classes });

  return (
    <a href={href} target={target} style={styles.root} className={className}>
      {children}
    </a>
  );
};
