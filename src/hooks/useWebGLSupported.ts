import { useEffect, useState } from 'react';

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

/**
 * SSR/hydration-safe: returns false on the server and for the first client
 * render (so prerendered HTML matches), then upgrades after mount. Detection
 * runs once per session.
 */
export function useWebGLSupported(): boolean {
  const [supported, setSupported] = useState(false);
  useEffect(() => {
    cached ??= detectWebGL();
    setSupported(cached);
  }, []);
  return supported;
}
