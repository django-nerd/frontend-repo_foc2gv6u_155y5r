import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h3 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-semibold text-white">
          Let’s build something memorable
        </motion.h3>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-3 text-white/70">
          Book me for collaborations, courses, talks, or product launches. I respond in 24–48h.
        </motion.p>

        <motion.form initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.6 }} className="mt-8 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required placeholder="Name" className="w-full rounded-md bg-white/5 px-4 py-2 text-white placeholder-white/50 ring-1 ring-white/10 focus:ring-2 focus:ring-white/30 outline-none" />
            <input required type="email" placeholder="Email" className="w-full rounded-md bg-white/5 px-4 py-2 text-white placeholder-white/50 ring-1 ring-white/10 focus:ring-2 focus:ring-white/30 outline-none" />
          </div>
          <input placeholder="Subject" className="w-full rounded-md bg-white/5 px-4 py-2 text-white placeholder-white/50 ring-1 ring-white/10 focus:ring-2 focus:ring-white/30 outline-none" />
          <textarea required rows={5} placeholder="Tell me about your project" className="w-full rounded-md bg-white/5 px-4 py-3 text-white placeholder-white/50 ring-1 ring-white/10 focus:ring-2 focus:ring-white/30 outline-none" />
          <div className="flex items-center justify-center">
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-2.5 text-sm font-medium shadow-sm ring-1 ring-white/20 transition hover:shadow-lg hover:-translate-y-0.5">
              Send message
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </button>
          </div>
        </motion.form>

        <div className="mt-8 text-sm text-white/60">Prefer email? hello@creator.dev</div>
      </div>
    </section>
  );
}
