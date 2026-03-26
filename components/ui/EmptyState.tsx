import type { ReactNode } from 'react'

export default function EmptyState({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return <div className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center"><h3 className="text-lg font-semibold text-slate-900">{title}</h3><p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">{description}</p>{action ? <div className="mt-4">{action}</div> : null}</div>
}
