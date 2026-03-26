export interface ProjectAction {
  id: string
  measureId: string
  targetQuantity: number
  achievedQuantity: number
  notes?: string
  owner?: string
  achievedAt?: string
}
