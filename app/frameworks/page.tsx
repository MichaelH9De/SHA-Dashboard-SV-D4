import AppShell from '@/components/layout/AppShell'
import PageHeader from '@/components/layout/PageHeader'
import FrameworkStats from '@/components/frameworks/FrameworkStats'
import FrameworkList from '@/components/frameworks/FrameworkList'

export default function Page() {
  return (
    <AppShell currentPath="/frameworks">
      <PageHeader eyebrow="Methodology" title="Frameworks" description="Compare and manage the measure sets that sit underneath project delivery and reporting." />
      <FrameworkStats />
      <FrameworkList />
    </AppShell>
  )
}
