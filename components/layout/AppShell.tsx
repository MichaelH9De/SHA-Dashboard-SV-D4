import type { ReactNode } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function AppShell({ children, currentPath = '' }: { children: ReactNode; currentPath?: string }) {
  return <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.12),_transparent_34%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] p-4 md:p-6"><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[280px_minmax(0,1fr)]"><Sidebar currentPath={currentPath} /><main className="space-y-6"><Topbar />{children}</main></div></div>
}
