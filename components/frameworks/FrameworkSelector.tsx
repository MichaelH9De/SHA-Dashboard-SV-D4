import { frameworks } from '@/lib/data/frameworks'
import Select from '@/components/ui/Select'

export default function FrameworkSelector() {
  return <Select defaultValue={frameworks[0].id}>{frameworks.map((framework) => <option key={framework.id} value={framework.id}>{framework.name}</option>)}</Select>
}
