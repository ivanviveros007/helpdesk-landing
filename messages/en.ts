const en = {
  nav: {
    logo: "HelpDesk AI",
    joinBeta: "Join Beta",
  },
  hero: {
    badge: "🚀 Now in Early Access",
    headline: "The AI-Powered Helpdesk for Modern Support Teams",
    subheadline:
      "Automatically route tickets to the right technician, reduce response times, and keep your team focused on what matters.",
    cta: "Get Early Access — It's Free",
    ctaSub: "No credit card required. Limited spots available.",
  },
  problem: {
    title: "Sound familiar?",
    subtitle: "Support teams waste hours every day on tasks AI can handle instantly.",
    items: [
      {
        icon: "📥",
        title: "Tickets pile up unassigned",
        desc: "Your team spends valuable time manually sorting and routing tickets instead of solving problems.",
      },
      {
        icon: "😩",
        title: "Technicians are overwhelmed",
        desc: "Wrong assignments, duplicate work, and unclear priorities drain morale and slow resolution times.",
      },
      {
        icon: "🔍",
        title: "No visibility into what's happening",
        desc: "Managers can't track ticket status, workload distribution, or team performance in real time.",
      },
    ],
  },
  howItWorks: {
    title: "How it works",
    subtitle: "From ticket creation to resolution — fully automated with AI.",
    steps: [
      {
        number: "01",
        title: "Customer submits a ticket",
        desc: "Via your branded portal. No setup required on their end.",
      },
      {
        number: "02",
        title: "AI analyzes the request",
        desc: "Our AI reads the ticket content, detects category, priority, and required skills.",
      },
      {
        number: "03",
        title: "Auto-assigned to the right technician",
        desc: "The best available technician receives the ticket instantly via real-time notification.",
      },
      {
        number: "04",
        title: "Resolved and tracked",
        desc: "Full audit trail, customer updates, and performance metrics — all in one place.",
      },
    ],
  },
  features: {
    title: "Everything your team needs",
    subtitle: "Built for support teams that want to move fast without breaking things.",
    items: [
      {
        icon: "🤖",
        title: "AI Ticket Routing",
        desc: "Gemini-powered analysis assigns tickets to the most suitable technician automatically.",
      },
      {
        icon: "🏢",
        title: "Multi-Tenant Ready",
        desc: "Each company gets their own isolated workspace. Perfect for MSPs and agencies.",
      },
      {
        icon: "⚡",
        title: "Real-Time Updates",
        desc: "WebSocket-powered notifications keep everyone in sync — no refreshing needed.",
      },
      {
        icon: "👥",
        title: "Role-Based Access",
        desc: "Super-admin, admin, technician, and customer roles — each with the right permissions.",
      },
      {
        icon: "📊",
        title: "Admin Dashboard",
        desc: "Track tickets by technician, status, and resolution time. Spot bottlenecks instantly.",
      },
      {
        icon: "✉️",
        title: "Invitation System",
        desc: "Invite customers and technicians via secure email links. No manual account setup.",
      },
    ],
  },
  forWho: {
    title: "Built for teams like yours",
    subtitle: "Whether you're a startup or an enterprise, HelpDesk AI scales with you.",
    items: [
      {
        icon: "💻",
        title: "SaaS Companies",
        desc: "Handle customer support at scale without hiring a large team.",
      },
      {
        icon: "🏗️",
        title: "IT Departments",
        desc: "Manage internal helpdesk requests efficiently across your organization.",
      },
      {
        icon: "🚀",
        title: "Agencies & MSPs",
        desc: "Serve multiple clients from a single platform with full data isolation.",
      },
      {
        icon: "🛍️",
        title: "E-commerce & Retail",
        desc: "Route order issues, returns, and inquiries to the right specialist instantly.",
      },
    ],
  },
  betaForm: {
    title: "Join the Early Access Program",
    subtitle:
      "We're onboarding a select group of teams to test HelpDesk AI for free. Share your feedback and shape the product.",
    benefits: [
      "✅ Free during the beta period",
      "✅ Direct access to the founders",
      "✅ Your feedback shapes the roadmap",
      "✅ Early adopter pricing when we launch",
    ],
    form: {
      name: "Full name",
      namePlaceholder: "Jane Smith",
      email: "Work email",
      emailPlaceholder: "jane@company.com",
      company: "Company name (optional)",
      companyPlaceholder: "Acme Corp",
      message: "What's your biggest support challenge? (optional)",
      messagePlaceholder: "We handle 200+ tickets a day and...",
      submit: "Request Early Access",
      submitting: "Sending...",
      success: "🎉 You're on the list! We'll be in touch shortly.",
      error: "Something went wrong. Please try again or email us directly.",
    },
  },
  footer: {
    tagline: "Smarter support, powered by AI.",
    rights: "© 2026 HelpDesk AI. All rights reserved.",
  },
};

export type Messages = typeof en;
export default en;
