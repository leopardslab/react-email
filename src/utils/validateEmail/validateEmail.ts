import type { MailtrapOptions } from './usingMailtrap';
import { validateEmailUsingMailtrap } from './usingMailtrap';

export async function validateEmail(options: MailtrapOptions) {
  return await validateEmailUsingMailtrap(options);
}
