import type { ProjectAction } from './action'

export interface Project {
  id: string
  name: string
  frameworkId: string
  createdAt: string
  status: 'draft' | 'active' | 'completed'
  description: string
  client: string
  location: string
  startDate: string
  endDate: string
  actions: ProjectAction[]
}
