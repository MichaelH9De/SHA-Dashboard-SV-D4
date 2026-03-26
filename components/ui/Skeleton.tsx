export default function Skeleton({ className = 'h-6 w-full' }: { className?: string }) {
  return <div className={`animate-pulse rounded-2xl bg-slate-100 ${className}`} />
}
