import htmlToPlainText from 'textversionjs';

/**
 * Function to convert HTML Email to Text version.
 * @param {string}  html - HTML which needs to be converted.
 * @returns {string} Text version of the email in string format.
 */

export const generateTextEmailFromHTML = (html: string): string => {
  const plainText = htmlToPlainText(html, { headingStyle: 'hashify' });
  return plainText;
};
