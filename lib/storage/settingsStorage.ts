import type { Settings } from '@/types'

export const defaultSettings: Settings = {
  defaultFrameworkId: 'rise',
  locale: 'en-GB',
  currency: 'GBP',
  reportingCadence: 'monthly',
  reviewWindowDays: 14,
}

export const settingsStorage = {
  get: () => defaultSettings,
}
