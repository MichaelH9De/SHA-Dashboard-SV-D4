import { getDashboardTotals } from '@/lib/calculations/dashboardTotals'
import { projectService } from '@/lib/services/projectService'

export function useDashboard() { const projects = projectService.list(); return { projects, summary: getDashboardTotals(projects) } }
