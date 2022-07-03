import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Email } from '../Email/Email';
import { Section } from '../Section/Section';
import { Column } from './Column';

export default {
  component: Column,
} as ComponentMeta<typeof Column>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Column> = (args) => (
  <Email>
    <Section>
      <Column {...args} />
    </Section>
  </Email>
);

export const Default = Template.bind({});

Default.args = {
  children: <p style={{ margin: '0', fontSize: '30px' }}>Hello World</p>,
  align: 'center',
};
