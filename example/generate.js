const { generateEmail, generateTextEmail } = require('@leopardslab/react-email');
const { HelloEmail } = require('./lib/cjs');

const htmlEmail = generateEmail(HelloEmail({ name: 'John' }));
console.log(`HTML email: ${htmlEmail}`);

const textEmail = generateTextEmail(HelloEmail({ name: 'John' }));
console.log(`Text email: ${textEmail}`);
