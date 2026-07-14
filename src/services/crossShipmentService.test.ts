import { submitCrossShipment } from './crossShipmentService';

test('mock submit resolves success', async () => {
  const res = await submitCrossShipment({
    origin: 'BR',
    destination: 'LB',
    fullName: 'Sam',
    email: 'a@b.co',
    phone: '01687493',
    address: 'Beirut',
    items: [{ origin: 'BR', type: 'Arabica', bags: '50' }],
  });
  expect(res.success).toBe(true);
});
