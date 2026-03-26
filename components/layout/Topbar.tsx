import SearchInput from '@/components/ui/SearchInput'
import Button from '@/components/ui/Button'

export default function Topbar() {
  return <div className="flex flex-col gap-4 rounded-[32px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:flex-row md:items-center md:justify-between"><div className="max-w-xl flex-1"><SearchInput /></div><div className="flex gap-3"><Button variant="secondary">Import CSV</Button><Button>New report</Button></div></div>
}
