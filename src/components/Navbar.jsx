import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import logo from "../assets/logo.png";

const navLinks = ["home", "about", "services", "brands", "contacts"];

const sectionIds = {
  home: "hero",
  about: "about",
  services: "services",
  brands: "brands",
  contacts: "contacts",
};

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <img src={logo} alt="AquaLive" className="h-20" />
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((key) => (
              <a
                key={key}
                href={`#${sectionIds[key]}`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white/60 hover:text-slate-900"
              >
                {t.nav[key]}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white/60 px-3 py-1.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-white"
            >
              {lang === "en" ? "KG" : "EN"}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-white/60 md:hidden"
            >
              {open ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/30 px-4 pb-4 pt-2 md:hidden">
          {navLinks.map((key) => (
            <a
              key={key}
              href={`#${sectionIds[key]}`}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white/60"
            >
              {t.nav[key]}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
