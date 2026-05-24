"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-950 px-6 pt-28 pb-0 text-center">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(99,102,241,0.12) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Badge */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-xs font-medium tracking-wide text-indigo-300">{h.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-5xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl">
          {h.headline}{" "}
          <span className="text-indigo-400">{h.headlineAccent}</span>
        </h1>

        {/* Sub */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          {h.sub}
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <a
            href="#beta"
            className="inline-block rounded-lg bg-indigo-500 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-indigo-500/25 transition-all hover:bg-indigo-400 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            {h.cta}
          </a>
          <p className="text-sm text-zinc-500">{h.ctaSub}</p>
        </div>
      </div>

      {/* App mockup */}
      <div className="relative z-10 mx-auto mt-16 w-full max-w-3xl">
        {/* Browser chrome */}
        <div className="overflow-hidden rounded-t-2xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/60">
          <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="ml-4 flex-1 rounded-md bg-zinc-800 px-3 py-1 text-left text-xs text-zinc-500">
              app.helpdesk.ai/admin/tickets
            </span>
          </div>

          {/* Dashboard content */}
          <div className="p-5">
            {/* Stats */}
            <div className="mb-5 grid grid-cols-3 gap-3">
              {h.mockStats.map((s, i) => (
                <div
                  key={s.label}
                  className={`rounded-xl border p-4 text-left ${
                    i === 0
                      ? "border-indigo-500/20 bg-indigo-500/10"
                      : i === 1
                      ? "border-emerald-500/20 bg-emerald-500/10"
                      : "border-zinc-700 bg-zinc-800/50"
                  }`}
                >
                  <p className={`text-2xl font-bold ${i === 0 ? "text-indigo-300" : i === 1 ? "text-emerald-300" : "text-zinc-200"}`}>
                    {s.value}
                  </p>
                  <p className="text-xs text-zinc-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Ticket rows */}
            <div className="space-y-2 mb-4">
              {h.mockTickets.map((ticket) => (
                <div
                  key={ticket.title}
                  className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-800/40 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    {ticket.hot && (
                      <span className="h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    )}
                    {!ticket.hot && (
                      <span className="h-2 w-2 shrink-0 rounded-full bg-zinc-700" />
                    )}
                    <span className="text-sm text-zinc-200">{ticket.title}</span>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    {ticket.badge}
                  </span>
                </div>
              ))}
            </div>

            {/* AI reasoning box */}
            <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 px-4 py-3">
              <div className="mb-2 flex items-center gap-2">
                <svg className="h-3.5 w-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.5l1.196 4.786A2.25 2.25 0 0121.796 21H2.204a2.25 2.25 0 01-2.2-1.714L1.2 15.5" />
                </svg>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">AI Reasoning</span>
              </div>
              <p className="text-xs leading-relaxed text-zinc-400">{h.mockReasoning}</p>
            </div>
          </div>
        </div>
        {/* Bottom fade */}
        <div className="h-24 bg-gradient-to-b from-transparent to-zinc-950" />
      </div>
    </section>
  );
}
