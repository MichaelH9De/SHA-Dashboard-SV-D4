import Link from 'next/link'
import Card from '@/components/ui/Card'
import { seedProjects } from '@/lib/data/seedProjects'
import { getProjectTotals } from '@/lib/calculations/projectTotals'
import ProjectStatusBadge from '@/components/projects/ProjectStatusBadge'
import { formatCurrency } from '@/lib/utils/formatCurrency'

export default function RecentProjects() {
  const projects = [...seedProjects].slice(0, 3)
  return (
    <Card>
      <h3 className="text-lg font-semibold text-slate-950">Recent projects</h3>
      <div className="mt-5 space-y-4">
        {projects.map((project) => {
          const totals = getProjectTotals(project)
          return (
            <div key={project.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-slate-900">{project.name}</div>
                <ProjectStatusBadge status={project.status} />
              </div>
              <div className="mt-3 text-sm text-slate-600">{Math.round(totals.completionRate)}% complete - {formatCurrency(totals.achievedValue)} achieved</div>
              <Link href={`/projects/${project.id}`} className="mt-3 inline-flex text-sm font-semibold text-indigo-600">Open project</Link>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
