import AppShell from '@/components/layout/AppShell'
import PageHeader from '@/components/layout/PageHeader'
import ReportFilters from '@/components/reports/ReportFilters'
import ReportsOverview from '@/components/reports/ReportsOverview'
import FrameworkReportSummary from '@/components/reports/FrameworkReportSummary'
import ProjectReportSummary from '@/components/reports/ProjectReportSummary'
import ExportButtons from '@/components/reports/ExportButtons'

export default function Page() {
  return (
    <AppShell currentPath="/reports">
      <PageHeader eyebrow="Outputs" title="Reports" description="Generate clean project and framework summaries for internal review or client issue." actions={<ExportButtons />} />
      <ReportFilters />
      <div className="grid gap-4 xl:grid-cols-2">
        <ProjectReportSummary />
        <FrameworkReportSummary />
      </div>
      <ReportsOverview />
    </AppShell>
  )
}
