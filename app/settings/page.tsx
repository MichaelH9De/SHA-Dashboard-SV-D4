import AppShell from '@/components/layout/AppShell'
import PageHeader from '@/components/layout/PageHeader'
import Card from '@/components/ui/Card'
import { defaultSettings } from '@/lib/storage/settingsStorage'

export default function Page() {
  return (
    <AppShell currentPath="/settings">
      <PageHeader eyebrow="Preferences" title="Settings" description="Keep the scaffolding honest with configurable defaults for framework, locale and reporting behaviour." />
      <Card>
        <pre className="overflow-auto rounded-2xl bg-slate-950 p-5 text-sm text-slate-100">{JSON.stringify(defaultSettings, null, 2)}</pre>
      </Card>
    </AppShell>
  )
}
