import Link from 'next/link'

export default function Tabs({ items }: { items: Array<{ href: string; label: string; active?: boolean }> }) {
  return <div className="flex flex-wrap gap-2">{items.map((item) => <Link key={item.href} href={item.href} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${item.active ? 'bg-slate-950 text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50'}`}>{item.label}</Link>)}</div>
}
