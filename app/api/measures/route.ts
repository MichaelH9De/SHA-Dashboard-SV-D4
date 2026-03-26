import { measureService } from '@/lib/services/measureService'

export async function GET() {
  return Response.json({ ok: true, data: measureService.list() })
}
