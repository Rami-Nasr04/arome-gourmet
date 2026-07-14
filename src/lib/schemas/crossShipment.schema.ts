import { z } from 'zod';
import { isValidPhone } from '@/lib/format';

const LineItem = z.object({
  origin: z.string().min(1),
  type: z.string().min(1),
  bags: z.string().min(1),
});

export const CrossShipmentSchema = z.object({
  origin: z.string().min(1),
  destination: z.string().min(1),
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().refine(isValidPhone, 'Enter a valid phone (7+ digits)'),
  fax: z.string().optional(),
  address: z.string().min(4),
  items: z.array(LineItem).min(1).max(5),
});
export type CrossShipmentInput = z.infer<typeof CrossShipmentSchema>;
