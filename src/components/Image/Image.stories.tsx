import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Email } from '../Email/Email';
import { Section } from '../Section/Section';
import { Column } from '../Column/Column';
import { Typography } from '../Typography/Typography';
import { Image } from './Image';
import { Divider } from '../Divider/Divider';

export default {
  component: Image,
} as ComponentMeta<typeof Image>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Image> = (args) => (
  <Email>
    <Section>
      <Column>
        <Typography variant="h2" align="center">
          Hello World
        </Typography>
      </Column>
    </Section>

    <Divider />

    <Section fullWidth={false}>
      <Column>
        <Image {...args} />
      </Column>

      <Column classes={{ root: { paddingLeft: '20px' } }}>
        <Typography variant="h2">This is a random text</Typography>
      </Column>
    </Section>
  </Email>
);

export const Default = Template.bind({});

Default.args = {
  src: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a',
  alt: 'This is a random image',
  width: '250px',
  caption: 'This is a caption',
  classes: {
    image: {
      borderRadius: '10px',
    },
  },
};
