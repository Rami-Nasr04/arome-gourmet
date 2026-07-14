import { isValidPhone } from './format';

test('phone requires ≥7 digits', () => {
  expect(isValidPhone('01687493')).toBe(true);
  expect(isValidPhone('+961 3 230 161')).toBe(true);
  expect(isValidPhone('12345')).toBe(false);
  expect(isValidPhone('abc')).toBe(false);
});
