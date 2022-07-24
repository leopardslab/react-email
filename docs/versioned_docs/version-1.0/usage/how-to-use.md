---
sidebar_position: 1
---

# Build Layout

Build simple layouts for Email using our existing components

## Demo

Create your Layout at using TypeScript or JavaScript using in React enviroment:

**In JavaScript**

```jsx title="Layout.js"
import React from 'react';
import { Email, Section, Column, Typography } from '@leopardslab/react-email';

export default function Layout() {
  return (
    <Email>
      <Section>
        <Column>
          <Typography>Hello World</Typography>
        </Column>
      </Section>
    </Email>
  );
}
```
