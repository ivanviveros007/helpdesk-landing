"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type FormState = "idle" | "submitting" | "success" | "error";

export default function BetaForm() {
  const { t } = useLanguage();
  const b = t.betaForm;
  const f = b.form;

  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ name: "", email: "", company: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setFormState("success");
        setFields({ name: "", email: "", company: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  const inputCls =
    "w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30";

  return (
    <section id="beta" className="bg-zinc-950 px-6 py-28">
      {/* Subtle top border accent */}
      <div className="mx-auto mb-16 max-w-5xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">

          {/* Left: pitch */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-400">
              {b.eyebrow}
            </p>
            <h2 className="mb-5 text-4xl font-bold tracking-tight text-white">
              {b.title}
            </h2>
            <p className="mb-10 text-base leading-relaxed text-zinc-400">{b.subtitle}</p>
            <ul className="space-y-4">
              {b.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-400">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-sm text-zinc-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15">
                  <svg className="h-7 w-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-white">{f.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                      {f.name} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text" name="name" value={fields.name}
                      onChange={handleChange} placeholder={f.namePlaceholder}
                      required className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                      {f.email} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email" name="email" value={fields.email}
                      onChange={handleChange} placeholder={f.emailPlaceholder}
                      required className={inputCls}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-400">{f.company}</label>
                  <input
                    type="text" name="company" value={fields.company}
                    onChange={handleChange} placeholder={f.companyPlaceholder}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-400">{f.message}</label>
                  <textarea
                    name="message" value={fields.message}
                    onChange={handleChange} placeholder={f.messagePlaceholder}
                    rows={4}
                    className={`${inputCls} resize-none`}
                  />
                </div>
                {formState === "error" && (
                  <p className="text-sm text-red-400">{f.error}</p>
                )}
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full rounded-xl bg-indigo-500 py-3.5 text-sm font-semibold text-white transition-all hover:bg-indigo-400 disabled:opacity-50"
                >
                  {formState === "submitting" ? f.submitting : f.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
