import { ReactNode } from 'react';
import { BaseStyleProp } from '../types';
import { makeStyles } from '../../utils/makeStyles';
import { ThemeProvider, useTheme } from '../ThemeProvider';
import type { ThemeOptions } from '../DefaultTheme';
import { defaultTheme } from '../DefaultTheme';

export type EmailStyles = 'root';

export interface EmailProps extends BaseStyleProp<EmailStyles> {
  children?: ReactNode;
  theme?: ThemeOptions;
}

const useStyles = makeStyles({
  root: {
    margin: '0px auto',
    maxWidth: '600px',
  },
});

export const Email = ({ theme = defaultTheme, ...rest }: EmailProps) => {
  return (
    <ThemeProvider theme={theme}>
      <EmailComponent {...rest} />
    </ThemeProvider>
  );
};

const EmailComponent = ({
  children,
  className,
  classes,
}: Omit<EmailProps, 'theme'>): JSX.Element => {
  const themeClasses = useTheme('email');
  const styles = useStyles({ classes }, themeClasses);

  return (
    <div style={styles.root} className={className}>
      {children}
    </div>
  );
};
