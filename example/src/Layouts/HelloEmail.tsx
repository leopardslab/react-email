import { Email, Section, Column, Typography } from '@leopardslab/react-email';

export const HelloEmail = ({ name }: { name: string }) => {
  return (
    <Email>
      <Section>
        <Column>
          <Typography variant="h2">Hello {name}</Typography>
        </Column>
      </Section>
    </Email>
  );
};
