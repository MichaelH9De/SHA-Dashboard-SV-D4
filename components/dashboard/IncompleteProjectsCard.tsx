import Card from '@/components/ui/Card'
import { seedProjects } from '@/lib/data/seedProjects'
import { getProjectTotals } from '@/lib/calculations/projectTotals'
import { formatCurrency } from '@/lib/utils/formatCurrency'

export default function IncompleteProjectsCard() {
  const items = seedProjects.filter((project) => getProjectTotals(project).completionRate < 100)
  return (
    <Card>
      <h3 className="text-lg font-semibold text-slate-950">Delivery gaps</h3>
      <div className="mt-4 space-y-4 text-sm text-slate-600">
        {items.slice(0, 3).map((project) => {
          const totals = getProjectTotals(project)
          const remainingValue = totals.targetValue - totals.achievedValue
          return (
            <div key={project.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="font-semibold text-slate-900">{project.name}</div>
              <p className="mt-1 text-sm text-slate-600">{Math.round(totals.completionRate)}% complete with {formatCurrency(remainingValue)} left on the table.</p>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
