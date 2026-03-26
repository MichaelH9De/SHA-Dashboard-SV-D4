export function toPercentage(value: number, total: number): number {
  if (!total) return 0
  return Math.max(0, Math.min(100, (value / total) * 100))
}
