import type { ProjectAction } from '@/types'
import { measures } from '@/lib/data/measures'
import { calculateActionValue } from '@/lib/calculations/socialValue'
import ActionStatusBadge from './ActionStatusBadge'
import CurrencyValue from '@/components/shared/CurrencyValue'

export default function ActionRow({ action }: { action: ProjectAction }) {
  const measure = measures.find((item) => item.id === action.measureId)
  const values = calculateActionValue(action, measure)
  return (
    <tr>
      <td className="px-6 py-4"><div className="font-medium text-slate-900">{measure?.name}</div><div className="mt-1 text-sm text-slate-500">{action.notes}</div></td>
      <td className="px-6 py-4 text-sm text-slate-700">{action.targetQuantity}</td>
      <td className="px-6 py-4 text-sm text-slate-700">{action.achievedQuantity}</td>
      <td className="px-6 py-4 text-sm text-slate-700"><CurrencyValue value={values.achievedValue} /></td>
      <td className="px-6 py-4"><ActionStatusBadge status={values.status} /></td>
    </tr>
  )
}
