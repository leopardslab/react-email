import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Email from '../components/Email/Email';

export default {
  title: 'emailboilerv2/Email',
  component: Email,
} as ComponentMeta<typeof Email>;

const Template: ComponentStory<typeof Email> = (args) => <Email {...args} />;

export const templateEmail = Template.bind({});
templateEmail.args = {
  text:"This is a testing email template",
  styling:{
    padding: "20px",
    fontFamily: "Arial",
    textAlign:"center",
    width:"300px",
    height:"200px"
  }
};