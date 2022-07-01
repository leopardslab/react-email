import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from './Typography';

export default {
  component: Typography,
} as ComponentMeta<typeof Typography>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Typography> = (args) => (
  <table>
    <tbody>
      <tr>
        <Typography {...args} />
      </tr>
    </tbody>
  </table>
);

export const Default = Template.bind({});

Default.args = {
  children: 'This is a Typography',
  variant: 'h2',
};
