"use client";

import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const { t } = useLanguage();
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-xl font-bold text-indigo-600">{t.nav.logo}</span>
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <a
            href="#beta"
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            {t.nav.joinBeta}
          </a>
        </div>
      </div>
    </nav>
  );
}
