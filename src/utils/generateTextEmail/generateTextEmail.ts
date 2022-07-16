import { generateEmail } from '../generateEmail';
import { generateTextEmailFromHTML } from '../generateTextEmailFromHTML';

export const generateTextEmail = (jsxElement: JSX.Element): string => {
  const HTML = generateEmail(jsxElement);
  const plainText = generateTextEmailFromHTML(HTML);
  return plainText;
};
