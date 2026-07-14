import type { ContactInput } from '@/lib/schemas/contact.schema';
import type { ApiResponse } from './types';

export async function submitContact(_input: ContactInput): Promise<ApiResponse<void>> {
  await new Promise(r => setTimeout(r, 800));
  // TODO(backend): POST to /contact Lambda when wired. Keep this signature.
  return { success: true, data: undefined };
}
