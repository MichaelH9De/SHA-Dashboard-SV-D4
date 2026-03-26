import type { Framework } from '@/types'
import Card from '@/components/ui/Card'
import FrameworkMeasuresTable from './FrameworkMeasuresTable'

export default function FrameworkDetails({ framework }: { framework: Framework }) {
  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-2xl font-semibold text-slate-950">{framework.name}</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">{framework.description}</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs uppercase tracking-[0.2em] text-slate-500">Owner</div><div className="mt-2 font-semibold text-slate-900">{framework.owner}</div></div>
          <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs uppercase tracking-[0.2em] text-slate-500">Region</div><div className="mt-2 font-semibold text-slate-900">{framework.region}</div></div>
          <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs uppercase tracking-[0.2em] text-slate-500">Measures</div><div className="mt-2 font-semibold text-slate-900">{framework.measureIds.length}</div></div>
        </div>
      </Card>
      <FrameworkMeasuresTable measureIds={framework.measureIds} />
    </div>
  )
}
