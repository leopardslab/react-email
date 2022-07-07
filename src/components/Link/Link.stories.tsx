import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Email } from '../Email/Email';
import { Section } from '../Section/Section';
import { Column } from '../Column/Column';
import { Link } from './Link';

export default {
  component: Link,
} as ComponentMeta<typeof Link>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Link> = (args) => (
  <Email>
    <Section>
      <Column>
        <h2>
          Please <Link {...args} /> to access
        </h2>
      </Column>
    </Section>
  </Email>
);

export const Default = Template.bind({});

Default.args = {
  children: 'Click here',
  href: 'https://github.com/leopardslab/react-email',
  classes: {
    root: {
      color: 'red',
    },
  },
};
