"use client";

import React, { createContext, useContext, useState } from "react";
import en from "@/messages/en";
import es from "@/messages/es";
import type { Messages } from "@/messages/en";

type Lang = "en" | "es";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Messages;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = lang === "en" ? en : es;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
