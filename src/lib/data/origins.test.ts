import { ORIGINS, SPECIALTY_LOTS } from './origins';

test('16 origins with unique ids and valid coords', () => {
  expect(ORIGINS).toHaveLength(16);
  expect(new Set(ORIGINS.map(o => o.id)).size).toBe(16);
  for (const o of ORIGINS) {
    expect(o.lat).toBeGreaterThanOrEqual(-90);
    expect(o.lat).toBeLessThanOrEqual(90);
    expect(o.lng).toBeGreaterThanOrEqual(-180);
    expect(o.lng).toBeLessThanOrEqual(180);
  }
});

test('specialty lots reference real origins', () => {
  const ids = new Set(ORIGINS.map(o => o.id));
  for (const l of SPECIALTY_LOTS) expect(ids.has(l.origin)).toBe(true);
});
