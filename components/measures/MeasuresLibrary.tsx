import { measures } from '@/lib/data/measures'
import MeasureCard from './MeasureCard'

export default function MeasuresLibrary() {
  return <div className="grid gap-4 xl:grid-cols-2">{measures.map((measure) => <MeasureCard key={measure.id} measure={measure} />)}</div>
}
