import Button from './Button'
import Card from './Card'

export default function ConfirmDialog() {
  return <Card className="max-w-md"><div className="space-y-3"><div><h3 className="text-lg font-semibold text-slate-950">Confirm deletion</h3><p className="mt-1 text-sm text-slate-600">Designed for irreversible actions without turning the screen into a threat letter.</p></div><div className="flex gap-3"><Button variant="danger">Delete</Button><Button variant="secondary">Cancel</Button></div></div></Card>
}
