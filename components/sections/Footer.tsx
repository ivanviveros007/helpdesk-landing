"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center md:flex-row md:justify-between">
        <span className="text-sm font-semibold text-zinc-400">{t.nav.logo}</span>
        <p className="text-sm text-zinc-600">{t.footer.tagline}</p>
        <p className="text-xs text-zinc-700">{t.footer.rights}</p>
      </div>
    </footer>
  );
}
