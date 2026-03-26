import type { Report } from '@/types'

export const demoReports: Report[] = [
  {
    id: 'report-q1-2026',
    name: 'Q1 2026 Executive Summary',
    summary: 'Aggregate outcomes across live projects with a focus on employment and local spend.',
    period: 'Jan - Mar 2026',
    status: 'published',
    createdAt: '2026-03-22',
  },
  {
    id: 'report-toms-north',
    name: 'National TOMs Delivery Snapshot',
    summary: 'Performance against TOMs outcomes for North West projects.',
    period: 'Feb 2026',
    status: 'in-review',
    createdAt: '2026-03-01',
  },
  {
    id: 'report-rise-pipeline',
    name: 'Rise Framework Pipeline',
    summary: 'Upcoming project pipeline and expected social value delivery.',
    period: 'Apr - Jun 2026',
    status: 'draft',
    createdAt: '2026-03-18',
  },
  {
    id: 'report-wellbeing',
    name: 'Wellbeing Accelerator Update',
    summary: 'Health and wellbeing sessions delivered with partner engagement insights.',
    period: 'Jan - Feb 2026',
    status: 'published',
    createdAt: '2026-02-28',
  },
  {
    id: 'report-retrofit',
    name: 'Retrofit & Biodiversity Impact',
    summary: 'Environmental performance across retrofit and habitat initiatives.',
    period: 'Mar 2026',
    status: 'in-review',
    createdAt: '2026-03-20',
  },
  {
    id: 'report-community',
    name: 'Community Investment Tracker',
    summary: 'Grants, volunteering and digital inclusion outcomes by project.',
    period: 'Q4 2025 - Q1 2026',
    status: 'published',
    createdAt: '2026-03-15',
  },
]

export const reportService = {
  list: () => demoReports,
  getById: (id: string) => demoReports.find((report) => report.id === id),
}
