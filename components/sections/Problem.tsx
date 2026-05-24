"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Problem() {
  const { t } = useLanguage();
  return (
    <section className="bg-gray-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-4 text-4xl font-extrabold">{t.problem.title}</h2>
        <p className="mb-16 text-lg text-gray-400">{t.problem.subtitle}</p>
        <div className="grid gap-8 md:grid-cols-3">
          {t.problem.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-800 bg-gray-900 p-8 text-left transition-transform hover:-translate-y-1"
            >
              <span className="mb-4 block text-4xl">{item.icon}</span>
              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
