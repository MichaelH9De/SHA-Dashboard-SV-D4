import DashboardStats from './DashboardStats'
import DashboardCharts from './DashboardCharts'
import RecentProjects from './RecentProjects'
import FrameworkUsageCard from './FrameworkUsageCard'
import IncompleteProjectsCard from './IncompleteProjectsCard'
import ActivityFeed from './ActivityFeed'

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <DashboardStats />
      <DashboardCharts />
      <div className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2"><RecentProjects /></div>
        <FrameworkUsageCard />
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        <IncompleteProjectsCard />
        <ActivityFeed />
      </div>
    </div>
  )
}
