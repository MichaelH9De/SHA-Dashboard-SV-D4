import { frameworkService } from '@/lib/services/frameworkService'

export async function GET() {
  return Response.json({ ok: true, data: frameworkService.list() })
}
