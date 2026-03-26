import type { Project } from '@/types'
import ProjectFrameworkBadge from './ProjectFrameworkBadge'
import ProjectStatusBadge from './ProjectStatusBadge'

export default function ProjectHeader({ project }: { project: Project }) {
  return (
    <div className="space-y-4 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <div className="flex flex-wrap gap-2"><ProjectFrameworkBadge frameworkId={project.frameworkId} /><ProjectStatusBadge status={project.status} /></div>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-950">{project.name}</h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">{project.description}</p>
      </div>
    </div>
  )
}
