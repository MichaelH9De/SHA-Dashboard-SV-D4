import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <h1 className="text-5xl font-bold">Social Value Platform</h1>
        <p className="text-lg text-slate-600">
          Build your own frameworks, define your own metrics, and track delivery across live projects.
        </p>
        <div className="flex gap-4">
          <Link href="/dashboard">Go to Dashboard</Link>
          <Link href="/frameworks">Manage Frameworks</Link>
        </div>
      </div>
    </main>
  )
}
