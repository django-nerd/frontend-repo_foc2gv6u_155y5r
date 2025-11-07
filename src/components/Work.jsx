import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Interactive Dev Course',
    desc: 'A cinematic + hands-on course blending story arcs with real-world full‑stack projects.',
    tags: ['React', 'FastAPI', 'Framer'],
    cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'AI Storytelling Series',
    desc: 'Short-form episodes that teach complex concepts through narrative and visuals.',
    tags: ['LLMs', 'Prompting', 'Editing'],
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Open Source Toolkit',
    desc: 'Utilities for creators: caption pipelines, color grading presets, and more.',
    tags: ['OSS', 'CLI', 'Automation'],
    cover: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.2),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Selected Work</h2>
            <p className="mt-2 text-white/70 max-w-2xl">A mix of education, engineering, and storytelling. Crafted with a modern, playful touch.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-md bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/15 hover:bg-white/15">Start a project</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.cover} alt="Cover" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
              <div className="p-4">
                <div className="text-white font-medium">{p.title}</div>
                <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-md bg-white/10 px-2 py-1 text-xs text-white ring-1 ring-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
