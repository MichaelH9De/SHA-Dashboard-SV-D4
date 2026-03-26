const UNIT_LABELS: Record<string, string> = {
  gbp: 'GBP',
  sqm: 'sqm',
  hours: 'hours',
  weeks: 'weeks',
  people: 'people',
  sessions: 'sessions',
  places: 'places',
}

export function formatUnit(unit: string): string {
  return UNIT_LABELS[unit] ?? unit
}
