import { measureService } from '@/lib/services/measureService'

export function useMeasures() { return { measures: measureService.list() } }
