import { seedProjects } from '@/lib/data/seedProjects'

export const projectService = {
  list: () => seedProjects,
  getById: (id: string) => seedProjects.find((project) => project.id === id),
}
