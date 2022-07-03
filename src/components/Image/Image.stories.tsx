import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from './Image';

export default {
  component: Image,
} as ComponentMeta<typeof Image>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Image> = (args) => (
  <table>
    <tbody>
      <tr>
        <Image {...args} />
      </tr>
    </tbody>
  </table>
);

export const Default = Template.bind({});

Default.args = {
  src: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a',
  alt: 'This is a random image',
  width: '250px',
  style: {
    borderRadius: '10px',
  },
};
