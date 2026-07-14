export const normalizePhone = (s: string) => s.replace(/[^\d+]/g, '');
export const isValidPhone = (s: string) => (s.match(/\d/g)?.length ?? 0) >= 7;
