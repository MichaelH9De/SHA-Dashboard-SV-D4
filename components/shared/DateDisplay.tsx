import { formatDate } from '@/lib/utils/formatDate'

export default function DateDisplay({ value }: { value: string }) {
  return <span>{formatDate(value)}</span>
}
