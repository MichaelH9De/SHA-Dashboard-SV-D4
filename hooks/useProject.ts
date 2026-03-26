import { projectService } from '@/lib/services/projectService'

export function useProject(projectId: string) { return { project: projectService.getById(projectId) } }
