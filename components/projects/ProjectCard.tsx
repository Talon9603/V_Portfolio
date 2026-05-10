import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  slug: string
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  slug
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-surface transition hover:border-accent/50"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mb-5 text-white/70">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-accent/30 px-3 py-1 text-xs text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
