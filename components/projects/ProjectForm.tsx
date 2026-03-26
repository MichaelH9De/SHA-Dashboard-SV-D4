import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import FrameworkSelector from '@/components/frameworks/FrameworkSelector'

export default function ProjectForm() {
  return <Card className="space-y-4"><h3 className="text-lg font-semibold text-slate-950">Create project</h3><div className="grid gap-4 md:grid-cols-2"><Input placeholder="Project name" /><Input placeholder="Client" /></div><div className="grid gap-4 md:grid-cols-2"><Input placeholder="Location" /><FrameworkSelector /></div><Textarea placeholder="Project summary, target outcomes and client reporting expectations." /><Button>Create project</Button></Card>
}
