import { GitFork, Link2, Mail, ArrowDown, Download, Code2, Network, Database, MonitorCog } from "lucide-react";

const techBadges = [
  "React", "Next.js", "Express", "Django", "Laravel",
  "JavaFX", "PyQt", "Tailwind", "Bootstrap"
];

/* Duplicated so the marquee track is always wider than the viewport and the
   loop has no visible gap. */
const marqueeItems = [...techBadges, ...techBadges, ...techBadges];

/* The four things the site actually offers, shown around the monogram so the
   hero summarises the whole page rather than just a couple of frameworks. */
const featureChips = [
  { icon: Code2, label: "Full-Stack", tone: "text-blue-300", position: "-top-2 -left-3", delay: "0.5s" },
  { icon: Network, label: "Networks", tone: "text-cyan-300", position: "-top-2 -right-3", delay: "1s" },
  { icon: Database, label: "Data", tone: "text-amber-300", position: "-bottom-2 -left-3", delay: "1.5s" },
  { icon: MonitorCog, label: "IT Support", tone: "text-violet-300", position: "-bottom-2 -right-3", delay: "2s" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-20"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(700px,140vw)] aspect-square rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-0 sm:right-10 w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-violet-600/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 sm:left-10 w-44 sm:w-56 h-44 sm:h-56 rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-stretch gap-12 px-4 pb-32 pt-16 sm:gap-16 sm:px-6 sm:pb-28 lg:flex-row lg:items-center lg:gap-12 lg:px-8">
        {/* Left — text */}
        <div className="w-full min-w-0 flex-1 text-center lg:text-left">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-emerald-500/30 mb-6 opacity-0 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
            <span className="text-emerald-400 text-xs font-mono font-medium">
              Available for work
            </span>
          </div>

          {/* The surname is 16 characters, so it is set as a tracked line above
              the display name instead of being allowed to break mid-word. */}
          <h1 className="mb-4 opacity-0 animate-fade-up animate-delay-100">
            <span className="mb-2 block font-display text-xs font-semibold uppercase tracking-[0.12em] text-slate-300 sm:mb-3 sm:text-sm sm:tracking-[0.18em] md:text-base">
              Abafashijwenimana
            </span>
            <span className="block font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-gradient sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem]">
              Donatien
            </span>
          </h1>

          <p className="font-mono text-blue-400 text-xs sm:text-sm md:text-base mb-5 opacity-0 animate-fade-up animate-delay-200">
            {"<"} Full-Stack Developer & Network Technician {"/>"}
          </p>

          <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-up animate-delay-300">
            I build robust, scalable software across the entire stack — from
            sleek React interfaces to powerful backend systems in Django,
            Laravel, Express, and desktop apps with JavaFX &amp; PyQt. As a
            network technician I also install, configure and troubleshoot the
            LANs and Wi-Fi those systems run on.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start mb-10 opacity-0 animate-fade-up animate-delay-400">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all hover:-translate-y-0.5 glow-blue"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass text-slate-200 font-medium hover:text-white hover:border-white/20 transition-all hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-3 justify-center lg:justify-start opacity-0 animate-fade-up animate-delay-500">
            {[
              { icon: GitFork, href: "#", label: "GitHub" },
              { icon: Link2, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all hover:-translate-y-0.5"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — visual card */}
        <div className="flex w-full shrink-0 justify-center opacity-0 animate-fade-up animate-delay-300 lg:w-80 lg:justify-end">
          <div className="relative">
            {/* Avatar ring */}
            <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full p-[2px] bg-gradient-to-br from-blue-500 via-violet-500 to-amber-400 animate-float glow-blue">
              <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-full bg-navy-950 bg-[radial-gradient(circle_at_50%_24%,#1c2b47_0%,#0a1120_72%)]">
                {/* Orbit rings + satellite dots */}
                <svg
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                >
                  <circle cx="100" cy="100" r="82" fill="none" stroke="#38bdf8" strokeOpacity="0.16" strokeDasharray="2 7" />
                  <circle cx="100" cy="100" r="64" fill="none" stroke="#a78bfa" strokeOpacity="0.12" strokeDasharray="2 9" />
                  <circle cx="100" cy="18" r="3" fill="#38bdf8" fillOpacity="0.85" />
                  <circle cx="157" cy="143" r="2.5" fill="#f59e0b" fillOpacity="0.85" />
                </svg>

                <span className="relative bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text font-display text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-[5.5rem]">
                  ADN
                </span>
                <span className="relative mt-1.5 font-mono text-[8px] uppercase tracking-[0.22em] text-slate-500 sm:text-[10px] sm:tracking-[0.28em]">
                  Software · Networks · IT
                </span>
              </div>
            </div>

            {/* Feature chips — one per discipline the site covers */}
            {featureChips.map(({ icon: Icon, label, tone, position, delay }) => (
              <div
                key={label}
                className={`absolute ${position} flex items-center gap-1.5 rounded-xl glass border border-white/10 px-2 py-1.5 font-mono text-[10px] animate-float sm:px-3 sm:py-2 sm:text-xs`}
                style={{ animationDelay: delay }}
              >
                <Icon size={12} className={tone} />
                <span className="text-slate-300">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-navy-950/70 backdrop-blur-sm py-3 sm:py-4 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 gap-6 pr-6" aria-hidden={copy === 1}>
              {marqueeItems.map((t, i) => (
                <span key={`${copy}-${i}`} className="text-xs font-mono text-slate-600 whitespace-nowrap shrink-0">
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#skills"
        aria-label="Scroll to skills"
        className="absolute bottom-20 left-1/2 hidden -translate-x-1/2 text-slate-600 transition-colors hover:text-blue-400 md:block"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
