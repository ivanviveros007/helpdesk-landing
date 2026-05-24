"use client";

import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const { t } = useLanguage();
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-base font-semibold tracking-tight text-white">
          {t.nav.logo}
        </span>
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <a
            href="#beta"
            className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
