import { reportService } from '@/lib/services/reportService'

export function getReportStore() { return { reports: reportService.list() } }
