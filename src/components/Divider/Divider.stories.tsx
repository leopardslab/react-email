import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Email } from '../Email/Email';
import { Section } from '../Section/Section';
import { Column } from '../Column/Column';
import { Divider } from './Divider';

export default {
  component: Divider,
} as ComponentMeta<typeof Divider>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Divider> = (args) => (
  <Email>
    <Section>
      <Column>
        <h2>Hello World 1</h2>
        <Divider {...args} />
        <h2>Hello World 2</h2>
      </Column>
    </Section>
  </Email>
);

export const Default = Template.bind({});

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  align: 'center',
  color: 'red',
  size: '4px',
  width: '50%',
};
