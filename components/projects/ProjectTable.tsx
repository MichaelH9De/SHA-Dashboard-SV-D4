import Link from 'next/link'
import Table from '@/components/ui/Table'
import { seedProjects } from '@/lib/data/seedProjects'

export default function ProjectTable() {
  return (
    <Table
      head={<tr><th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Project</th><th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Framework</th><th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Status</th><th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Location</th></tr>}
      body={<>{seedProjects.map((project) => <tr key={project.id}><td className="px-6 py-4"><Link href={`/projects/${project.id}`} className="font-medium text-slate-900 hover:text-indigo-600">{project.name}</Link></td><td className="px-6 py-4 text-sm text-slate-700">{project.frameworkId}</td><td className="px-6 py-4 text-sm text-slate-700">{project.status}</td><td className="px-6 py-4 text-sm text-slate-700">{project.location}</td></tr>)}</>}
    />
  )
}
