import type { Framework, Project } from '@/types'
import { getProjectTotals } from './projectTotals'

export function getFrameworkTotals(framework: Framework, projects: Project[]) {
  const scoped = projects.filter((project) => project.frameworkId === framework.id)
  return scoped.reduce((acc, project) => {
    const totals = getProjectTotals(project)
    acc.projectCount += 1
    acc.targetValue += totals.targetValue
    acc.achievedValue += totals.achievedValue
    return acc
  }, { projectCount: 0, targetValue: 0, achievedValue: 0 })
}
