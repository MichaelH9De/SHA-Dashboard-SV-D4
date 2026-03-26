import { reportService } from '@/lib/services/reportService'

export async function GET() {
  return Response.json({ ok: true, data: reportService.list() })
}
