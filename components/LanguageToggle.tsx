"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center gap-1 rounded-full border border-gray-200 p-1 text-sm">
      <button
        onClick={() => setLang("en")}
        className={`rounded-full px-3 py-1 transition-colors ${
          lang === "en"
            ? "bg-indigo-600 text-white"
            : "text-gray-500 hover:text-gray-800"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("es")}
        className={`rounded-full px-3 py-1 transition-colors ${
          lang === "es"
            ? "bg-indigo-600 text-white"
            : "text-gray-500 hover:text-gray-800"
        }`}
      >
        ES
      </button>
    </div>
  );
}
