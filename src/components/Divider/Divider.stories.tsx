import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Divider } from './Divider';

export default {
  component: Divider,
} as ComponentMeta<typeof Divider>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Divider> = (args) => (
  <table>
    <tbody>
      <tr>
        <td>This is Text 1</td>
      </tr>

      <Divider {...args} />

      <tr>
        <td>This is Text 2</td>
      </tr>
    </tbody>
  </table>
);

export const Divider1 = Template.bind({});
export const Divider2 = Template.bind({});
export const Divider3 = Template.bind({});

Divider1.args = {
  width: '100%',
};

Divider2.args = {
  width: '50%',
};

Divider3.args = {
  width: '60%',
  align: 'left',
};
