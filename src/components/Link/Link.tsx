import { ReactNode, HTMLAttributeAnchorTarget } from 'react';
import type { BaseStyleProp } from '../types';
import { makeStyles } from '../../utils/makeStyles';
import { useTheme } from '../ThemeProvider';

export type LinkStyles = 'root';

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
  const themeClasses = useTheme('link');
  const styles = useStyles({ classes }, themeClasses);

  return (
    <a href={href} target={target} style={styles.root} className={className}>
      {children}
    </a>
  );
};
