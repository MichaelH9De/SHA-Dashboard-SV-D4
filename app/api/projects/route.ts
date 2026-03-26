import { projectService } from '@/lib/services/projectService'

export async function GET() {
  return Response.json({ ok: true, data: projectService.list() })
}
