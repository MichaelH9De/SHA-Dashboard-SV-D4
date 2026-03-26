import { measures } from '@/lib/data/measures'

export const measureService = {
  list: () => measures,
  getById: (id: string) => measures.find((measure) => measure.id === id),
}
