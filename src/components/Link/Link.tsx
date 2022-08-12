import { ReactNode, HTMLAttributeAnchorTarget } from 'react';
import { BaseStyleProp } from '../types';
import { makeStyles } from '../../utils/makeStyles';

type LinkStyles = 'root';

/**
 * Interface for PropTypes for the `Link` component.
 */
export interface LinkProps extends BaseStyleProp<LinkStyles> {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * The URL to link to.
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
