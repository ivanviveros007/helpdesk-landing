"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-950 px-6 py-12 text-center text-gray-500">
      <p className="mb-2 text-lg font-semibold text-gray-300">{t.nav.logo}</p>
      <p className="mb-4 text-sm">{t.footer.tagline}</p>
      <p className="text-xs">{t.footer.rights}</p>
    </footer>
  );
}
