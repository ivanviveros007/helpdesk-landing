"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Problem() {
  const { t } = useLanguage();
  const p = t.problem;

  return (
    <section className="bg-zinc-950 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            {p.eyebrow}
          </p>
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {p.headline}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">{p.sub}</p>
        </div>

        {/* Before / After */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* BEFORE */}
          <div className="relative overflow-hidden rounded-2xl border border-red-500/15 bg-red-500/5 p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-semibold text-red-400">{p.before.label}</span>
              <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-400">❌</span>
            </div>
            <ul className="mb-8 space-y-3">
              {p.before.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-xs font-medium text-red-500">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-zinc-400">{step}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-red-500/15 pt-6">
              <p className="text-4xl font-bold text-red-400">{p.before.stat}</p>
              <p className="mt-1 text-sm text-zinc-500">{p.before.statLabel}</p>
            </div>
          </div>

          {/* AFTER */}
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/15 bg-emerald-500/5 p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-semibold text-emerald-400">{p.after.label}</span>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">✓</span>
            </div>
            <ul className="mb-8 space-y-3">
              {p.after.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-medium text-emerald-400">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-zinc-300">{step}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-emerald-500/15 pt-6">
              <p className="text-4xl font-bold text-emerald-400">{p.after.stat}</p>
              <p className="mt-1 text-sm text-zinc-500">{p.after.statLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
