import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Email } from '../Email/Email';
import { Section } from '../Section/Section';
import { Column } from '../Column/Column';
import { Typography } from './Typography';
import { Divider } from '../Divider/Divider';

export default {
  component: Typography,
} as ComponentMeta<typeof Typography>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Typography> = (args) => (
  <Email>
    <Section>
      <Column>
        <Typography {...args} />
        <Divider />
      </Column>
    </Section>
  </Email>
);

export const Default = Template.bind({});

Default.args = {
  children: 'Hello World',
  variant: 'h2',
  align: 'center',
};
