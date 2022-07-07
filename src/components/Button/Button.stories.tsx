import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CSSProperties } from 'react';

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

const rootStyles: CSSProperties = {
  fontSize: '18px',
  textDecoration: 'none',
  padding: '10px 16px',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundColor: 'blue',
  color: 'white',
};

const defaultArgs: ButtonProps = {
  children: 'Default Button',
  href: 'https://github.com/leopardslab/react-email',
  classes: {
    root: rootStyles,
  },
};

export const Default = Template.bind({});
Default.args = defaultArgs;

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  children: 'Primary Button',
  variant: 'primary',
  classes: {
    root: rootStyles,
    primary: {
      backgroundColor: 'green',
      color: 'white',
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  children: 'Secondary Button',
  variant: 'secondary',
  classes: {
    root: rootStyles,
    secondary: {
      backgroundColor: 'red',
      color: 'white',
    },
  },
};
