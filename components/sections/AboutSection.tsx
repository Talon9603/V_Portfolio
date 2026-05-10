export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
            The Agent
          </p>

          <h2 className="mb-6 text-4xl font-bold">
            Building intelligent systems through immersive storytelling.
          </h2>
        </div>

        <div className="space-y-4 text-white/70">
          <p>
            I create full-stack applications, data visualizations, and machine learning systems with a focus on cinematic user experiences.
          </p>

          <p>
            My work combines modern frontend engineering with scalable backend systems and data-driven insights.
          </p>
        </div>
      </div>
    </section>
  )
}
