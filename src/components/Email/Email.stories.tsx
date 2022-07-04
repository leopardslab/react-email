import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Email } from './Email';

export default {
  component: Email,
} as ComponentMeta<typeof Email>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Email> = (args) => <Email {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <table style={{ width: '100%' }}>
      <tbody>
        <tr>
          <td>
            <p style={{ margin: '0', fontSize: '30px' }}>Hello World</p>
          </td>
        </tr>
      </tbody>
    </table>
  ),
  classes: {
    root: {
      backgroundColor: 'gray',
      color: 'white',
    },
  },
};
