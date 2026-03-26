import type { Project } from '@/types'
import { getProjectTotals } from '@/lib/calculations/projectTotals'
import StatCard from '@/components/ui/StatCard'
import CurrencyValue from '@/components/shared/CurrencyValue'

export default function ProjectSummaryCards({ project }: { project: Project }) {
  const totals = getProjectTotals(project)
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard label="Target value" value={<CurrencyValue value={totals.targetValue} />} helper="Calculated from mapped measures and target quantities" />
      <StatCard label="Achieved value" value={<CurrencyValue value={totals.achievedValue} />} helper="Current progress captured against the register" />
      <StatCard label="Completion" value={`${Math.round(totals.completionRate)}%`} helper={`${project.actions.length} actions in this project`} />
    </div>
  )
}
