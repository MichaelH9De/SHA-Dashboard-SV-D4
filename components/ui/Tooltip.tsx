export default function Tooltip({ label }: { label: string }) {
  return <span className="inline-flex rounded-full bg-slate-950 px-2 py-1 text-xs font-medium text-white">{label}</span>
}
