import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import { deafultHTML } from './defaultHTML';

interface GenerateEmailOptions {
  baseTemplate?: string;
  baseStyles?: string;
  baseStylesReplacementString?: string;
  baseBodyReplacementString?: string;
}

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
