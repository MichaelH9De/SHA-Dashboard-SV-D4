export default function NoDataMessage({ message = 'No records available yet.' }: { message?: string }) {
  return <p className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-500">{message}</p>
}
