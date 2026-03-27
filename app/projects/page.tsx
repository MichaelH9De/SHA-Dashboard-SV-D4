'use client'

import { FormEvent, useState } from 'react'
import { useProjects } from '@/lib/hooks/useProjects'
import Button from '@/components/ui/Button'
import type { Project } from '@/types'

const initialForm = {
  name: '',
  client: '',
  location: '',
  description: '',
  status: 'draft' as const,
  startDate: '',
  endDate: '',
  deliveryNotes: '',
}

export default function Page() {
  const { projects, addProject, isLoaded } = useProjects()
  const [form, setForm] = useState(initialForm)
  const [message, setMessage] = useState('')

  if (!isLoaded) return <div className="p-8">Loading...</div>

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedName = form.name.trim()
    if (!trimmedName) {
      setMessage('Enter a project name first.')
      return
    }

    const notes = form.deliveryNotes.trim()

    const newProject: Project = {
      id: Date.now().toString(),
      name: trimmedName,
      description: form.description.trim() || notes,
      client: form.client.trim(),
      location: form.location.trim(),
      frameworkId: '',
      status: form.status,
      startDate: form.startDate,
      endDate: form.endDate,
      createdAt: new Date().toISOString(),
      actions: notes
        ? [
            {
              id: `${Date.now()}-note`,
              measureId: 'custom-note',
              targetQuantity: 1,
              achievedQuantity: 1,
              notes,
              owner: form.client.trim() || 'Project team',
              achievedAt: new Date().toISOString(),
            },
          ]
        : [],
    }

    addProject(newProject)
    setForm(initialForm)
    setMessage(`Project "${trimmedName}" added.`)
  }

  return (
    <div className="space-y-6 p-6">
      <form onSubmit={handleSubmit} className="space-y-4 rounded-[24px] border border-slate-200 bg-white p-5">
        <div className="grid gap-4 md:grid-cols-2">
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Project name" className="rounded-2xl border border-slate-300 px-4 py-3" />
          <input value={form.client} onChange={(e) => setForm({ ...form, client: e.target.value })} placeholder="Client" className="rounded-2xl border border-slate-300 px-4 py-3" />
          <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="Location" className="rounded-2xl border border-slate-300 px-4 py-3" />
          <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as 'draft' | 'active' | 'completed' })} className="rounded-2xl border border-slate-300 px-4 py-3">
            <option value="draft">Draft</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
          <input type="date" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} className="rounded-2xl border border-slate-300 px-4 py-3" />
          <input type="date" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} className="rounded-2xl border border-slate-300 px-4 py-3" />
        </div>

        <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Project description" className="min-h-[120px] w-full rounded-2xl border border-slate-300 px-4 py-3" />
        <textarea value={form.deliveryNotes} onChange={(e) => setForm({ ...form, deliveryNotes: e.target.value })} placeholder="What we did / measures delivered / notes" className="min-h-[140px] w-full rounded-2xl border border-slate-300 px-4 py-3" />

        <div className="flex items-center gap-3">
          <Button type="submit">Add Project</Button>
          {message ? <p className="text-sm text-slate-600">{message}</p> : null}
        </div>
      </form>

      {projects.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-600">No projects yet</div>
      ) : (
        <ul className="space-y-3">
          {projects.map((project) => (
            <li key={project.id} className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-900">
              <div className="font-semibold">{project.name}</div>
              <div className="mt-1 text-sm text-slate-600">{project.client || 'No client'} · {project.location || 'No location'}</div>
              {project.description ? <div className="mt-2 text-sm text-slate-600">{project.description}</div> : null}
              {project.actions[0]?.notes ? <div className="mt-2 text-sm text-slate-500">What we did: {project.actions[0].notes}</div> : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
