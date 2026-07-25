import { useEffect, useRef, useState } from "react";
import { skills } from "../data/portfolio";

function SkillBar({ name, level, delay }) {
  const [width, setWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs font-mono text-blue-400">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block font-mono text-blue-400 text-sm tracking-widest uppercase mb-3">
        {label}
      </span>
      <h2 className="font-display text-4xl md:text-5xl font-700 text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

export { SectionHeader };

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="// expertise"
          title="Technical Skills"
          subtitle="A polyglot developer comfortable across languages, frameworks, and platforms — from browser to desktop."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className="glass rounded-2xl p-6 hover:border-blue-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-display font-600 text-white text-lg">
                  {group.category}
                </h3>
              </div>
              {group.items.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={(gi * 100) + (i * 80)}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { value: "5+", label: "Languages" },
            { value: "10+", label: "Frameworks" },
            { value: "20+", label: "Projects Built" },
            { value: "3+", label: "Years Experience" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-5 text-center hover:border-blue-500/20 transition-all"
            >
              <div className="font-display text-3xl font-800 text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
