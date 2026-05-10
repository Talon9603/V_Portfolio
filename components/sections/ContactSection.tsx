export default function ContactSection() {
  return (
    <section id="contact" className="bg-surface/40 px-6 py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
          Contact the Agency
        </p>

        <h2 className="mb-6 text-5xl font-black">
          Let’s Build Something Cinematic
        </h2>

        <p className="mb-10 text-lg text-white/70">
          Open to software engineering, data science, and creative technology opportunities.
        </p>

        <a
          href="mailto:your@email.com"
          className="glow inline-flex rounded-full border border-accent bg-accent px-8 py-4 font-semibold text-black transition hover:scale-105"
        >
          Transmit Message
        </a>
      </div>
    </section>
  )
}
