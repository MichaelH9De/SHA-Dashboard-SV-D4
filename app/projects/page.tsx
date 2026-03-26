import AppShell from '@/components/layout/AppShell'
import PageHeader from '@/components/layout/PageHeader'
import ProjectList from '@/components/projects/ProjectList'
import ProjectTable from '@/components/projects/ProjectTable'
import Button from '@/components/ui/Button'

export default function Page() {
  return (
    <AppShell currentPath="/projects">
      <PageHeader eyebrow="Delivery" title="Projects" description="Track social value delivery at project level with clean reporting surfaces and action-by-action visibility." actions={<Button>Create project</Button>} />
      <ProjectList />
      <ProjectTable />
    </AppShell>
  )
}
