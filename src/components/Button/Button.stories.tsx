import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => (
  <table>
    <tbody>
      <tr>
        <Button {...args} />
      </tr>
    </tbody>
  </table>
);

export const Default = Template.bind({});

Default.args = {
  children: 'Click here',
  href: 'https://github.com/leopardslab/react-email',
  style: {
    backgroundColor: 'blue',
    color: 'white',
  },
};
