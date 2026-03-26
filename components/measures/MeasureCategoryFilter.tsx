import Select from '@/components/ui/Select'

export default function MeasureCategoryFilter() {
  return (
    <Select defaultValue="all">
      <option value="all">All categories</option>
      <option value="Community">Community</option>
      <option value="Employment">Employment</option>
      <option value="Education">Education</option>
    </Select>
  )
}
