import { generateEmail } from '../generateEmail';
import { generateTextEmailFromHTML } from '../generateTextEmailFromHTML';

/**
 * Function to convert React Email Layouts to Text version.
 * @param {JSX.Element}  jsxElement - React email layout which needs to be converted.
 * @returns {string} Text version of the email in string format.
 * @example
 * import { generateTextEmail } from '@leopardslab/react-email';
 * import { EmailLayout } from './EmailLayout';
 * const text = generateTextEmail(EmailLayout());
 * console.log(text);
 */

export const generateTextEmail = (jsxElement: JSX.Element): string => {
  const HTML = generateEmail(jsxElement);
  const plainText = generateTextEmailFromHTML(HTML);
  return plainText;
};
