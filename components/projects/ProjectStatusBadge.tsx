import Badge from '@/components/ui/Badge'

export default function ProjectStatusBadge({ status }: { status: 'draft' | 'active' | 'completed' }) {
  const tone = status === 'completed' ? 'success' : status === 'draft' ? 'warning' : 'brand'
  return <Badge tone={tone as any}>{status}</Badge>
}
