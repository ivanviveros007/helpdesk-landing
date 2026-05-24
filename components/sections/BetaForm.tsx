"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type FormState = "idle" | "submitting" | "success" | "error";

export default function BetaForm() {
  const { t } = useLanguage();
  const f = t.betaForm;

  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
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

  return (
    <section id="beta" className="bg-gradient-to-br from-indigo-600 to-purple-700 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: pitch */}
          <div className="text-white">
            <h2 className="mb-4 text-4xl font-extrabold">{f.title}</h2>
            <p className="mb-8 text-lg text-indigo-100">{f.subtitle}</p>
            <ul className="space-y-3">
              {f.benefits.map((b) => (
                <li key={b} className="text-indigo-100">
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl bg-white p-8 shadow-2xl">
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <span className="mb-4 text-5xl">🎉</span>
                <p className="text-lg font-semibold text-gray-800">{f.form.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    {f.form.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    placeholder={f.form.namePlaceholder}
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    {f.form.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    placeholder={f.form.emailPlaceholder}
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    {f.form.company}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={fields.company}
                    onChange={handleChange}
                    placeholder={f.form.companyPlaceholder}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    {f.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    placeholder={f.form.messagePlaceholder}
                    rows={4}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 resize-none"
                  />
                </div>
                {formState === "error" && (
                  <p className="text-sm text-red-600">{f.form.error}</p>
                )}
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full rounded-xl bg-indigo-600 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 disabled:opacity-60"
                >
                  {formState === "submitting" ? f.form.submitting : f.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
