import htmlToPlainText from 'textversionjs';

export const generateTextEmailFromHTML = (html: string): string => {
  const plainText = htmlToPlainText(html);
  return plainText;
};
