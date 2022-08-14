import { generateTextEmail } from './generateTextEmail';
import { Email, Section, Column, Typography, Button, Image } from '../../components';

describe('generateTextEmail', () => {
  test('should return expected text from the JSX Layout', () => {
    const text = generateTextEmail(
      <Email>
        <Section>
          <Column>
            <Typography variant="h1">Hello World</Typography>
          </Column>
        </Section>
      </Email>,
    );

    expect(text.trim()).toBe('# Hello World');
  });

  test('should return expected text from the Button component', () => {
    const text = generateTextEmail(
      <Email>
        <Section>
          <Column>
            <Button href="https://github.com/leopardslab/react-email">Click Here</Button>
          </Column>
        </Section>
      </Email>,
    );

    expect(text.trim()).toBe('Click Here [https://github.com/leopardslab/react-email]');
  });

  test('should return expected text from the Image component', () => {
    const text = generateTextEmail(
      <Email>
        <Section>
          <Column>
            <Image
              src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a"
              alt="Alt text"
              width="500px"
              caption="This is a caption"
            />
          </Column>
        </Section>
      </Email>,
    );

    const expectedText = `Alt text [https://images.unsplash.com/photo-1453728013993-6d66e9c9123a]\nThis is a caption`;

    expect(text.trim()).toBe(expectedText);
  });
});
