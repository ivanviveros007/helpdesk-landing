"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ForWho() {
  const { t } = useLanguage();
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-4 text-4xl font-extrabold text-gray-900">{t.forWho.title}</h2>
        <p className="mb-16 text-lg text-gray-500">{t.forWho.subtitle}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.forWho.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 p-6 text-center transition-all hover:border-indigo-200 hover:bg-indigo-50"
            >
              <span className="mb-3 block text-4xl">{item.icon}</span>
              <h3 className="mb-2 font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
