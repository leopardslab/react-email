import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Email } from '../Email/Email';
import { Column } from '../Column/Column';
import { Section } from './Section';

export default {
  component: Section,
} as ComponentMeta<typeof Section>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Section> = (args) => (
  <Email>
    <Column>
      <Section {...args} />
    </Column>
  </Email>
);

export const Default = Template.bind({});

Default.args = {
  children: <td style={{ fontSize: '30px', color: 'red' }}>This is a new section</td>,
};
