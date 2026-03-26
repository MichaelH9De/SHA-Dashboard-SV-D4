import Badge from '@/components/ui/Badge'
import { frameworks } from '@/lib/data/frameworks'

export default function ProjectFrameworkBadge({ frameworkId }: { frameworkId: string }) {
  return <Badge tone="brand">{frameworks.find((framework) => framework.id === frameworkId)?.name ?? frameworkId}</Badge>
}
