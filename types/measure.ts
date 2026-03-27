export type MeasureUnit = 'hours' | 'weeks' | 'people' | 'sessions' | 'places' | 'sqm' | 'gbp'

export interface Measure {
  id: string
  code?: string
  name: string
  unit: MeasureUnit
  proxyValue: number
  category: string
  frameworkId?: string
  description?: string
  evidenceRequired?: boolean
  tags?: string[]
}
