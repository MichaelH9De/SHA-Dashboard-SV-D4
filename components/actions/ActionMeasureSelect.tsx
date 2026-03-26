import { measures } from '@/lib/data/measures'
import Select from '@/components/ui/Select'

export default function ActionMeasureSelect() {
  return <Select defaultValue={measures[0].id}>{measures.map((measure) => <option key={measure.id} value={measure.id}>{measure.name}</option>)}</Select>
}
