import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          <User className="h-3.5 w-3.5" /> About
        </motion.div>
        <motion.h3 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-3xl sm:text-4xl font-semibold text-white">
          Full‑stack maker. Educator. Visual storyteller.
        </motion.h3>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-4 text-white/70">
          I design and build interactive content that helps developers learn faster and feel inspired. From zero‑to‑one product builds to high‑energy tutorials, my focus is clarity, momentum, and a touch of play.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25, duration: 0.6 }} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {[
            { title: 'Content Systems', text: 'Story‑driven scripts, visual metaphors, and dynamic edits.' },
            { title: 'Engineering', text: 'Frontend polish, backend pragmatism, AI-assisted workflows.' },
            { title: 'Teaching', text: 'Stepwise explanations, live coding, project‑based learning.' },
          ].map((b) => (
            <div key={b.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-white font-medium">{b.title}</div>
              <div className="mt-1 text-sm text-white/70">{b.text}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
