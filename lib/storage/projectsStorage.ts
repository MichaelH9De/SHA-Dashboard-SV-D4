import type { Project } from '@/types'
import { seedProjects } from '@/lib/data/seedProjects'

export const projectsStorage: Project[] = seedProjects

export const projectsStore = {
  list: () => seedProjects,
  getById: (id: string) => seedProjects.find((project) => project.id === id),
}
