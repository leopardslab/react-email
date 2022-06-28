import { generateEmail } from './generateEmail';
import { Email } from '../../components';

const childrenContent = 'Hello World';

describe('generateEmail', () => {
  test('should return typeof string value and contain childrenContent', () => {
    expect(typeof generateEmail(Email({ children: childrenContent }))).toBe('string');
    expect(generateEmail(Email({ children: childrenContent }))).toContain(childrenContent);
  });
});
