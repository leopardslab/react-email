# @leopardslab/react-email Example

### Running the Example

- After installing the dependencies, you can create your Email Layout using the existing components.

  ```jsx
  import { Email, Section, Column, Typography } from '@leopardslab/react-email';

  export const HelloEmail = ({ name }: { name: string }) => {
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

- If you're using TypeScript to build the React-based Email Layout, then you'll also need to compile the code to JavaScript using

  ```bash
  yarn build
  ```

  or

  ```bash
  npm run build
  ```

  It will create both the `CommonJS(CJS)` and `ECMAScript Modules(ESM)` versions of the Email Layout inside the `lib` directory.

- You can import the Layout inside the Node.js environment and use the `generateEmail`, `generateTextEmail` methods. The examples for both the `CommonJS(CJS)` and `ECMAScript Modules(ESM)` versions are inside the **_[generate-cjs](https://github.com/leopardslab/react-email/tree/main/example/generate-cjs)_** and **_[generate-esm](https://github.com/leopardslab/react-email/tree/main/example/generate-esm)_** directories respectively.

- You can run the commands inside each directory to execute the utility methods.

  ```bash
  yarn generate
  ```

  or

  ```bash
  node index.js
  ```
