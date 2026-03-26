import { demoReports } from '@/lib/services/reportService'
import ReportPreview from './ReportPreview'

export default function ReportsOverview() {
  return <div className="grid gap-4 xl:grid-cols-3">{demoReports.map((report) => <ReportPreview key={report.id} name={report.name} summary={report.summary} />)}</div>
}
