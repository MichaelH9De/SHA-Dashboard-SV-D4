import Card from '@/components/ui/Card'
import { frameworks } from '@/lib/data/frameworks'
import { seedProjects } from '@/lib/data/seedProjects'

export default function FrameworkStats() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {frameworks.map((framework) => (
        <Card key={framework.id}>
          <div className="text-sm font-medium text-slate-500">{framework.name}</div>
          <div className="mt-3 text-3xl font-bold text-slate-950">{seedProjects.filter((project) => project.frameworkId === framework.id).length}</div>
          <p className="mt-2 text-sm text-slate-600">Projects currently mapped to this framework.</p>
        </Card>
      ))}
    </div>
  )
}
