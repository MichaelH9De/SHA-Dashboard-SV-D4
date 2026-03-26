import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
}

const variants = {
  primary: 'bg-slate-950 text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)] hover:-translate-y-0.5',
  secondary: 'bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50',
  ghost: 'bg-transparent text-slate-600 hover:bg-slate-100',
  danger: 'bg-rose-600 text-white hover:bg-rose-700',
}

export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  return <button className={`inline-flex items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-semibold transition duration-200 ${variants[variant]} ${className}`} {...props}>{children}</button>
}
