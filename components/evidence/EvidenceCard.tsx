import type { Evidence } from '@/types'
import Card from '@/components/ui/Card'
import EvidenceStatusBadge from './EvidenceStatusBadge'

export default function EvidenceCard({ evidence }: { evidence: Evidence }) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">{evidence.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{evidence.type} uploaded on {evidence.uploadedAt}</p>
        </div>
        <EvidenceStatusBadge status={evidence.status} />
      </div>
    </Card>
  )
}
