import { Code2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center">
            <Code2 size={14} className="text-white" />
          </div>
          <span className="font-display font-700 text-white text-sm">
            KV<span className="text-blue-400">.</span>
          </span>
        </div>
        <p className="text-slate-600 text-xs text-center">
          © {year} ABAFASHIJWENIMANA Donatien. Built with React & Tailwind CSS.
        </p>
        <div className="flex gap-4">
          {["Home", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-600 hover:text-slate-400 text-xs transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
