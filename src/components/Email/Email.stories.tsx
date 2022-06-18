import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Email } from './Email';

export default {
  component: Email,
} as ComponentMeta<typeof Email>;

export const MyEmail: ComponentStory<typeof Email> = () => (
  <Email>
    <h2>Hello World</h2>
  </Email>
);
