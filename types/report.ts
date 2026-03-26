export type ReportStatus = 'draft' | 'in-review' | 'published'

export interface Report {
  id: string
  name: string
  summary: string
  period: string
  status: ReportStatus
  createdAt: string
}
