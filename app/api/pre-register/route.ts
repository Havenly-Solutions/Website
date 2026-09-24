import type { NextRequest } from 'next/server';
import { handleSubmission } from '@/lib/api';
import { preRegisterSchema } from '@/lib/schemas';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  return handleSubmission(req, 'pre-register', preRegisterSchema);
}
