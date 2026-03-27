'use client'

import { useProjects } from '@/lib/hooks/useProjects'
import Card from '@/components/ui/Card'

export default function DashboardOverview() {
  const { projects, isLoaded } = useProjects()

  if (!isLoaded) {
    return <div className="p-8">Loading...</div>
  }

  if (projects.length === 0) {
    return (
      <Card>
        <div className="p-8 text-center">
          <h2 className="text-xl font-semibold text-slate-900">
            No projects yet
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Create your first project to start tracking social value.
          </p>
        </div>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <Card key={project.id}>
          <div className="p-4 font-semibold">{project.name}</div>
        </Card>
      ))}
    </div>
  )
}
