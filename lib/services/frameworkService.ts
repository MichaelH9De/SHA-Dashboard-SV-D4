import { frameworks } from '@/lib/data/frameworks'

export const frameworkService = {
  list: () => frameworks,
  getById: (id: string) => frameworks.find((framework) => framework.id === id),
}
