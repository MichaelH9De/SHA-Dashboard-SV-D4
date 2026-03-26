import Badge from '@/components/ui/Badge'

export default function ActionCategoryTag({ label }: { label: string }) {
  return <Badge tone="brand">{label}</Badge>
}
