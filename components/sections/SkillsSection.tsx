const skills = [
  'Next.js',
  'TypeScript',
  'Python',
  'TensorFlow',
  'PostgreSQL',
  'Tailwind CSS',
  'Django',
  'Recharts'
]

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-surface/40 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
          Tools
        </p>

        <h2 className="mb-12 text-4xl font-bold">
          Systems & Technologies
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-full border border-accent/40 bg-background px-6 py-3 text-sm text-accent transition hover:scale-105 hover:border-accent"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
