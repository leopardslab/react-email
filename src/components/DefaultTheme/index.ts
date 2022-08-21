import { CSSProperties } from 'react';

import type { EmailStyles } from '../Email/Email';
import type { SectionStyles } from '../Section/Section';
import type { ColumnStyles } from '../Column/Column';
import type { ButtonStyles } from '../Button/Button';
import type { LinkStyles } from '../Link/Link';
import type { DividerStyles } from '../Divider/Divider';
import type { TypographyStyles } from '../Typography/Typography';
import type { ImageStyles } from '../Image/Image';
import type { PreheaderStyles } from '../Preheader/Preheader';
import type { QuoteStyles } from '../Quote/Quote';

export interface ThemeOptions {
  email?: { [key in EmailStyles]?: CSSProperties };
  section?: { [key in SectionStyles]?: CSSProperties };
  column?: { [key in ColumnStyles]?: CSSProperties };
  button?: { [key in ButtonStyles]?: CSSProperties };
  link?: { [key in LinkStyles]?: CSSProperties };
  divider?: { [key in DividerStyles]?: CSSProperties };
  typography?: { [key in TypographyStyles]?: CSSProperties };
  image?: { [key in ImageStyles]?: CSSProperties };
  preheader?: { [key in PreheaderStyles]?: CSSProperties };
  quote?: { [key in QuoteStyles]?: CSSProperties };
}

export const defaultTheme: ThemeOptions = {
  email: { root: {} },
  section: { root: {}, body: {}, row: {} },
  column: { root: {} },
  button: {
    root: {},
    primary: {},
    secondary: {},
  },
  link: { root: {} },
  divider: { root: {} },
  typography: { root: {} },
  image: {
    root: {},
    body: {},
    table: {},
    image: {},
    caption: {},
    imageSection: {},
    captionSection: {},
    imageColumn: {},
  },
  preheader: { root: {} },
  quote: { root: {} },
};
