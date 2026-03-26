import Table from '@/components/ui/Table'
import type { ProjectAction } from '@/types'
import ActionRow from './ActionRow'

export default function ActionsTable({ actions }: { actions: ProjectAction[] }) {
  return (
    <Table
      head={<tr><th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Action</th><th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Target</th><th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Achieved</th><th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Achieved value</th><th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Status</th></tr>}
      body={<>{actions.map((action) => <ActionRow key={action.id} action={action} />)}</>}
    />
  )
}
