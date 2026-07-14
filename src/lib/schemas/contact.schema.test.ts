import { ContactSchema } from './contact.schema';

test('valid contact passes; bad email/phone fail', () => {
  expect(ContactSchema.safeParse({ name: 'Sam', email: 'a@b.co', message: 'hi there' }).success).toBe(true);
  expect(ContactSchema.safeParse({ name: '', email: 'x', message: '' }).success).toBe(false);
});
