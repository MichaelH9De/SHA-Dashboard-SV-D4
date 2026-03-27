'use client'

import { useProjects } from '@/lib/hooks/useProjects'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import type { Project } from '@/types'

export default function Page() {
  const { projects, addProject, isLoaded } = useProjects()
  const [name, setName] = useState('')

  if (!isLoaded) return <div className="p-8">Loading...</div>

  const handleAdd = () => {
    if (!name) return

    const newProject: Project = {
      id: Date.now().toString(),
      name,
      description: '',
      client: '',
      location: '',
      frameworkId: '',
      status: 'draft',
      startDate: '',
      endDate: '',
      createdAt: new Date().toISOString(),
      actions: [],
    }

    addProject(newProject)
    setName('')
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project name"
          className="border p-2 rounded"
        />
        <Button onClick={handleAdd}>Add Project</Button>
      </div>

      {projects.length === 0 ? (
        <div>No projects yet</div>
      ) : (
        <ul>
          {projects.map((p) => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
