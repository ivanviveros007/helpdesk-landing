"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Features() {
  const { t } = useLanguage();
  const f = t.features;

  return (
    <section className="bg-zinc-950 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            {f.eyebrow}
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            {f.title}
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {f.items.map((item) => (
            <div
              key={item.number}
              className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition-colors hover:border-indigo-500/30 hover:bg-zinc-900/80"
            >
              <div className="mb-5 flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <span className="shrink-0 rounded-lg bg-zinc-800 px-2 py-0.5 font-mono text-xs text-zinc-500 group-hover:text-indigo-400">
                  {item.number}
                </span>
              </div>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
              <div className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3">
                <p className="text-xs leading-relaxed text-zinc-500">{item.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
