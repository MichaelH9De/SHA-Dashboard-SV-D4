import { seedProjects } from '@/lib/data/seedProjects'
import ProjectCard from './ProjectCard'

export default function ProjectList() {
  return <div className="grid gap-4 xl:grid-cols-2">{seedProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
}
