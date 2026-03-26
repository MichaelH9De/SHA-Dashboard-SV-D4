export default function QuantityValue({ value, unit }: { value: number; unit?: string }) {
  return <span>{value}{unit ? ` ${unit}` : ''}</span>
}
