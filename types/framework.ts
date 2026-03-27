export type FrameworkStatus = 'draft' | 'active' | 'archived'

export interface Framework {
  id: string
  name: string
  organisation: string
  owner?: string
  region?: string
  description?: string
  status: FrameworkStatus
  createdAt: string
  updatedAt?: string
  tags?: string[]
  metricIds: string[]
}
