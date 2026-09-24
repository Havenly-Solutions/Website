import type { NextRequest } from 'next/server';
import { handleSubmission } from '@/lib/api';
import { partnerSchema } from '@/lib/schemas';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  return handleSubmission(req, 'partner-enquiry', partnerSchema);
}
