import { generateTextEmail } from './generateTextEmail';
import { Email } from '../../components';

describe('generateTextEmail', () => {
  test('should return expectedText if we pass JSX Element', () => {
    const text = generateTextEmail(Email({ children: 'Hello World' }));
    expect(text.trim()).toEqual('Hello World');
  });
});
