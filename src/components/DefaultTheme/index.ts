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

/**
 * Interface for the Deafult and Custom Theme.
 */
export interface ThemeOptions {
  /**
   * Theme for the `Email` component.
   */
  email?: { [key in EmailStyles]?: CSSProperties };
  /**
   * Theme for the `Section` component.
   */
  section?: { [key in SectionStyles]?: CSSProperties };
  /**
   * Theme for the `Column` component.
   */
  column?: { [key in ColumnStyles]?: CSSProperties };
  /**
   * Theme for the `Button` component.
   */
  button?: { [key in ButtonStyles]?: CSSProperties };
  /**
   * Theme for the `Link` component.
   */
  link?: { [key in LinkStyles]?: CSSProperties };
  /**
   * Theme for the `Divider` component.
   */
  divider?: { [key in DividerStyles]?: CSSProperties };
  /**
   * Theme for the `Typography` component.
   */
  typography?: { [key in TypographyStyles]?: CSSProperties };
  /**
   * Theme for the `Image` component.
   */
  image?: { [key in ImageStyles]?: CSSProperties };
  /**
   * Theme for the `Preheader` component.
   */
  preheader?: { [key in PreheaderStyles]?: CSSProperties };
  /**
   * Theme for the `Quote` component.
   */
  quote?: { [key in QuoteStyles]?: CSSProperties };
}

/**
 * Default theme for the whole layout.
 */
export const defaultTheme: ThemeOptions = {
  email: { root: {} },
  section: { root: {}, body: {}, row: {} },
  column: { root: {} },
  button: {
    root: {
      fontSize: '18px',
      textDecoration: 'none',
      padding: '10px 16px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    primary: {
      backgroundColor: '#007bff',
      color: '#fff',
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: '#fff',
    },
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
