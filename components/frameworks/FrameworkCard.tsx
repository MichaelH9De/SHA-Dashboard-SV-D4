import Link from 'next/link'
import type { Framework } from '@/types'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export default function FrameworkCard({ framework }: { framework: Framework }) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-950">{framework.name}</h3>
          <p className="mt-2 text-sm text-slate-600">{framework.description}</p>
        </div>
        <Badge tone="brand">{framework.measureIds.length} measures</Badge>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div className="text-sm text-slate-500">{framework.owner} - {framework.region}</div>
        <Link href={`/frameworks/${framework.id}`} className="text-sm font-semibold text-indigo-600">Open framework</Link>
      </div>
    </Card>
  )
}
