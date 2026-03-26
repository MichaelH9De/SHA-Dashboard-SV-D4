import { projectService } from '@/lib/services/projectService'

export async function GET(_: Request, { params }: { params: { projectId: string } }) {
  const project = projectService.getById(params.projectId)
  return Response.json({ ok: Boolean(project), data: project ?? null })
}
