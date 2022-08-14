import { generateTextEmailFromHTML } from './generateTextEmailFromHTML';

const testHTML = `<p>To know more, <a href="https://github.com/leopardslab/react-email">Click Here</a>`;
const expectedText = `To know more, Click Here [https://github.com/leopardslab/react-email]`;

describe('generateTextEmailFromHTML', () => {
  test('should return expectedText if we pass testHTML', () => {
    const text = generateTextEmailFromHTML(testHTML);
    expect(text.trim()).toEqual(expectedText.trim());
  });
});
