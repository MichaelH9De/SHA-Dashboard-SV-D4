import { evidenceItems } from '@/lib/storage/evidenceStorage'

export const evidenceService = {
  list: () => evidenceItems,
  getByProject: (projectId: string) => evidenceItems.filter((item) => item.projectId === projectId),
}
