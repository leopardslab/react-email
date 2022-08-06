import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HelloEmail } from './HelloEmail';

export default {
  component: HelloEmail,
} as ComponentMeta<typeof HelloEmail>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof HelloEmail> = (args) => <HelloEmail {...args} />;

export const Default = Template.bind({});
