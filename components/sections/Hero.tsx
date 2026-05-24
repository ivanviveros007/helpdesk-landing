"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 pt-24 text-center">
      {/* Background decorative blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-100 opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-100 opacity-30 blur-3xl" />

      <div className="relative z-10 max-w-4xl">
        <span className="mb-6 inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
          {t.hero.badge}
        </span>
        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
          {t.hero.headline}
        </h1>
        <p className="mb-10 text-xl leading-relaxed text-gray-600 md:text-2xl">
          {t.hero.subheadline}
        </p>
        <a
          href="#beta"
          className="inline-block rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5"
        >
          {t.hero.cta}
        </a>
        <p className="mt-4 text-sm text-gray-400">{t.hero.ctaSub}</p>

        {/* Mock UI preview */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200">
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-4 text-xs text-gray-400">helpdesk.ai/dashboard</span>
          </div>
          <div className="grid grid-cols-3 gap-3 bg-white p-6 text-left">
            {[
              { label: "Open Tickets", value: "24", color: "bg-blue-50 text-blue-700" },
              { label: "AI Assigned Today", value: "18", color: "bg-green-50 text-green-700" },
              { label: "Avg. Response", value: "4m", color: "bg-purple-50 text-purple-700" },
            ].map((stat) => (
              <div key={stat.label} className={`rounded-xl p-4 ${stat.color}`}>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs font-medium opacity-80">{stat.label}</p>
              </div>
            ))}
            <div className="col-span-3 space-y-2">
              {[
                { title: "Login issue — production", tech: "Carlos R.", status: "AI Assigned", color: "bg-green-100 text-green-700" },
                { title: "Cannot export CSV report", tech: "Ana M.", status: "In Progress", color: "bg-blue-100 text-blue-700" },
                { title: "Billing question Q3", tech: "Pedro L.", status: "AI Assigned", color: "bg-green-100 text-green-700" },
              ].map((ticket) => (
                <div key={ticket.title} className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3">
                  <span className="text-sm font-medium text-gray-700">{ticket.title}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400">{ticket.tech}</span>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${ticket.color}`}>{ticket.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
