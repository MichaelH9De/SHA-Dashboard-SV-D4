import Card from '@/components/ui/Card'
import { seedProjects } from '@/lib/data/seedProjects'
import { getProjectTotals } from '@/lib/calculations/projectTotals'

export default function CompletionChart() {
  const items = seedProjects.map((project) => {
    const totals = getProjectTotals(project)
    return { label: project.name, value: Math.round(totals.completionRate), valueLabel: `${Math.round(totals.completionRate)}%` }
  })

  const max = Math.max(...items.map((item) => item.value), 1)
  return (
    <Card>
      <h3 className="text-lg font-semibold text-slate-950">Completion by project</h3>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700">{item.label}</span>
              <span className="text-slate-500">{item.valueLabel}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-gradient-to-r from-slate-900 to-indigo-500" style={ { width: `${(item.value / max) * 100}%` } } />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
