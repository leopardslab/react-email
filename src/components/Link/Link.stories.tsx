import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from './Link';

export default {
  component: Link,
} as ComponentMeta<typeof Link>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Link> = (args) => (
  <table>
    <tbody>
      <tr>
        <Link {...args} />
      </tr>
    </tbody>
  </table>
);

export const Default = Template.bind({});

Default.args = {
  children: 'Click here',
  href: 'https://github.com/leopardslab/react-email',
};
