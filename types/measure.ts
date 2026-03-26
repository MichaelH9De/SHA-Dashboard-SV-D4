export type MeasureUnit = 'hours' | 'weeks' | 'people' | 'sessions' | 'places' | 'sqm' | 'gbp'

export interface Measure {
  id: string
  name: string
  unit: MeasureUnit
  proxyValue: number
  category: string
  description?: string
}
