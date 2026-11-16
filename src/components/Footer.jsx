import { Code2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center">
            <Code2 size={14} className="text-white" />
          </div>
          <span className="font-display font-bold text-white text-sm">
            ADN<span className="text-blue-400">.</span>
          </span>
        </div>
        <p className="text-slate-600 text-xs text-center">
          © {year} ABAFASHIJWENIMANA Donatien. Built with React &amp; Tailwind CSS.
        </p>
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {["Home", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs text-slate-600 transition-colors hover:text-slate-400"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
