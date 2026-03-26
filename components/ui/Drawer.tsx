import type { ReactNode } from 'react'

export default function Drawer({ title = 'Drawer', children }: { title?: string; children?: ReactNode }) {
  return <aside className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)]"><div className="mb-3 text-lg font-semibold text-slate-950">{title}</div><div className="text-sm text-slate-600">{children ?? 'A side-sheet surface for contextual editing without forcing navigation.'}</div></aside>
}
