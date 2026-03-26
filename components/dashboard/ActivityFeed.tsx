import Card from '@/components/ui/Card'

const activities = [
  'Volunteer timesheet approved for Hawthorne Estate Retrofit.',
  'March client summary exported as PDF.',
  'Placement evidence requested for Rivergate Public Realm.',
  'New community donation action created under Rise Framework.',
]

export default function ActivityFeed() {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-slate-950">Activity feed</h3>
      <div className="mt-5 space-y-4">
        {activities.map((item, index) => (
          <div key={item} className="flex gap-3">
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" />
            <div>
              <p className="text-sm text-slate-700">{item}</p>
              <p className="mt-1 text-xs text-slate-500">{index + 1}h ago</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
