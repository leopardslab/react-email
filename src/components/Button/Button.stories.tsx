import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Email } from '../Email/Email';
import { Section } from '../Section/Section';
import { Column } from '../Column/Column';
import { Button } from './Button';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => (
  <Email>
    <Section>
      <Column>
        <Button {...args} />
      </Column>
    </Section>
  </Email>
);

export const Default = Template.bind({});

Default.args = {
  children: 'Click here',
  href: 'https://github.com/leopardslab/react-email',
  classes: {
    root: {
      backgroundColor: 'blue',
      color: 'white',
    },
  },
};
