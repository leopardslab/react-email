import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CSSClasses, makeStyles } from './makeStyles';

interface EmailProps {
  classes: CSSClasses;
}

const useStyles = makeStyles({
  root: {
    width: 'fit-content',
    backgroundColor: 'yellow',
    padding: '50px',
  },
});

const Email = ({ classes }: EmailProps): JSX.Element => {
  const style = useStyles({ classes });
  return (
    <div style={style.root}>
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
const Template: ComponentStory<typeof Email> = (args) => <Email {...args} />;

export const Default = Template.bind({});

Default.args = {
  classes: {
    root: {
      padding: '10px',
      color: 'red',
    },
  },
};
