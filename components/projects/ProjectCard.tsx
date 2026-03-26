import Link from 'next/link'
import type { Project } from '@/types'
import Card from '@/components/ui/Card'
import ProjectFrameworkBadge from './ProjectFrameworkBadge'
import ProjectStatusBadge from './ProjectStatusBadge'
import { getProjectTotals } from '@/lib/calculations/projectTotals'
import CurrencyValue from '@/components/shared/CurrencyValue'

export default function ProjectCard({ project }: { project: Project }) {
  const totals = getProjectTotals(project)
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap gap-2"><ProjectFrameworkBadge frameworkId={project.frameworkId} /><ProjectStatusBadge status={project.status} /></div>
          <h3 className="mt-4 text-xl font-semibold text-slate-950">{project.name}</h3>
          <p className="mt-2 text-sm text-slate-600">{project.description}</p>
        </div>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs uppercase tracking-[0.18em] text-slate-500">Client</div><div className="mt-2 font-semibold text-slate-900">{project.client}</div></div>
        <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs uppercase tracking-[0.18em] text-slate-500">Target value</div><div className="mt-2 font-semibold text-slate-900"><CurrencyValue value={totals.targetValue} /></div></div>
        <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs uppercase tracking-[0.18em] text-slate-500">Completion</div><div className="mt-2 font-semibold text-slate-900">{Math.round(totals.completionRate)}%</div></div>
      </div>
      <Link href={`/projects/${project.id}`} className="mt-5 inline-flex text-sm font-semibold text-indigo-600">Open project</Link>
    </Card>
  )
}
