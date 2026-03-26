import AppShell from '@/components/layout/AppShell'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import FrameworkDetails from '@/components/frameworks/FrameworkDetails'
import { frameworkService } from '@/lib/services/frameworkService'

export default function Page({ params }: { params: { frameworkId: string } }) {
  const framework = frameworkService.getById(params.frameworkId)
  if (!framework) return <AppShell currentPath="/frameworks"><div className="rounded-[32px] border border-slate-200 bg-white p-8">Framework not found.</div></AppShell>
  return (
    <AppShell currentPath="/frameworks">
      <Breadcrumbs items={[{ href: '/frameworks', label: 'Frameworks' }, { label: framework.name }]} />
      <FrameworkDetails framework={framework} />
    </AppShell>
  )
}
