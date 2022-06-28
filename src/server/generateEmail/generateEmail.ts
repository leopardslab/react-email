import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import { deafultHTML } from './defaultHTML';

interface GenerateEmailOptions {
  baseTemplate?: string;
  baseStyles?: string;
}

export const generateEmail = (
  jsxElement: React.ReactElement,
  options?: GenerateEmailOptions,
): string => {
  let baseHTML = '';
  options?.baseTemplate
    ? (baseHTML = fs.readFileSync(options.baseTemplate, 'utf8')).toString()
    : (baseHTML = deafultHTML);

  let baseCSS = '';
  options?.baseStyles && (baseCSS = fs.readFileSync(options.baseStyles, 'utf8')).toString();

  const JSXtoHTML = ReactDOMServer.renderToStaticMarkup(jsxElement);

  const styleEndPos = baseHTML.indexOf('</style>');
  const styledHTML = baseHTML.slice(0, styleEndPos) + '\n' + baseCSS + baseHTML.slice(styleEndPos);

  const bodyEndPos = styledHTML.indexOf('</body>');
  const finalHTML = styledHTML.slice(0, bodyEndPos) + JSXtoHTML + styledHTML.slice(bodyEndPos);

  return finalHTML;
};
