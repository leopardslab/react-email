import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import { deafultHTML } from './defaultHTML';

/** An optional configuration object for `generateEmail` */
interface GenerateEmailOptions {
  /** HTML file path to override the base HTML. */
  baseTemplate?: string;
  /** CSS file path to override the base CSS styles. */
  baseStyles?: string;
  /**
   * Placeholder text to replace the base CSS styles.
   * @default 'EMAIL_BASE_STYLES'
   */
  baseStylesReplacementString?: string;
  /**
   * Placeholder text to replace the email body.
   * @default 'EMAIL_BODY_CONTENT'
   */
  baseBodyReplacementString?: string;
}

/**
 * Function to convert React Email Layouts to HTML.
 * @param {React.ReactElement}  jsxElement - React email layout which needs to be converted.
 * @param {Object} [options] - An optional param options for the additional configurations.
 * @param {string} [options.baseTemplate] - HTML file path to override the base HTML.
 * @param {string} [options.baseStyles] - CSS file path to override the base CSS styles.
 * @param {string} [options.baseStylesReplacementString='EMAIL_BASE_STYLES'] - Placeholder text to replace the base CSS styles.
 * @param {string} [options.baseBodyReplacementString='EMAIL_BODY_CONTENT'] - Placeholder text to replace the email body.
 * @returns {string} HTML version of the email in string format.
 * @example
 * import { generateEmail } from '@leopardslab/react-email';
 * import { EmailLayout } from './EmailLayout';
 * const html = generateEmail(EmailLayout());
 * console.log(html);
 */

export const generateEmail = (
  jsxElement: React.ReactElement,
  options?: GenerateEmailOptions,
): string => {
  const baseStylesReplacementString = options?.baseStylesReplacementString || 'EMAIL_BASE_STYLES';
  const baseBodyReplacementString = options?.baseBodyReplacementString || 'EMAIL_BODY_CONTENT';

  const baseHTML: string = options?.baseTemplate
    ? fs.readFileSync(options.baseTemplate, 'utf8').toString()
    : deafultHTML;

  const baseCSS: string = options?.baseStyles
    ? fs.readFileSync(options.baseStyles, 'utf8').toString()
    : '';

  const JSXtoHTML = ReactDOMServer.renderToStaticMarkup(jsxElement);

  const styledHTML = baseHTML.replace(baseStylesReplacementString, baseCSS);
  const finalHTML = styledHTML.replace(baseBodyReplacementString, JSXtoHTML);

  return finalHTML;
};
