import { frameworkService } from '@/lib/services/frameworkService'

export function getFrameworkStore() { return { frameworks: frameworkService.list() } }
