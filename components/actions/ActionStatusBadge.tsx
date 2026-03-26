import Badge from '@/components/ui/Badge'

export default function ActionStatusBadge({ status }: { status: 'not-started' | 'in-progress' | 'achieved' }) {
  const tone = status === 'achieved' ? 'success' : status === 'in-progress' ? 'warning' : 'default'
  return <Badge tone={tone as any}>{status.replace('-', ' ')}</Badge>
}
