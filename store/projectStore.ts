import { projectService } from '@/lib/services/projectService'

export function getProjectStore() { return { projects: projectService.list() } }
