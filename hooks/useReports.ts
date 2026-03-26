import { reportService } from '@/lib/services/reportService'

export function useReports() { return { reports: reportService.list() } }
