import { ReactNode } from 'react';
import { BaseStyleProp } from '../types';
import { makeStyles } from '../../utils/makeStyles';

type EmailStyles = 'root';

export interface EmailProps extends BaseStyleProp<EmailStyles> {
  children?: ReactNode;
}

const useStyles = makeStyles({
  root: {
    margin: '0px auto',
    maxWidth: '600px',
  },
});

export const Email = ({ children, className, classes }: EmailProps): JSX.Element => {
  const styles = useStyles({ classes });

  return (
    <div style={styles.root} className={className}>
      {children}
    </div>
  );
};
