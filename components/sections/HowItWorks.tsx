"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();
  const h = t.howItWorks;

  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-500">
            {h.eyebrow}
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            {h.title}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-2">
          {h.steps.map((step, i) => {
            const isAiStep = i === 1;
            return (
              <div
                key={step.number}
                className={`rounded-2xl border p-7 ${
                  isAiStep
                    ? "border-indigo-200 bg-indigo-50 md:col-span-2"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className={`text-xs font-bold tabular-nums ${isAiStep ? "text-indigo-400" : "text-slate-400"}`}>
                    {step.number}
                  </span>
                  <h3 className={`text-lg font-semibold ${isAiStep ? "text-indigo-900" : "text-zinc-900"}`}>
                    {step.title}
                  </h3>
                </div>
                <p className={`leading-relaxed ${isAiStep ? "text-indigo-700/70" : "text-slate-500"}`}>
                  {step.desc}
                </p>

                {/* AI example — only for step 2 */}
                {isAiStep && (
                  <div className="mt-6 overflow-hidden rounded-xl border border-indigo-200 bg-white font-mono text-xs shadow-sm">
                    <div className="flex items-center gap-2 border-b border-indigo-100 bg-indigo-50/80 px-4 py-2.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="text-indigo-500 font-sans font-medium">{h.aiExample.label}</span>
                    </div>
                    <div className="p-4">
                      <table className="w-full">
                        <tbody>
                          {h.aiExample.fields.map((f) => (
                            <tr key={f.key}>
                              <td className="py-0.5 pr-4 text-indigo-400 font-semibold whitespace-nowrap">{f.key}</td>
                              <td className="py-0.5 text-slate-600">{f.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="mt-4 rounded-lg border border-slate-100 bg-slate-50 p-3">
                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400 font-sans">
                          reasoning
                        </p>
                        <p className="leading-relaxed text-slate-600 font-sans">
                          {h.aiExample.reasoning}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
