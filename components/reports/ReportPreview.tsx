import Card from '@/components/ui/Card'

export default function ReportPreview({ name, summary }: { name: string; summary: string }) {
  return (
    <Card>
      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Preview</div>
      <h3 className="mt-3 text-xl font-semibold text-slate-950">{name}</h3>
      <p className="mt-2 text-sm text-slate-600">{summary}</p>
    </Card>
  )
}
