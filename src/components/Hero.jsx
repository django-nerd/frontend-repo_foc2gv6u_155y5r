import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 opacity-60">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open for collaborations and speaking
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Innovative storytelling for code, products, and ideas
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-6 max-w-xl text-base sm:text-lg text-white/70">
              I’m a content creator and tech educator with a full‑stack background. I build interactive learning experiences, cinematic dev videos, and delightful products.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="group inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-white/20 transition hover:shadow-lg hover:-translate-y-0.5">
                Explore work
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white/10 text-white px-4 py-2 text-sm font-medium ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15">
                Get in touch
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-8 grid grid-cols-3 gap-4 max-w-md text-white/70">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="text-xl font-semibold text-white">250k+</div>
                <div className="text-xs">Community</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="text-xl font-semibold text-white">120+</div>
                <div className="text-xs">Videos & Talks</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="text-xl font-semibold text-white">8yrs</div>
                <div className="text-xs">Building & Teaching</div>
              </div>
            </motion.div>
          </div>

          <div className="relative h-[480px] sm:h-[540px] lg:h-[640px] xl:h-[720px] rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
