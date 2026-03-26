import type { ReactNode } from 'react'

export default function PageHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: ReactNode }) {
  return <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"><div>{eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">{eyebrow}</p> : null}<h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-950">{title}</h1>{description ? <p className="mt-3 max-w-3xl text-sm text-slate-600">{description}</p> : null}</div>{actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}</div>
}
