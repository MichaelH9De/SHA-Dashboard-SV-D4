import { frameworkService } from '@/lib/services/frameworkService'

export function useFrameworks() { return { frameworks: frameworkService.list() } }
