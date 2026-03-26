import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function EvidenceUpload() {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-slate-950">Upload evidence</h3>
      <p className="mt-2 text-sm text-slate-600">A drag-and-drop surface belongs here once you connect real storage. For now, the scaffold shows the right UX footprint without pretending the backend fairy has arrived.</p>
      <div className="mt-4"><Button>Choose file</Button></div>
    </Card>
  )
}
