import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Email } from './Email';

export default {
  component: Email,
} as ComponentMeta<typeof Email>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Email> = (args) => <Email {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <tbody>
      <tr>
        <td style={{ fontSize: '30px' }}>Hello World</td>
      </tr>
    </tbody>
  ),
};
