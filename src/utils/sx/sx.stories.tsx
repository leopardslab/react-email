import { ComponentStory, ComponentMeta } from '@storybook/react';

import { sx } from './sx';

const styles = {
  primary: {
    width: 'fit-content',
    backgroundColor: 'yellow',
    padding: '50px',
  },
  secondary: {
    padding: '10px',
    color: 'red',
  },
};

const Email = (): JSX.Element => {
  const style = sx(styles.primary, styles.secondary);
  return (
    <div style={style}>
      <div>
        <h2>Hello World</h2>
      </div>
    </div>
  );
};

export default {
  component: Email,
} as ComponentMeta<typeof Email>;

//“template” of how args map to rendering
const Template: ComponentStory<typeof Email> = () => <Email />;

export const Default = Template.bind({});
