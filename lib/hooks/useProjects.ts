'use client'

import { useEffect, useState } from 'react'
import type { Project } from '@/types'
import { localStorage as storage } from '@/lib/storage/localStorage'

const STORAGE_KEY = 'svd4-projects'

function parseProjects(raw: string | null): Project[] {
  if (!raw) return []

  try {
    const value = JSON.parse(raw)
    return Array.isArray(value) ? value : []
  } catch {
    return []
  }
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const stored = storage.get(STORAGE_KEY)
    setProjects(parseProjects(stored))
    setIsLoaded(true)
  }, [])

  const saveProjects = (nextProjects: Project[]) => {
    setProjects(nextProjects)
    storage.set(STORAGE_KEY, JSON.stringify(nextProjects))
  }

  const addProject = (project: Project) => {
    setProjects((currentProjects) => {
      const nextProjects = [project, ...currentProjects]
      storage.set(STORAGE_KEY, JSON.stringify(nextProjects))
      return nextProjects
    })
  }

  return {
    projects,
    isLoaded,
    addProject,
    saveProjects,
  }
}
