import AppShell from '@/components/layout/AppShell'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import ProjectHeader from '@/components/projects/ProjectHeader'
import ProjectSummaryCards from '@/components/projects/ProjectSummaryCards'
import ProjectTabs from '@/components/projects/ProjectTabs'
import DeleteProjectButton from '@/components/projects/DeleteProjectButton'
import Card from '@/components/ui/Card'
import { projectService } from '@/lib/services/projectService'

export default function Page({ params }: { params: { projectId: string } }) {
  const project = projectService.getById(params.projectId)
  if (!project) return <AppShell currentPath="/projects"><div className="rounded-[32px] border border-slate-200 bg-white p-8">Project not found.</div></AppShell>
  return (
    <AppShell currentPath="/projects">
      <Breadcrumbs items={[{ href: '/projects', label: 'Projects' }, { label: project.name }]} />
      <ProjectHeader project={project} />
      <ProjectSummaryCards project={project} />
      <ProjectTabs projectId={project.id} current="settings" />
      <Card>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-950">Project settings</h2>
          <p className="text-sm text-slate-600">Govern permissions, reporting defaults and archival rules from here.</p>
          <DeleteProjectButton />
        </div>
      </Card>
    </AppShell>
  )
}
