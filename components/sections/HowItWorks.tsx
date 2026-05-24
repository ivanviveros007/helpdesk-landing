"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-4 text-4xl font-extrabold text-gray-900">{t.howItWorks.title}</h2>
        <p className="mb-16 text-lg text-gray-500">{t.howItWorks.subtitle}</p>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-indigo-100 md:block" />

          <div className="grid gap-8 md:grid-cols-4">
            {t.howItWorks.steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-6 flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-indigo-100 bg-white shadow-lg shadow-indigo-100">
                  <span className="text-2xl font-extrabold text-indigo-600">{step.number}</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{step.desc}</p>
                {i < t.howItWorks.steps.length - 1 && (
                  <div className="mt-6 text-indigo-300 md:hidden">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
