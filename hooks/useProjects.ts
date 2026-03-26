import { projectService } from '@/lib/services/projectService'

export function useProjects() { return { projects: projectService.list() } }
