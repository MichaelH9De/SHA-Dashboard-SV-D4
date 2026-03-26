import Link from 'next/link'
import { navigation } from '@/lib/config/navigation'

export default function SidebarNav({ currentPath = '' }: { currentPath?: string }) {
  return <nav className="space-y-1">{navigation.map((item) => { const active = currentPath === item.href || currentPath.startsWith(`${item.href}/`); return <Link key={item.href} href={item.href} className={`flex items-center rounded-2xl px-4 py-3 text-sm font-medium transition ${active ? 'bg-slate-950 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'}`}>{item.label}</Link> })}</nav>
}
