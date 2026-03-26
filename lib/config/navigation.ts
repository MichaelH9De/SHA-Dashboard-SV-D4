// lib/config/navigation.ts
export interface NavigationItem {
  label: string
  href: string
}

export const navigation: NavigationItem[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Projects', href: '/projects' },
  { label: 'Frameworks', href: '/frameworks' },
  { label: 'Measures', href: '/measures' },
  { label: 'Evidence', href: '/evidence' },
  { label: 'Reports', href: '/reports' },
  { label: 'Settings', href: '/settings' },
]
