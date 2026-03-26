import type { DashboardSummary, Project } from '@/types'
import { getProjectTotals } from './projectTotals'

export function getDashboardTotals(projects: Project[]): DashboardSummary {
  const aggregate = projects.reduce((acc, project) => {
    const totals = getProjectTotals(project)
    acc.totalProjects += 1
    acc.totalTargetValue += totals.targetValue
    acc.totalAchievedValue += totals.achievedValue
    if (project.status === 'active') acc.activeProjects += 1
    return acc
  }, { totalProjects: 0, totalTargetValue: 0, totalAchievedValue: 0, activeProjects: 0 })

  return { ...aggregate, completionRate: aggregate.totalTargetValue ? (aggregate.totalAchievedValue / aggregate.totalTargetValue) * 100 : 0 }
}
