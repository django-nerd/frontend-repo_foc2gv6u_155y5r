import { useState } from 'react';
import { Rocket, Github, Twitter, Youtube, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400">
              <Rocket className="h-4 w-4 text-black" />
            </span>
            <span className="font-semibold tracking-tight">Creator.Dev</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <div className="flex items-center gap-3">
              <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><Github className="h-5 w-5" /></a>
              <a aria-label="Twitter" href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><Twitter className="h-5 w-5" /></a>
              <a aria-label="YouTube" href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><Youtube className="h-5 w-5" /></a>
            </div>
          </nav>

          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden text-white/90">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 text-white/90">
            <div className="flex flex-col gap-4">
              <a onClick={() => setOpen(false)} href="#work" className="hover:text-white transition">Work</a>
              <a onClick={() => setOpen(false)} href="#about" className="hover:text-white transition">About</a>
              <a onClick={() => setOpen(false)} href="#contact" className="hover:text-white transition">Contact</a>
              <div className="flex items-center gap-4 pt-2">
                <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><Github className="h-5 w-5" /></a>
                <a aria-label="Twitter" href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><Twitter className="h-5 w-5" /></a>
                <a aria-label="YouTube" href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><Youtube className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
