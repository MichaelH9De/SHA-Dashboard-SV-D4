import type { Measure } from '@/types'
import Card from '@/components/ui/Card'
import MeasureUnitBadge from './MeasureUnitBadge'
import MeasureValueDisplay from './MeasureValueDisplay'

export default function MeasureCard({ measure }: { measure: Measure }) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-950">{measure.name}</h3>
          <p className="mt-2 text-sm text-slate-600">{measure.description}</p>
        </div>
        <MeasureUnitBadge unit={measure.unit} />
      </div>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm text-slate-500">{measure.category}</span>
        <MeasureValueDisplay value={measure.proxyValue} unit={measure.unit} />
      </div>
    </Card>
  )
}
