import AppShell from '@/components/layout/AppShell'
import PageHeader from '@/components/layout/PageHeader'
import ProjectForm from '@/components/projects/ProjectForm'

export default function Page() {
  return (
    <AppShell currentPath="/projects">
      <PageHeader eyebrow="Project setup" title="Create project" description="Start a new record with framework mapping, scope context and reporting defaults." />
      <ProjectForm />
    </AppShell>
  )
}
