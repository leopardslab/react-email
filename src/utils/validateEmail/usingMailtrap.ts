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
