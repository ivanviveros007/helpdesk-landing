const en = {
  nav: {
    logo: "HelpDesk AI",
    cta: "Get Early Access",
  },
  hero: {
    badge: "AI-Powered · Now in Early Access",
    headline: "Every support ticket reaches the right technician",
    headlineAccent: "in seconds.",
    sub: "HelpDesk AI reads each incoming ticket, identifies the problem, and assigns the most qualified available technician automatically — no manual triage, no guesswork. Every ticket is then tracked through its full lifecycle, and if it goes silent for 48 hours, your team gets an automatic alert.",
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
    sub: "Without automated routing, every ticket needs someone to read it, decide who handles it, and manually assign it. That process takes time — time during which nothing is being resolved, and tickets quietly get buried.",
    before: {
      label: "Without HelpDesk AI",
      steps: [
        "Someone reads the ticket and tries to interpret the problem",
        "Tries to remember who handles that system or technology",
        "Checks Slack to see who's available right now",
        "Assigns manually — waits for acknowledgment",
        "A week later, the client follows up. The ticket was never started.",
      ],
      stat: "~14 min",
      statLabel: "average time to first assignment — if it gets assigned at all",
    },
    after: {
      label: "With HelpDesk AI",
      steps: [
        "Ticket received — client can attach screenshots or logs",
        "AI identifies category, priority and required skills",
        "Most qualified available technician selected automatically",
        "Technician notified in real time with full context",
        "If silent for 48h, automatic escalation alert is sent",
      ],
      stat: "< 10 sec",
      statLabel: "average time to assignment, every single ticket",
    },
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "From ticket to assignment in seconds",
    steps: [
      {
        number: "01",
        title: "Customer submits a ticket",
        desc: "Via your branded portal. They describe the issue in their own words and can attach screenshots, logs, or documents. No categories to pick, no form structure required.",
      },
      {
        number: "02",
        title: "AI reads, reasons, and assigns",
        desc: "The agent analyzes the content, determines category, priority and complexity, then picks the technician whose skills best fit the problem. It explains every decision in plain language.",
      },
      {
        number: "03",
        title: "Technician is notified instantly",
        desc: "The assigned technician receives a real-time alert with ticket details, attachments, and the AI's reasoning. No queue to check, no manual handoff — resolution starts immediately.",
      },
      {
        number: "04",
        title: "Ticket tracked to resolution",
        desc: "The ticket moves through a full lifecycle: Assigned → In Progress → Waiting on User → Resolved. If it stalls for 48 hours at any stage, your team gets an automatic alert. Nothing gets forgotten.",
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
    title: "Not just routing. Intelligent assignment — end to end.",
    items: [
      {
        number: "01",
        title: "Skill-based assignment",
        desc: "Each technician has a skill profile. The AI matches those skills to the nature of each problem — not just whoever happens to be free. Priority and current workload balance the final decision.",
        example: "Ana has PostgreSQL and backend → she gets the DB crash. Pedro has networking → he gets the VPN issue.",
      },
      {
        number: "02",
        title: "Transparent reasoning",
        desc: "Every assignment comes with a plain-language explanation of why that technician was chosen. No black boxes, no surprises. Your team can review every decision.",
        example: "\"Assigned to Ana M.: PostgreSQL skill match, complexity 8 fits level 2, lowest current load (2 active tickets vs. 5 for next candidate).\"",
      },
      {
        number: "03",
        title: "Full lifecycle tracking",
        desc: "Tickets move through a real workflow: Assigned → In Progress → Waiting on User → Resolved. If a ticket stalls for 48 hours at any stage, your team gets an automatic email alert.",
        example: "Tech clicks 'Waiting on user' → client gets notified. Client clicks 'Action done' → ticket moves back to In Progress automatically.",
      },
      {
        number: "04",
        title: "File attachments",
        desc: "Clients attach screenshots, error logs, and documents when submitting a ticket. Technicians see the full context without asking for it — diagnosis starts faster, fewer back-and-forths.",
        example: "Client attaches a screenshot of the error message and a log file → tech sees everything on first open, no follow-up needed.",
      },
      {
        number: "05",
        title: "Configurable per client",
        desc: "Write plain-English rules that override the AI for a specific company. Each client you serve can have its own routing logic, terminology, and escalation priorities.",
        example: "\"ABAP dumps in production = priority 10. Billing issues always escalate to Level 2.\"",
      },
      {
        number: "06",
        title: "Isolated per company",
        desc: "Each client gets a fully isolated workspace. Technicians, tickets, rules, and AI configuration never mix. Built from the ground up for consultancies and MSPs managing multiple clients.",
        example: "Serve a SAP firm, a Salesforce agency, and an SME from one platform. Their data never crosses.",
      },
    ],
  },
  forWho: {
    eyebrow: "Who it's for",
    title: "Built for teams with specialized support needs",
    items: [
      {
        industry: "IT Consultancies & MSPs",
        scenario: "You support multiple clients — each with their own SLAs, tech stacks, and escalation rules. Context-switching kills your team's efficiency.",
        value: "One platform, isolated workspaces per client. Configure the AI once per client and it routes correctly for all of them — the right technician, the right priority, every time.",
        example: "\"Server down — Acme Corp\"  →  right technician for that client in under 7 seconds",
      },
      {
        industry: "SAP & Salesforce Teams",
        scenario: "Your team handles complex specialized systems. A production ABAP dump is not the same urgency as a question about running a report — but without AI, both go to the same queue.",
        value: "Describe your domain rules in plain English once. The AI applies them consistently — at 3 AM, during peak load, even when your senior staff are unavailable.",
        example: "\"Short dump in VL02N — production\"  →  priority 9, ABAP specialist assigned",
      },
      {
        industry: "SMEs with Internal IT",
        scenario: "Three IT staff, 200 employees. When the CEO's laptop dies and 30 users lose internet at the same time, someone has to decide what comes first — fast.",
        value: "The AI prioritizes by real impact, not by who sends the ticket first. The right person gets the right problem automatically, and 48h alerts make sure nothing gets buried.",
        example: "\"No internet in main office\"  →  priority 9, network tech assigned — before anyone even asks",
      },
    ],
  },
  betaForm: {
    eyebrow: "Early Access",
    title: "Try it free with your team",
    subtitle: "We're onboarding a select group of teams during the beta. You get direct access to the founders, your feedback shapes the product, and you lock in early adopter pricing when we launch.",
    benefits: [
      "Free for the entire beta period — no credit card",
      "Full access to all features: AI routing, lifecycle tracking, file attachments",
      "Direct line to the founders — your feedback shapes the roadmap",
      "Early adopter pricing locked in at launch",
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
