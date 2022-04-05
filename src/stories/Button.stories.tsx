import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button/Button';

export default {
  title: 'emailboilerv2/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const clickButton = Template.bind({});
clickButton.args = {
  label: 'Button'
};