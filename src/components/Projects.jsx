import { ExternalLink, GitFork, ArrowRight } from "lucide-react";
import { projects } from "../data/portfolio";
import { SectionHeader } from "./Skills";

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="absolute right-0 top-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-violet-600/10 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="// portfolio"
          title="Featured Projects"
          subtitle="Real-world software built across multiple stacks and platforms."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.github} project={project} />
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <a
            href="https://github.com/donatienabafashijwenimana"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-slate-300 hover:text-white font-medium transition-all hover:-translate-y-0.5 group"
          >
            View all on GitHub
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="glass rounded-2xl overflow-hidden group hover:border-white/15 transition-all duration-300 hover:-translate-y-2 flex flex-col">
      {/* Gradient header */}
      <div className={`relative flex h-24 sm:h-32 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}>
        <div className="absolute inset-0 bg-black/20" />
        <span className="relative z-10 rounded-xl border border-white/25 bg-black/25 px-3 py-1.5 font-mono text-xs sm:text-sm font-medium tracking-wide text-white backdrop-blur-sm">
          {project.icon}
        </span>
        {project.collaboration && (
          <span
            title={project.collaboration}
            className="absolute right-2 top-2 z-10 rounded-full border border-white/25 bg-black/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/85 backdrop-blur-sm"
          >
            Team
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-navy-950/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="mb-2 font-display text-base sm:text-lg font-bold leading-snug text-white break-words">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 font-mono text-[11px] sm:text-xs text-blue-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/5 pt-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-white"
          >
            <GitFork size={14} />
            Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="ml-auto flex items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-blue-400"
            >
              Live Demo
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
