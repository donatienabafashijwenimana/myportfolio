import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { navLinks } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href.replace("#", ""));
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/10 py-2.5 sm:py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
            <Code2 size={18} className="text-white" />
          </div>
          <span className="font-display font-bold text-white text-lg tracking-tight">
            ADN<span className="text-blue-400">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleNav(link.href)}
                className={`px-3 py-2 lg:px-4 rounded-lg font-sans text-sm font-medium transition-all duration-200 ${
                  active === link.href.replace("#", "")
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 hover:text-white md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden glass overflow-hidden border-t border-white/10 transition-all duration-300 ${
          open
            ? "max-h-[calc(100svh-4rem)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <ul className="px-4 py-4 sm:px-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleNav(link.href)}
                className="block px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#contact"
              onClick={() => handleNav("#contact")}
              className="block px-4 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium text-center"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
