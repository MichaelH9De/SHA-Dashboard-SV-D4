import AppShell from '@/components/layout/AppShell'
import PageHeader from '@/components/layout/PageHeader'
import DashboardOverview from '@/components/dashboard/DashboardOverview'
import Button from '@/components/ui/Button'

export default function Page() {
  return (
    <AppShell currentPath="/dashboard">
      <PageHeader eyebrow="Overview" title="Dashboard" description="A high-level snapshot of projects, framework performance, achieved value and delivery risk." actions={<><Button variant="secondary">Share</Button><Button>Generate report</Button></>} />
      <DashboardOverview />
    </AppShell>
  )
}
