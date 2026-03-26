import { frameworks } from '@/lib/data/frameworks'
import FrameworkCard from './FrameworkCard'

export default function FrameworkList() {
  return <div className="grid gap-4 xl:grid-cols-2">{frameworks.map((framework) => <FrameworkCard key={framework.id} framework={framework} />)}</div>
}
