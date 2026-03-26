import Card from '@/components/ui/Card'
import { frameworks } from '@/lib/data/frameworks'
import { seedProjects } from '@/lib/data/seedProjects'

export default function FrameworkUsageCard() {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-slate-950">Framework usage</h3>
      <div className="mt-5 space-y-4">
        {frameworks.map((framework) => {
          const count = seedProjects.filter((project) => project.frameworkId === framework.id).length
          return (
            <div key={framework.id}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">{framework.name}</span>
                <span className="text-slate-500">{count} projects</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-slate-900" style={{ width: `${Math.max(8, count * 30)}%` }} />
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
