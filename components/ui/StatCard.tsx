import type { ReactNode } from 'react'
import Card from './Card'

export default function StatCard({ label, value, helper, icon }: { label: string; value: ReactNode; helper?: string; icon?: ReactNode }) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <div className="mt-2 text-3xl font-bold tracking-tight text-slate-950">{value}</div>
          {helper ? <p className="mt-2 text-sm text-slate-600">{helper}</p> : null}
        </div>
        {icon ? <div className="rounded-2xl bg-slate-100 p-3 text-slate-700">{icon}</div> : null}
      </div>
    </Card>
  )
}
