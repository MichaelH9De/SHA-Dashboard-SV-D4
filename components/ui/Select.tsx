import type { ReactNode, SelectHTMLAttributes } from 'react'

export default function Select({ children, className = '', ...props }: SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  return <select {...props} className={`w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400 ${className}`}>{children}</select>
}
