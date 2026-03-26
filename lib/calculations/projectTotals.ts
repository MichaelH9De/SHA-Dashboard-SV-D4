import { measures } from '@/lib/data/measures'
import type { Project } from '@/types'
import { calculateActionValue } from './socialValue'

export function getProjectTotals(project: Project) {
  const totals = project.actions.reduce((acc, action) => {
    const measure = measures.find((item) => item.id === action.measureId)
    const values = calculateActionValue(action, measure)
    acc.targetValue += values.targetValue
    acc.achievedValue += values.achievedValue
    acc.targetQuantity += action.targetQuantity
    acc.achievedQuantity += action.achievedQuantity
    return acc
  }, { targetValue: 0, achievedValue: 0, targetQuantity: 0, achievedQuantity: 0 })

  return { ...totals, completionRate: totals.targetValue ? (totals.achievedValue / totals.targetValue) * 100 : 0 }
}
