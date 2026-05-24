"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Features() {
  const { t } = useLanguage();
  return (
    <section className="bg-indigo-50 px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-4 text-4xl font-extrabold text-gray-900">{t.features.title}</h2>
        <p className="mb-16 text-lg text-gray-500">{t.features.subtitle}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-8 text-left shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="mb-4 block text-3xl">{feature.icon}</span>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
