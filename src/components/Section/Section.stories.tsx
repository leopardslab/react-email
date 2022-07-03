import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Email } from '../Email/Email';
import { Section } from './Section';

export default {
  component: Section,
} as ComponentMeta<typeof Section>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Section> = (args) => (
  <Email>
    <Section {...args} />
  </Email>
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <td>
      <p style={{ margin: '0', fontSize: '30px' }}>Hello World 1</p>
      <p style={{ margin: '0', fontSize: '25px', marginTop: '10px' }}>Hello World 2</p>
    </td>
  ),
};
