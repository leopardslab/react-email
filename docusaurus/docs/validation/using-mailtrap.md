---
sidebar_position: 1
---

# Using Mailtrap

Validate your generated emails using [Mailtrap](https://mailtrap.io)

After creating an account on Mailtrap, you can create an inbox and get the SMTP credentials.

Send the generated emails to the Mailtrap inbox and validate them to check the **spam score, email preview, and other details**.

Also, you need [nodemailer](https://www.npmjs.com/package/nodemailer) package to send emails.

```tsx title="usingMailtrap.ts"
import nodemailer from 'nodemailer';

interface Auth {
  user: string;
  pass: string;
}

export interface MailtrapOptions {
  from: string;
  to: string;
  subject: string;
  HTMLEmail: string;
  textEmail?: string;
  auth: Auth;
}

export async function validateEmailUsingMailtrap({
  from,
  to,
  subject,
  HTMLEmail,
  textEmail,
  auth,
}: MailtrapOptions) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: auth.user,
      pass: auth.pass,
    },
  });

  let info, error;

  try {
    const res = await transporter.sendMail({
      from: from,
      to: to,
      subject: subject,
      text: textEmail,
      html: HTMLEmail,
    });

    info = res;
  } catch (err) {
    console.log(err);
    error = err;
  }

  return { info, error };
}
```

Import the `validateEmailUsingMailtrap` function and pass the required parameters.

```tsx title="index.ts"
import { validateEmailUsingMailtrap } from './usingMailtrap';

async function validate() {
  const { info, error } = await validateEmailUsingMailtrap({
    from: 'From email address',
    to: 'To email address',
    subject: 'Test Email',
    HTMLEmail: 'Generated HTML email',
    textEmail: 'Text version of the email',
    auth: {
      user: 'Mailtrap username',
      pass: 'Mailtrap password',
    },
  });

  if (error) {
    console.log(error);
  } else {
    console.log(info);
  }
}

validate();
```

This will help you to check the spam score and other details of the generated email before sending it to the actual recipients.
