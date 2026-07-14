import { useSyncExternalStore } from 'react';

let cached: boolean | null = null;

/** Pure feature detection — exported for testing. Never throws. */
export function detectWebGL(): boolean {
  if (typeof document === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') ?? canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

const subscribeNever = () => () => {};

/**
 * SSR/hydration-safe: the server snapshot is false (so prerendered HTML and
 * the hydration render match), then React re-reads the client snapshot after
 * hydration. Detection runs once per session.
 */
export function useWebGLSupported(): boolean {
  return useSyncExternalStore(
    subscribeNever,
    () => (cached ??= detectWebGL()),
    () => false,
  );
}
