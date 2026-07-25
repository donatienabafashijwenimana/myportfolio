import { ExternalLink, GitFork, ArrowRight } from "lucide-react";
import { projects } from "../data/portfolio";
import { SectionHeader } from "./Skills";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-violet-600/8 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="// portfolio"
          title="Featured Projects"
          subtitle="Real-world software built across multiple stacks and platforms."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
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
    <div className="glass rounded-2xl overflow-hidden group hover:border-white/15 transition-all duration-300 hover:-translate-y-2 flex flex-col">
      {/* Gradient header */}
      <div className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
        <span className="text-5xl">{project.icon}</span>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-navy-950/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-700 text-white text-lg mb-2">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-3 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-slate-500 hover:text-white text-xs font-medium transition-colors"
          >
            <GitFork size={14} />
            Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-500 hover:text-blue-400 text-xs font-medium transition-colors ml-auto"
            >
              Live Demo
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
