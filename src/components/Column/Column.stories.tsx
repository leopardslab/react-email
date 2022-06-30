import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Email } from '../Email/Email';
import { Column } from './Column';

export default {
  component: Column,
} as ComponentMeta<typeof Column>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Column> = (args) => (
  <Email>
    <Column {...args} />
  </Email>
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <tr>
      <td style={{ fontSize: '30px', color: 'red' }}>Hello World</td>
    </tr>
  ),
};
