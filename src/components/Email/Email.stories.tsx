import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Email } from './Email';

export default {
  component: Email,
} as ComponentMeta<typeof Email>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Email> = (args) => <Email {...args} />;

export const MyEmail = Template.bind({});

MyEmail.args = {
  children: <h2>Hello world</h2>,
};
