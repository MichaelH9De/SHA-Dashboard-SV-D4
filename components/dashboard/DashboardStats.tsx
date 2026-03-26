import CurrencyValue from '@/components/shared/CurrencyValue'
import PercentageValue from '@/components/shared/PercentageValue'
import StatCard from '@/components/ui/StatCard'
import { getDashboardTotals } from '@/lib/calculations/dashboardTotals'
import { seedProjects } from '@/lib/data/seedProjects'

export default function DashboardStats() {
  const summary = getDashboardTotals(seedProjects)
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatCard label="Projects" value={String(summary.totalProjects)} helper={`${summary.activeProjects} active right now`} />
      <StatCard label="Target social value" value={<CurrencyValue value={summary.totalTargetValue} />} helper="Projected proxy value across all live actions" />
      <StatCard label="Achieved value" value={<CurrencyValue value={summary.totalAchievedValue} />} helper="Evidence-backed delivery to date" />
      <StatCard label="Completion" value={<PercentageValue value={summary.completionRate} />} helper="Weighted against target value" />
    </div>
  )
}
