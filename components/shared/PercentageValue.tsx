export default function PercentageValue({ value }: { value: number }) {
  return <span>{Math.round(value)}%</span>
}
