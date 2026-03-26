import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

const features = [
  'Framework-aware measure library',
  'Project-by-project action tracking',
  'Evidence status visibility',
  'Export-friendly reporting surfaces',
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.15),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] px-6 py-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-700 text-white">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-200">Social Value Platform Scaffold</div>
              <h1 className="mt-4 text-5xl font-bold tracking-tight">A gorgeous GitHub-ready foundation for tracking social value properly.</h1>
              <p className="mt-5 max-w-2xl text-base text-slate-200">This rebuild turns the blank shell into a polished Next.js demo with meaningful data, reusable components, API routes, docs and deployable structure. Because shipping a white page with dead links is certainly a choice.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/dashboard"><Button>Open dashboard</Button></Link>
                <Link href="/projects"><Button variant="secondary">Browse projects</Button></Link>
              </div>
            </div>
          </Card>
          <div className="grid gap-6">
            {features.map((feature) => (
              <Card key={feature} className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-indigo-600" />
                <div className="text-base font-semibold text-slate-900">{feature}</div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
