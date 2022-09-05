import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Email } from '../Email/Email';
import { Section } from '../Section/Section';
import { Column } from '../Column/Column';
import { Button, ButtonProps } from './Button';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => (
  <Email>
    <Section>
      <Column>
        <Button {...args} />
      </Column>
    </Section>
  </Email>
);

const defaultArgs: ButtonProps = {
  children: 'Default Button',
  href: 'https://github.com/leopardslab/react-email',
};

export const Default = Template.bind({});
Default.args = defaultArgs;

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  children: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  children: 'Secondary Button',
  variant: 'secondary',
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  ...defaultArgs,
  children: 'Custom Styles',
  classes: {
    root: {
      borderRadius: '10px',
    },
    primary: {
      backgroundColor: 'green',
      color: 'white',
    },
  },
};
