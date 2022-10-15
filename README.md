# React Email

Emails are a different kind of beast. Not every fancy CSS trick you put in works. We built this components' library depending on how Email clients want it. For a start, all the styles are compiled into inline styles. But you do not have to worry about putting styles inline. Our library provides great Developer Experience with easy-to-use mechanisms to let you define the styles as usual but turned to inlined styles at the end of the day when you send the emails. Also, you don't need to worry about the styling and HTML tags guidelines for different email clients, use our components and leave the handling of compatibility to us.

## Glimpses of usage

```jsx
import { Email, Section, Column, Typography } from '@leopardslab/react-email';

export const HelloEmail = ({ name }) => {
  return (
    <Email>
      <Section>
        <Column>
          <Typography variant="h2">Hello {name}</Typography>
        </Column>
      </Section>
    </Email>
  );
};
```

**Want to add some custom styles?**

Here we go:

```jsx
import { Divider, Email, Section, Column, Typography } from '@leopardslab/react-email';

const styles = {
  greyBackground: {
    backgroud: 'grey',
  },
};

export const HelloEmail = ({ name }) => {
  return (
    <Email>
      <Section>
        <Column>
          <Typography variant="h2">Hello {name}</Typography>
        </Column>
        <Divider />
        <Column classes={{ root: styles.greyBackground }}>
          <Typography variant="h2">Hello {name}</Typography>
        </Column>
      </Section>
    </Email>
  );
};
```

**You can also define and load a fully custom theme!** 🤯

```jsx
import { Email, Section, Column, Typography } from '@leopardslab/react-email';
import darkTheme from './theme';

export const HelloEmail = ({ name }) => {
  return (
    <Email theme={darkTheme}>
      <Section>
        <Column>
          <Typography variant="h2">Hello {name}</Typography>
        </Column>
      </Section>
    </Email>
  );
};
```

**Create your own component like this:**

```jsx
// InfoPanel.jsx
const useStyles = makeStyles({
  root: { padding: '10px' },
  info: { border: '1px solid #DD5353' },
  warn: { border: '1px solid #FF731D' },
});

export const InfoPanel = ({
  children,
  variant = 'info',
  classes, // if you want to override some styles when you are using the component
}) => {
  const styles = useStyles({ classes });
  const infoPanelStyle = sx(styles.root, styles[variant]); // combines root and variant specific styles

  return <div style={infoPanelStyle}>{children}</div>;
};

// HelloWorld.jsx
import { InfoPanel } from './InfoPanel';

const styles = {
  greyBackground: {
    backgroud: 'grey',
  },
};

export const HelloEmail = ({ name }) => {
  return (
    <Email theme={darkTheme}>
      <Section>
        <Column>
          <InfoPanel variant="info">Hello {name}!!!!</InfoPanel>
          <InfoPanel variant="warn" classes={{ root: styles.greyBackground }}>
            Be prepared!
          </InfoPanel>
        </Column>
      </Section>
    </Email>
  );
};
```

## How to install

**Using NPM**

```
npm install @leopardslab/react-email
```

**Using Yarn**

```
yarn add @leopardslab/react-email
```

## Inspiration

The idea of a React Component Library for Emails is not novel. There have been other implementations around for a while and we were inspired a lot by these solutions and many other generic Component Libraries. Following are a few of the amazing other implementations.

We try to be the community backed up-to-date solution one can depend on and contribute back, request features & seek help.

- [https://github.com/lang-ai/react-emails](https://github.com/lang-ai/react-emails)
- [https://www.npmjs.com/package/react-email-components](https://www.npmjs.com/package/react-email-components)
- [https://mjml.io/getting-started/1](https://mjml.io/getting-started/1)
- [https://github.com/ovrsea/medium-articles/tree/master/react-email-templates](https://github.com/ovrsea/medium-articles/tree/master/react-email-templates)
