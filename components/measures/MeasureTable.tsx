import Badge from '@/components/ui/Badge'
import Table from '@/components/ui/Table'
import { measures } from '@/lib/data/measures'
import { formatCurrency } from '@/lib/utils/formatCurrency'
import { formatUnit } from '@/lib/utils/formatUnit'

export default function MeasureTable() {
  return (
    <Table
      head={<tr><th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Measure</th><th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Category</th><th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Unit</th><th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Proxy value</th></tr>}
      body={<>{measures.map((measure) => <tr key={measure.id}><td className="px-6 py-4"><div className="font-medium text-slate-900">{measure.name}</div><div className="mt-1 text-sm text-slate-500">{measure.description}</div></td><td className="px-6 py-4 text-sm text-slate-700">{measure.category}</td><td className="px-6 py-4 text-sm text-slate-700">{formatUnit(measure.unit)}</td><td className="px-6 py-4 text-sm text-slate-700">{formatCurrency(measure.proxyValue)}</td></tr>)}</>}
    />
  )
}
