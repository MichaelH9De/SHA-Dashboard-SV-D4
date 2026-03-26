import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import ActionMeasureSelect from './ActionMeasureSelect'
import ActionQuantityInputs from './ActionQuantityInputs'
import ActionNotesField from './ActionNotesField'

export default function ActionForm() {
  return (
    <Card className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-950">Add action</h3>
      <ActionMeasureSelect />
      <ActionQuantityInputs />
      <ActionNotesField />
      <Button>Save action</Button>
    </Card>
  )
}
