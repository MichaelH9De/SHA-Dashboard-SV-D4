import { evidenceService } from '@/lib/services/evidenceService'

export async function GET() {
  return Response.json({ ok: true, data: evidenceService.list() })
}
