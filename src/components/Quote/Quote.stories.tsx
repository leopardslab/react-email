import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Quote } from './Quote';

export default {
  component: Quote,
} as ComponentMeta<typeof Quote>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Quote> = (args) => <Quote {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'This is a Text Quote',
};
