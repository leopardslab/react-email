import { createContext, ReactNode, useContext } from 'react';
import type { ThemeOptions } from '../DefaultTheme';

const ThemeContext = createContext<ThemeOptions>({});

type componentTypes =
  | 'email'
  | 'section'
  | 'column'
  | 'button'
  | 'link'
  | 'divider'
  | 'typography'
  | 'image'
  | 'preheader'
  | 'quote';

export const useTheme = (componentName: componentTypes) => {
  const theme = useContext(ThemeContext);
  return theme[componentName];
};

interface ThemeProviderProps {
  theme: ThemeOptions;
  children?: ReactNode;
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
