# React Email

Emails are a different kind of beast. Not every fancy CSS trick you put in works. We built this components' library depending on how Email clients want it. For a start, all the styles are compiled into inline styles. But you do not have to worry about putting styles inline. Our library provides great Developer Experience with easy-to-use mechanisms to let you define the styles as usual but turned to inlined styles at the end of the day when you send the emails. Also, you don't need to worry about the styling and HTML tags guidelines for different email clients, use our components and leave the handling of compatibility to us.

Check out the [documentation](https://docs-react-email-leopardslab.netlify.app) for more information.

<p>
  <a href="https://docs-react-email-leopardslab.netlify.app"><img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" alt="React Email Docs" /></a>
</p>

Find the npm package [here](https://www.npmjs.com/package/@leopardslab/react-email)

<p>
  <a href="https://www.npmjs.com/package/@leopardslab/react-email"><img src="https://badge.fury.io/js/@leopardslab%2Freact-email.svg" alt="npm version" /></a>
  <a href="https://github.com/leopardslab/react-email/blob/main/.github/workflows/main.yml"><img src="https://github.com/leopardslab/react-email/actions/workflows/main.yml/badge.svg" alt="CI/CD" /></a>
</p>

Join the Gitter channel [here](https://gitter.im/LeaopardLabs/React-Email) for discussions and support.

<p>
  <a href="https://gitter.im/LeaopardLabs/React-Email"><img src="https://badges.gitter.im/Join%20Chat.svg" alt="Gitter channel" /></a>
</p>

#### Star us on [GitHub](https://github.com/leopardslab/react-email) — it helps!

<p>
  <a href="https://github.com/leopardslab/react-email"><img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" height="23px"></a>
  <a href="https://github.com/leopardslab/react-email/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/leopardslab/react-email"></a>
  <a href="https://github.com/leopardslab/react-email/network/members"><img alt="GitHub forks" src="https://img.shields.io/github/forks/leopardslab/react-email"></a>
  <a href="https://github.com/leopardslab/react-email/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/leopardslab/react-email"></a>
  <a href="https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fleopardslab%2Freact-email"><img alt="Twitter" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fleopardslab%2Freact-email"></a>
</p>

## Installation

**Using npm**

```bash
npm i @leopardslab/react-email
```

or

```bash
npm install --save @leopardslab/react-email
```

**Using Yarn**

```bash
yarn add @leopardslab/react-email
```

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

## Inspiration

The idea of a React Component Library for Emails is not novel. There have been other implementations around for a while and we were inspired a lot by these solutions and many other generic Component Libraries. The following are a few of the amazing other implementations.

We try to be the community-backed up-to-date solution one can depend on and contribute back, request features & seek help.

- [https://github.com/lang-ai/react-emails](https://github.com/lang-ai/react-emails)
- [https://www.npmjs.com/package/react-email-components](https://www.npmjs.com/package/react-email-components)
- [https://mjml.io/getting-started/1](https://mjml.io/getting-started/1)
- [https://github.com/ovrsea/medium-articles/tree/master/react-email-templates](https://github.com/ovrsea/medium-articles/tree/master/react-email-templates)
