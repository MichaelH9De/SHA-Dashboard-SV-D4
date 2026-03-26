import Button from '@/components/ui/Button'

export default function ExportButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="secondary">Export PDF</Button>
      <Button variant="secondary">Export CSV</Button>
      <Button>Export XLSX</Button>
    </div>
  )
}
