import Link from 'next/link'
import SidebarNav from './SidebarNav'

export default function Sidebar({ currentPath = '' }: { currentPath?: string }) {
  return <aside className="sticky top-6 h-fit rounded-[32px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"><Link href="/" className="mb-6 block rounded-2xl bg-gradient-to-br from-slate-950 to-indigo-700 px-4 py-5 text-white"><div className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">Social Value</div><div className="mt-2 text-xl font-bold">Impact OS</div><p className="mt-2 text-sm text-indigo-100">Clean enough for a bid team, sharp enough for a client demo.</p></Link><SidebarNav currentPath={currentPath} /></aside>
}
