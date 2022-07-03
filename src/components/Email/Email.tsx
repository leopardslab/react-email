import { CSSProperties, ReactNode } from 'react';
import { makeStyles } from '../../utils/makeStyles';

export interface EmailProps {
  children?: ReactNode;
  className?: string;
  classes?: { email?: CSSProperties };
}

const useStyles = makeStyles({
  email: {
    margin: '0px auto',
    maxWidth: '600px',
  },
});

export const Email = ({ children, className, classes }: EmailProps): JSX.Element => {
  const styles = useStyles({ classes });

  return (
    <div style={styles.email} className={className}>
      {children}
    </div>
  );
};
