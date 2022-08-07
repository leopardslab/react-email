import { generateEmail, generateTextEmail } from '@leopardslab/react-email';

import { HelloEmail } from '../lib/esm';

const htmlEmail = generateEmail(HelloEmail({ name: 'John' }));
console.log(`HTML email: ${htmlEmail}`);

const textEmail = generateTextEmail(HelloEmail({ name: 'John' }));
console.log(`Text email: ${textEmail}`);
