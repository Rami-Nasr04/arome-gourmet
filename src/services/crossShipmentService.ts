import type { CrossShipmentInput } from '@/lib/schemas/crossShipment.schema';
import type { ApiResponse } from './types';

export async function submitCrossShipment(_input: CrossShipmentInput): Promise<ApiResponse<void>> {
  await new Promise(r => setTimeout(r, 800));
  // TODO(backend): POST to /cross-shipment Lambda when wired. Keep this signature.
  return { success: true, data: undefined };
}
