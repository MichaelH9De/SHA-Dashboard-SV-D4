import { formatCurrency } from '@/lib/utils/formatCurrency'

export default function CurrencyValue({ value }: { value: number }) {
  return <span>{formatCurrency(value)}</span>
}
