import { GitFork, Link2, Mail, ArrowDown, Download } from "lucide-react";

const techBadges = [
  "React", "Next.js", "Express", "Django", "Laravel",
  "JavaFX", "PyQt", "Tailwind", "Bootstrap"
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-violet-600/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-amber-500/8 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Left — text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-emerald-500/30 mb-6 opacity-0 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
            <span className="text-emerald-400 text-xs font-mono font-medium">
              Available for work
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-4xl font-800 leading-[1.05] mb-4 opacity-0 animate-fade-up animate-delay-100">
            <span className="text-white">ABAFASHIJWENIMANA</span>
            <br />
            <span className="text-gradient">Donatien</span>
          </h1>

          <p className="font-mono text-blue-400 text-sm md:text-base mb-5 opacity-0 animate-fade-up animate-delay-200">
            {"<"} Full-Stack Developer & Software Engineer {"/>"}
          </p>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-up animate-delay-300">
            I build robust, scalable software across the entire stack — from
            sleek React interfaces to powerful backend systems in Django,
            Laravel, Express, and desktop apps with JavaFX & PyQt.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10 opacity-0 animate-fade-up animate-delay-400">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all hover:-translate-y-0.5 glow-blue"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass text-slate-200 font-medium hover:text-white hover:border-white/20 transition-all hover:-translate-y-0.5"
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
        <div className="flex-1 flex justify-center lg:justify-end opacity-0 animate-fade-up animate-delay-300">
          <div className="relative">
            {/* Avatar ring */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-[2px] bg-gradient-to-br from-blue-500 via-violet-500 to-amber-400 animate-float glow-blue">
              <div className="w-full h-full rounded-full bg-navy-900 flex items-center justify-center text-7xl md:text-9xl font-display font-800 text-gradient">
                ADN
              </div>
            </div>

            {/* Floating tech badges */}
            <div className="absolute -top-4 -right-6 glass px-3 py-2 rounded-xl border border-white/10 text-xs font-mono text-blue-300 animate-float" style={{ animationDelay: "0.5s" }}>
              ⚡ React
            </div>
            <div className="absolute -bottom-4 -left-6 glass px-3 py-2 rounded-xl border border-white/10 text-xs font-mono text-amber-300 animate-float" style={{ animationDelay: "1s" }}>
              🐍 Django
            </div>
            <div className="absolute top-1/2 -right-12 glass px-3 py-2 rounded-xl border border-white/10 text-xs font-mono text-violet-300 animate-float" style={{ animationDelay: "1.5s" }}>
              ☕ Java
            </div>
          </div>
        </div>
      </div>

      {/* Tech strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 py-4 overflow-hidden">
        <div className="flex gap-6 animate-shimmer px-6">
          {[...techBadges, ...techBadges].map((t, i) => (
            <span key={i} className="text-xs font-mono text-slate-600 whitespace-nowrap shrink-0">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-blue-400 transition-colors animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
