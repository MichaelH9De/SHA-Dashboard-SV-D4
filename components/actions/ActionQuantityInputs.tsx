import Input from '@/components/ui/Input'

export default function ActionQuantityInputs() {
  return <div className="grid gap-4 md:grid-cols-2"><Input type="number" placeholder="Target quantity" /><Input type="number" placeholder="Achieved quantity" /></div>
}
