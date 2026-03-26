import Card from '@/components/ui/Card'
import { seedProjects } from '@/lib/data/seedProjects'
import { measures } from '@/lib/data/measures'
import { formatCurrency } from '@/lib/utils/formatCurrency'

export default function MonthlyProgressChart() {
  const monthlyTotals = new Map<string, number>()

  seedProjects.forEach((project) => {
    project.actions.forEach((action) => {
      if (!action.achievedAt) return
      const measure = measures.find((item) => item.id === action.measureId)
      if (!measure) return
      const monthKey = action.achievedAt.slice(0, 7)
      const value = action.achievedQuantity * measure.proxyValue
      monthlyTotals.set(monthKey, (monthlyTotals.get(monthKey) ?? 0) + value)
    })
  })

  const items = Array.from(monthlyTotals.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-6)
    .map(([monthKey, value]) => {
      const date = new Date(`${monthKey}-01T00:00:00`)
      const label = date.toLocaleString('en-GB', { month: 'short' })
      return { label, value, valueLabel: formatCurrency(value) }
    })

  const max = Math.max(...items.map((item) => item.value), 1)

  return (
    <Card>
      <h3 className="text-lg font-semibold text-slate-950">Monthly progress</h3>
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
