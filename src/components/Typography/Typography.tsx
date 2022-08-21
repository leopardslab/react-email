import { CSSProperties, ReactNode } from 'react';
import { BaseStyleProp } from '../types';
import { makeStyles } from '../../utils/makeStyles';
import { sx } from '../../utils/sx';

type ButtonStyles = 'root';

/**
 * Interface for PropTypes for the `Typography` component.
 */
export interface TypographyProps extends BaseStyleProp<ButtonStyles> {
  /**
   * The content of the component.
   */
  children: ReactNode;
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption';
  /**
   * Set the text-align on the component.
   * @default 'left'
   */
  align?: CSSProperties['textAlign'];
}

interface ComponentMappingProps {
  children: ReactNode;
  styles?: CSSProperties;
  className?: string;
}

const ComponentMapping = {
  h1: ({ children, styles, className }: ComponentMappingProps) => (
    <h1 style={styles} className={className}>
      {children}
    </h1>
  ),
  h2: ({ children, styles, className }: ComponentMappingProps) => (
    <h2 style={styles} className={className}>
      {children}
    </h2>
  ),
  h3: ({ children, styles, className }: ComponentMappingProps) => (
    <h3 style={styles} className={className}>
      {children}
    </h3>
  ),
  h4: ({ children, styles, className }: ComponentMappingProps) => (
    <h4 style={styles} className={className}>
      {children}
    </h4>
  ),
  h5: ({ children, styles, className }: ComponentMappingProps) => (
    <h5 style={styles} className={className}>
      {children}
    </h5>
  ),
  h6: ({ children, styles, className }: ComponentMappingProps) => (
    <h6 style={styles} className={className}>
      {children}
    </h6>
  ),
  subtitle1: ({ children, styles, className }: ComponentMappingProps) => (
    <h6 style={styles} className={className}>
      {children}
    </h6>
  ),
  subtitle2: ({ children, styles, className }: ComponentMappingProps) => (
    <h6 style={styles} className={className}>
      {children}
    </h6>
  ),
  body1: ({ children, styles, className }: ComponentMappingProps) => (
    <p style={styles} className={className}>
      {children}
    </p>
  ),
  body2: ({ children, styles, className }: ComponentMappingProps) => (
    <p style={styles} className={className}>
      {children}
    </p>
  ),
  caption: ({ children, styles, className }: ComponentMappingProps) => (
    <p style={styles} className={className}>
      {children}
    </p>
  ),
};

const useStyles = makeStyles({
  root: { margin: '0', padding: '0' },
  h1: {},
  h2: {},
  h3: {},
  h4: {},
  h5: {},
  h6: {},
  subtitle1: {},
  subtitle2: {},
  body1: {},
  body2: {},
  caption: {},
});

export const Typography = ({
  children,
  variant = 'body1',
  classes,
  className,
  align = 'left',
}: TypographyProps): JSX.Element => {
  const styles = useStyles({ classes });

  return ComponentMapping[variant]({
    children,
    styles: sx(styles.root, styles[variant], { textAlign: align }),
    className,
  });
};
