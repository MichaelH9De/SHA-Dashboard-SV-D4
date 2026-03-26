import SearchInput from '@/components/ui/SearchInput'
import Select from '@/components/ui/Select'

export default function ActionFilters() {
  return <div className="grid gap-4 md:grid-cols-[1fr_220px_220px]"><SearchInput placeholder="Search actions" /><Select defaultValue="all"><option value="all">All statuses</option><option value="not-started">Not started</option><option value="in-progress">In progress</option><option value="achieved">Achieved</option></Select><Select defaultValue="all"><option value="all">All categories</option><option value="Community">Community</option><option value="Employment">Employment</option><option value="Education">Education</option></Select></div>
}
