export default function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return <div className="space-y-2">{eyebrow ? <div className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">{eyebrow}</div> : null}<h2 className="text-2xl font-bold tracking-tight text-slate-950">{title}</h2>{description ? <p className="max-w-3xl text-sm text-slate-600">{description}</p> : null}</div>
}
