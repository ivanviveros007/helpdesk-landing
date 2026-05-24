const en = {
  nav: {
    logo: "HelpDesk AI",
    cta: "Get Early Access",
  },
  hero: {
    badge: "Now in Early Access",
    headline: "Every support ticket reaches the right technician",
    headlineAccent: "automatically.",
    sub: "HelpDesk AI reads each incoming ticket, identifies the problem, and assigns the most qualified available technician in seconds — no manual triage, no guesswork, no delays.",
    cta: "Join the Waitlist",
    ctaSub: "Free during beta · No credit card required",
    mockStats: [
      { label: "Assigned today", value: "23" },
      { label: "Avg. assign time", value: "6s" },
      { label: "Resolved this week", value: "94%" },
    ],
    mockTickets: [
      { title: "PostgreSQL timeout — production", badge: "Assigned to Ana M. · 6s", hot: true },
      { title: "Salesforce flow not triggering on create", badge: "Assigned to Carlos R. · 5s", hot: false },
      { title: "VPN unreachable from main office", badge: "Assigned to Pedro L. · 4s", hot: false },
    ],
    mockReasoning: "Production database outage affecting all users. Assigning to Ana M.: PostgreSQL skill match, Level 2 clearance, lowest current load (2 active tickets).",
  },
  problem: {
    eyebrow: "The cost of manual triage",
    headline: "A critical error lands at 9:12 AM. Your manager is on lunch.",
    sub: "Without automated routing, every ticket needs someone to read it, decide who handles it, and manually assign it. That process takes time — time during which nothing is being resolved.",
    before: {
      label: "Without HelpDesk AI",
      steps: [
        "Someone reads the ticket and interprets the issue",
        "Tries to remember who handles that system",
        "Checks Slack to see who's available",
        "Assigns manually. Waits for acknowledgment.",
      ],
      stat: "~14 min",
      statLabel: "average time to assign",
    },
    after: {
      label: "With HelpDesk AI",
      steps: [
        "Ticket received",
        "AI identifies category, priority and required skills",
        "Most qualified available technician selected",
        "Assigned. Technician notified in real time.",
      ],
      stat: "< 10 sec",
      statLabel: "average time to assign",
    },
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "From ticket to assignment in seconds",
    steps: [
      {
        number: "01",
        title: "Customer submits a ticket",
        desc: "Via your branded portal. They describe the issue in their own words — no category to pick, no form structure required.",
      },
      {
        number: "02",
        title: "AI reads and reasons",
        desc: "The agent analyzes the content, determines category, priority and complexity, then picks the technician whose skills best fit the problem. It explains every decision.",
      },
      {
        number: "03",
        title: "Best technician assigned",
        desc: "From your team, the AI selects whoever has the right skills and the lowest current workload. It never routes a senior engineer to a password reset.",
      },
      {
        number: "04",
        title: "Instant real-time notification",
        desc: "The assigned technician receives an alert with ticket details and the AI's reasoning. No queue to check, no manual handoff — resolution starts immediately.",
      },
    ],
    aiExample: {
      label: "Live AI output",
      fields: [
        { key: "category", value: "database_error" },
        { key: "priority", value: "9 / 10" },
        { key: "complexity", value: "8 / 10" },
        { key: "assigned_to", value: "Ana M.  ·  PostgreSQL, backend" },
      ],
      reasoning: "Production PostgreSQL outage affecting all users. Requires backend specialist with database skills. Ana M. selected: skill match (PostgreSQL), Level 2 clearance, lowest workload — 2 active tickets vs. next candidate's 5.",
    },
  },
  features: {
    eyebrow: "What makes it different",
    title: "Not just routing. Intelligent matching.",
    items: [
      {
        number: "01",
        title: "Skill-based assignment",
        desc: "Each technician has a skill profile. The AI matches those skills to the nature of each problem — not just whoever happens to be free.",
        example: "Ana has PostgreSQL and backend → she gets the DB error. Pedro has networking → he gets the VPN issue.",
      },
      {
        number: "02",
        title: "Transparent reasoning",
        desc: "Every assignment comes with a plain-language explanation of why that technician was chosen. No black boxes, no surprises.",
        example: "\"Assigned to Ana M.: PostgreSQL skill match, complexity 8 fits level 2, lowest current load (2 active tickets).\"",
      },
      {
        number: "03",
        title: "Configurable per client",
        desc: "Write plain-English rules that override everything else. Each company you serve can have its own routing logic, terminology and priorities.",
        example: "\"ABAP dumps in production = priority 10. Billing issues always escalate to Level 2.\"",
      },
      {
        number: "04",
        title: "Isolated per company",
        desc: "Each client gets a fully isolated workspace. Technicians, tickets and rules never mix — built from the ground up for consultancies and MSPs.",
        example: "Serve a SAP firm, a Salesforce agency and an SME from one platform. Their data never crosses.",
      },
    ],
  },
  forWho: {
    eyebrow: "Who it's for",
    title: "Built for teams with specialized support needs",
    items: [
      {
        industry: "IT Consultancies & MSPs",
        scenario: "You provide support for multiple clients — each with their own SLAs, tech stacks, and escalation rules.",
        value: "One platform, isolated workspaces per client. Configure the AI once per client and it routes correctly for all of them — without your team having to context-switch.",
        example: "\"Server down — Acme Corp\"  →  the right technician for that client in 7 seconds",
      },
      {
        industry: "SAP & Salesforce Teams",
        scenario: "Your team handles complex specialized systems. A production ABAP dump is not the same urgency as a question about running a report.",
        value: "Describe your domain rules in plain English. The AI applies them consistently — at 3 AM, during peak load, even when your senior staff are unavailable.",
        example: "\"Short dump in VL02N — production\"  →  priority 9, ABAP specialist assigned",
      },
      {
        industry: "SMEs with IT Departments",
        scenario: "Three IT staff, 200 employees. When the CEO's laptop dies and 30 users lose internet at the same time, someone has to decide what comes first.",
        value: "The AI prioritizes by impact, not by who sends the ticket first. The right person gets the right problem — automatically, every time.",
        example: "\"No internet in main office\"  →  priority 9, network tech assigned",
      },
    ],
  },
  betaForm: {
    eyebrow: "Early Access",
    title: "Try it free with your team",
    subtitle: "We're onboarding a select group of teams during the beta. You get direct access to the founders and lock in early adopter pricing when we launch.",
    benefits: [
      "Free for the entire beta period",
      "Direct line to the founders",
      "Your feedback shapes the roadmap",
      "Early adopter pricing at launch",
    ],
    form: {
      name: "Full name",
      namePlaceholder: "Jane Smith",
      email: "Work email",
      emailPlaceholder: "jane@company.com",
      company: "Company (optional)",
      companyPlaceholder: "Acme Corp",
      message: "What's your biggest support challenge? (optional)",
      messagePlaceholder: "We handle 50+ tickets a day manually and...",
      submit: "Request Early Access",
      submitting: "Sending...",
      success: "You're on the list. We'll reach out within 48 hours.",
      error: "Something went wrong. Please try again.",
    },
  },
  footer: {
    tagline: "The right technician, every time.",
    rights: "© 2026 HelpDesk AI. All rights reserved.",
  },
};

export type Messages = typeof en;
export default en;
