import type { ReactNode } from 'react'

export default function Table({ head, body }: { head: ReactNode; body: ReactNode }) {
  return <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]"><table className="min-w-full divide-y divide-slate-200 text-left"><thead className="bg-slate-50">{head}</thead><tbody className="divide-y divide-slate-100">{body}</tbody></table></div>
}
