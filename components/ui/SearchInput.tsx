import Input from './Input'

export default function SearchInput({ placeholder = 'Search projects, measures or reports...' }: { placeholder?: string }) {
  return <Input placeholder={placeholder} aria-label={placeholder} />
}
