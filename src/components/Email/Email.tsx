import { CSSProperties, ReactNode } from 'react';
import { makeStyles } from '../../utils/makeStyles';

export interface EmailProps {
  children?: ReactNode;
  className?: string;
  styles?: Record<'email', CSSProperties>;
}

const useStyles = makeStyles({
  email: {
    margin: '0px auto',
    maxWidth: '600px',
  },
});

export const Email = ({ children, className, styles }: EmailProps): JSX.Element => {
  const style = useStyles({ classes: styles });

  return (
    <div style={style.email} className={className}>
      {children}
    </div>
  );
};
