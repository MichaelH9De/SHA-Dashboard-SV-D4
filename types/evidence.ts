export type EvidenceStatus = 'received' | 'approved' | 'action-needed'

export interface Evidence {
  id: string
  title: string
  type: string
  status: EvidenceStatus
  uploadedAt: string
  projectId: string
  actionId?: string
  owner?: string
}
