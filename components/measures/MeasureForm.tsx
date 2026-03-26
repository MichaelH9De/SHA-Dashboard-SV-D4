import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'

export default function MeasureForm() {
  return (
    <Card className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-950">Create measure</h3>
      <Input placeholder="Measure name" />
      <div className="grid gap-4 md:grid-cols-2">
        <Select defaultValue="hours">
          <option value="hours">Hours</option>
          <option value="weeks">Weeks</option>
          <option value="people">People</option>
          <option value="sessions">Sessions</option>
          <option value="places">Places</option>
          <option value="gbp">GBP</option>
        </Select>
        <Input type="number" placeholder="Proxy value" />
      </div>
      <Textarea placeholder="Describe what qualifies for this measure and how it should be evidenced." />
      <Button>Save measure</Button>
    </Card>
  )
}
