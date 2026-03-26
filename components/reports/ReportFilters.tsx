import SearchInput from '@/components/ui/SearchInput'
import Select from '@/components/ui/Select'

export default function ReportFilters() {
  return <div className="grid gap-4 md:grid-cols-[1fr_220px_220px]"><SearchInput placeholder="Search reports" /><Select defaultValue="all"><option value="all">All formats</option><option value="pdf">PDF</option><option value="csv">CSV</option><option value="xlsx">XLSX</option></Select><Select defaultValue="all"><option value="all">All scopes</option><option value="project">Project</option><option value="framework">Framework</option></Select></div>
}
