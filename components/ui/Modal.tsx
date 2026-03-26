import type { ReactNode } from 'react'
import Card from './Card'

export default function Modal({ title = 'Modal preview', children }: { title?: string; children?: ReactNode }) {
  return <div className="rounded-[32px] bg-slate-950/50 p-4"><Card className="mx-auto max-w-xl"><div className="mb-3 text-lg font-semibold text-slate-950">{title}</div><div className="text-sm text-slate-600">{children ?? 'Use this component to host forms, approvals or confirmation flows in a polished overlay.'}</div></Card></div>
}
