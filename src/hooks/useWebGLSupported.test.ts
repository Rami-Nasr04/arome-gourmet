import { detectWebGL } from './useWebGLSupported';

test('detectWebGL never throws and returns a boolean', () => {
  // jsdom has no WebGL contexts, so this exercises the guarded false path.
  expect(typeof detectWebGL()).toBe('boolean');
  expect(detectWebGL()).toBe(false);
});
