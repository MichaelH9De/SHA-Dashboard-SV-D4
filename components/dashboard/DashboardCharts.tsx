import CategoryBreakdownChart from '@/components/charts/CategoryBreakdownChart'
import CompletionChart from '@/components/charts/CompletionChart'
import MonthlyProgressChart from '@/components/charts/MonthlyProgressChart'
import ValueByFrameworkChart from '@/components/charts/ValueByFrameworkChart'

export default function DashboardCharts() {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <ValueByFrameworkChart />
      <CompletionChart />
      <CategoryBreakdownChart />
      <MonthlyProgressChart />
    </div>
  )
}
