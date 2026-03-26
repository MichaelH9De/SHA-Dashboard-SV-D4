import { measureService } from '@/lib/services/measureService'

export function getMeasureStore() { return { measures: measureService.list() } }
