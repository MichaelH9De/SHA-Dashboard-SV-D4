import type { Project } from '@/types'
import Card from '@/components/ui/Card'

export default function ProjectOverview({ project }: { project: Project }) {
  return (
    <Card>
      <h2 className="text-xl font-semibold text-slate-950">Project overview</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div><div className="text-xs uppercase tracking-[0.18em] text-slate-500">Client</div><div className="mt-2 font-semibold text-slate-900">{project.client}</div></div>
        <div><div className="text-xs uppercase tracking-[0.18em] text-slate-500">Location</div><div className="mt-2 font-semibold text-slate-900">{project.location}</div></div>
        <div><div className="text-xs uppercase tracking-[0.18em] text-slate-500">Start</div><div className="mt-2 font-semibold text-slate-900">{project.startDate}</div></div>
        <div><div className="text-xs uppercase tracking-[0.18em] text-slate-500">End</div><div className="mt-2 font-semibold text-slate-900">{project.endDate}</div></div>
      </div>
    </Card>
  )
}
