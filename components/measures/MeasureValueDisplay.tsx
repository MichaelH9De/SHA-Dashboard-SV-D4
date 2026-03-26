import { formatCurrency } from '@/lib/utils/formatCurrency'
import { formatUnit } from '@/lib/utils/formatUnit'

export default function MeasureValueDisplay({ value, unit }: { value: number; unit: string }) {
  return <span className="font-semibold text-slate-950">{formatCurrency(value)} / {formatUnit(unit)}</span>
}
