# React-Email 
A React-Based component and utility method-based lightweight library to provide a common interface for email building that users can install and use to build clean and responsive email easily.

# React Email Components
A collection of React components to help build consistent cross-client emails. As well as the layout components, there is a function that inlined your styles before the page is rendered.

Note: This was built for a Stylus workflow, additional work will have to be done to get this working with vanilla CSS or another preprocessor.

# Getting started
ReactEmailComponents is split up into two modules:

* react-email-components
* react-email-components-stylus
Although they are both necessary, their setup is entirely different and therefore separated. To get started, follow the steps below for each.

# Installation
## react-email-components
this module contains all of the React components necessary to get ReactEmailComponents to work.

Install using NPM or Yarn:
```bash
npm install react-email-components
```
Import the desired components into your React app:
```javascript
import { Container, Block, Row, Column, Spacer } from 'react-email-components'
```
## react-email-components-stylus
This module contains the Stylus mixins and functions necessary to get ReactEmailComponents to work.

Install using NPM or Yarn:
```bash
npm install react-email-components-stylus
```
### Require the Stylus module in your main stylesheet:

```bash
@require 'react-email-components-stylus'
```
# Dependencies
ReactEmailComponents depends on the following libraries:

* "@leopardslab/react-email": "^1.15.3"
* "react": "^18.2.0"
* "react-dom": "^18.2.0"
* "nodemailer": "^6.7.8"
* "tslib": "^2.4.0"

** Note, use the latest version of the above libraries.

# Usage
## Create your Email Layout :
all the layouts are created in typescript and are exported as a react component. You can use the layouts as a base for your email. 

## Create your Email Template :

```typescript
import {Email, Typography }from "@leopardslab/react-email";

export const EmailTemplate = ({name}: {name: string}) => {
    return (
        <Email>
            <Typography>
                <h1>Hello {name}</h1>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <p>Paragraph</p>
                <a href="https://www.google.com">Link</a>
            </Typography>
        </Email>
    )
}
```


# Inspiration

The idea of a React Component Library for Emails is not novel. There have been other implementations around for a while and we were inspired a lot by these solutions and many other generic Component Libraries. Following are a few of the amazing other implementations.

We try to be the community backed up-to-date solution one can depend on and contribute back, request features & seek help.

- [https://github.com/lang-ai/react-emails](https://github.com/lang-ai/react-emails)
- [https://www.npmjs.com/package/react-email-components](https://www.npmjs.com/package/react-email-components)
- [https://mjml.io/getting-started/1](https://mjml.io/getting-started/1)
- [https://github.com/ovrsea/medium-articles/tree/master/react-email-templates](https://github.com/ovrsea/medium-articles/tree/master/react-email-templates)
