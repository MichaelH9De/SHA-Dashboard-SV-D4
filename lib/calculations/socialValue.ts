import type { Measure } from '@/types'
import type { ProjectAction } from '@/types'

export type ActionStatus = 'not-started' | 'in-progress' | 'achieved'

export function calculateTargetValue(targetQuantity: number, measure: Measure): number {
  return targetQuantity * measure.proxyValue
}

export function calculateAchievedValue(achievedQuantity: number, measure: Measure): number {
  return achievedQuantity * measure.proxyValue
}

export function calculateCompletionPercentage(targetQuantity: number, achievedQuantity: number): number {
  if (targetQuantity <= 0) return 0
  return Math.min((achievedQuantity / targetQuantity) * 100, 100)
}

export function calculateActionValue(action: ProjectAction, measure?: Measure): {
  targetValue: number
  achievedValue: number
  completionRate: number
  status: ActionStatus
} {
  if (!measure) {
    return {
      targetValue: 0,
      achievedValue: 0,
      completionRate: action.targetQuantity > 0 ? (action.achievedQuantity / action.targetQuantity) * 100 : 0,
      status: action.achievedQuantity > 0 ? 'in-progress' : 'not-started',
    }
  }

  const targetValue = calculateTargetValue(action.targetQuantity, measure)
  const achievedValue = calculateAchievedValue(action.achievedQuantity, measure)
  const completionRate = calculateCompletionPercentage(action.targetQuantity, action.achievedQuantity)
  const status: ActionStatus = action.achievedQuantity <= 0 ? 'not-started' : action.achievedQuantity >= action.targetQuantity ? 'achieved' : 'in-progress'

  return { targetValue, achievedValue, completionRate, status }
}
