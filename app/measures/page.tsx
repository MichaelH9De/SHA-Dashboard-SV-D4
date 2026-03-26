import AppShell from '@/components/layout/AppShell'
import PageHeader from '@/components/layout/PageHeader'
import MeasuresLibrary from '@/components/measures/MeasuresLibrary'
import MeasureTable from '@/components/measures/MeasureTable'
import MeasureForm from '@/components/measures/MeasureForm'

export default function Page() {
  return (
    <AppShell currentPath="/measures">
      <PageHeader eyebrow="Library" title="Measures" description="Maintain a reusable library of proxy-valued measures with category and unit controls." />
      <MeasuresLibrary />
      <MeasureTable />
      <MeasureForm />
    </AppShell>
  )
}
