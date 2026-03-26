import AppShell from '@/components/layout/AppShell'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import MeasureCard from '@/components/measures/MeasureCard'
import { measureService } from '@/lib/services/measureService'

export default function Page({ params }: { params: { measureId: string } }) {
  const measure = measureService.getById(params.measureId)
  if (!measure) return <AppShell currentPath="/measures"><div className="rounded-[32px] border border-slate-200 bg-white p-8">Measure not found.</div></AppShell>
  return (
    <AppShell currentPath="/measures">
      <Breadcrumbs items={[{ href: '/measures', label: 'Measures' }, { label: measure.name }]} />
      <MeasureCard measure={measure} />
    </AppShell>
  )
}
