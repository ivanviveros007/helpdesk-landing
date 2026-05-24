"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ForWho() {
  const { t } = useLanguage();
  const fw = t.forWho;

  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-500">
            {fw.eyebrow}
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            {fw.title}
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {fw.items.map((item, i) => (
            <div
              key={item.industry}
              className="grid gap-6 overflow-hidden rounded-2xl border border-slate-200 p-8 md:grid-cols-[1fr_1.5fr]"
            >
              {/* Left */}
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1">
                  <span className="font-mono text-xs font-bold text-indigo-500">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-xs font-semibold text-indigo-600">{item.industry}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-500">{item.scenario}</p>
              </div>

              {/* Right */}
              <div className="flex flex-col justify-between gap-4">
                <p className="text-sm leading-relaxed text-zinc-700">{item.value}</p>
                <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <p className="font-mono text-xs text-slate-500">{item.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
