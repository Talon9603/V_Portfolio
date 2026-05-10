import { projects } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
          Snapshot Log
        </p>

        <h2 className="mb-12 text-4xl font-bold">
          Featured Missions
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
