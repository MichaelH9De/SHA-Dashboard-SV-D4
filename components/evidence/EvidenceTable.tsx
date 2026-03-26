import Table from '@/components/ui/Table'
import { evidenceItems } from '@/lib/storage/evidenceStorage'
import EvidenceStatusBadge from './EvidenceStatusBadge'

export default function EvidenceTable() {
  return (
    <Table
      head={<tr><th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Title</th><th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Type</th><th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Uploaded</th><th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Status</th></tr>}
      body={<>{evidenceItems.map((item) => <tr key={item.id}><td className="px-6 py-4 font-medium text-slate-900">{item.title}</td><td className="px-6 py-4 text-sm text-slate-700">{item.type}</td><td className="px-6 py-4 text-sm text-slate-700">{item.uploadedAt}</td><td className="px-6 py-4"><EvidenceStatusBadge status={item.status} /></td></tr>)}</>}
    />
  )
}
