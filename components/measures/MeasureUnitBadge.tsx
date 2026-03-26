import Badge from '@/components/ui/Badge'
import { formatUnit } from '@/lib/utils/formatUnit'

export default function MeasureUnitBadge({ unit }: { unit: string }) {
  return <Badge tone="brand">{formatUnit(unit)}</Badge>
}
