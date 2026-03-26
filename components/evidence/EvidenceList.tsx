import { evidenceItems } from '@/lib/storage/evidenceStorage'
import EvidenceCard from './EvidenceCard'

export default function EvidenceList() {
  return <div className="grid gap-4 xl:grid-cols-2">{evidenceItems.map((item) => <EvidenceCard key={item.id} evidence={item} />)}</div>
}
