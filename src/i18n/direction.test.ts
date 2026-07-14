import { resolveDir } from './direction';

test('arabic is rtl, english is ltr, unknown defaults ltr', () => {
  expect(resolveDir('ar')).toBe('rtl');
  expect(resolveDir('en')).toBe('ltr');
  expect(resolveDir('fr')).toBe('ltr');
});
