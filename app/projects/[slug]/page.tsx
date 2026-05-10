import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-32">
      <img
        src={project.image}
        alt={project.title}
        className="mb-10 h-[400px] w-full rounded-3xl object-cover"
      />

      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
        Mission Archive
      </p>

      <h1 className="mb-6 text-5xl font-black">
        {project.title}
      </h1>

      <p className="mb-10 text-lg text-white/70">
        {project.description}
      </p>

      <div className="space-y-8 text-white/70">
        <div>
          <h2 className="mb-3 text-2xl font-bold text-white">
            Objective
          </h2>

          <p>
            Develop a scalable and immersive application experience with cinematic storytelling and modern engineering practices.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-bold text-white">
            Technologies
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-accent/30 px-4 py-2 text-sm text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
