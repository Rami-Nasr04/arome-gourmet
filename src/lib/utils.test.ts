import { cn } from './utils';
test('cn merges and dedupes tailwind classes', () => {
  expect(cn('px-2', 'px-4')).toBe('px-4');
  // eslint-disable-next-line no-constant-binary-expression -- intentional: verifies cn() filters falsy values
  expect(cn('text-foreground', false && 'hidden', 'bg-card')).toBe('text-foreground bg-card');
});
