import Tabs from '@/components/ui/Tabs'

export default function ProjectTabs({ projectId, current = 'overview' }: { projectId: string; current?: string }) {
  const items = [
    { href: `/projects/${projectId}/overview`, label: 'Overview', active: current === 'overview' },
    { href: `/projects/${projectId}/actions`, label: 'Actions', active: current === 'actions' },
    { href: `/projects/${projectId}/evidence`, label: 'Evidence', active: current === 'evidence' },
    { href: `/projects/${projectId}/reports`, label: 'Reports', active: current === 'reports' },
    { href: `/projects/${projectId}/settings`, label: 'Settings', active: current === 'settings' },
  ]
  return <Tabs items={items} />
}
