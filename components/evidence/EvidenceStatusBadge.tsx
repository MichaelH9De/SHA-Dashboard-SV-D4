import Badge from '@/components/ui/Badge'
import type { EvidenceStatus } from '@/types'

export default function EvidenceStatusBadge({ status }: { status: EvidenceStatus }) {
  const tone = status === 'approved' ? 'success' : status === 'received' ? 'brand' : 'warning'
  return <Badge tone={tone as any}>{status}</Badge>
}
