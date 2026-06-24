/**
 * Single source of truth for all MindstormX website copy & data.
 * Derived from "MindstormX_profile_Roadmap 2026.pdf".
 * Icons are referenced by string key and resolved via components/ui/Icon.tsx.
 */

export type IconName = string;

export const site = {
  name: "MindstormX",
  legalName: "MindstormX Technologies Sdn Bhd",
  shortName: "MindstormX Technologies",
  tagline: "Building Digital Ecosystems for Everyday Life.",
  positioning: "Building Intelligent Digital Ecosystems for a Better Future",
  description:
    "MindstormX Technologies is a Johor-based technology venture building subscription-driven, transaction-enabled digital platforms for Malaysia's everyday economy — across healthcare, commerce, welfare and property.",
  email: "contact@mindstormx.com",
  web: "www.mindstormx.com",
  hq: "Johor, Malaysia",
  year: 2026,
  values: ["Innovation", "Integrity", "Collaboration", "Excellence"],
  attributes: ["Scalable", "Versatile", "Modern", "Memorable", "Future-Ready"],
} as const;

export const nav = {
  links: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Solutions", href: "/solutions" },
    { label: "Roadmap", href: "/roadmap" },
  ],
  cta: { label: "Contact Us", href: "/contact" },
} as const;

export const hero = {
  eyebrow: "Corporate Profile & Strategic Roadmap",
  titleLead: "Building Intelligent",
  titleHighlight: "Digital Ecosystems",
  titleTrail: "for a Better Future.",
  subtitle:
    "MindstormX Technologies delivers AI-powered platforms that empower communities, businesses and governments to innovate, transform and grow sustainably — bridging Malaysia's digital ambitions with everyday commercial reality.",
  primaryCta: { label: "Explore Solutions", href: "/solutions" },
  secondaryCta: { label: "About MindstormX", href: "/about" },
} as const;

export const stats = [
  { value: "100,000+", label: "Lives Impacted", icon: "Users" },
  { value: "50+", label: "Government & Enterprise Clients", icon: "Building2" },
  { value: "4", label: "Flagship Platforms", icon: "Boxes" },
  { value: "10M+", label: "Data Transactions Processed", icon: "Database" },
] as const;

export const trustedBy = {
  heading: "Trusted by governments and leading organizations",
  orgs: [
    "Kementerian Pendidikan Malaysia",
    "MAMPU",
    "MDEC",
    "INSKEN",
    "Malaysia MADANI",
    "MyDIGITAL",
  ],
} as const;

/** Slide 2 — Bridging Malaysia's digital ambitions with everyday reality. */
export const macro = {
  eyebrow: "The Thesis",
  title: "Bridging Malaysia's Digital Ambitions with Everyday Commercial Reality.",
  pillars: [
    {
      icon: "Globe",
      title: "The Macro Opportunity",
      points: [
        "19% Southeast Asia digital economy surge.",
        "22.6% GDP contribution target mandated by MyDIGITAL.",
      ],
    },
    {
      icon: "Boxes",
      title: "The Structural Solution",
      points: [
        "A Johor-based technology venture.",
        "Architecting connective tissue for fragmented offline industries.",
        "Four vertically integrated, mass-market platforms.",
      ],
    },
    {
      icon: "TrendingUp",
      title: "The Economic Model",
      points: [
        "Mass-market adoption via high-frequency daily utility.",
        "High-margin recurring subscription revenue baselines.",
        "Future-ready enterprise AI and workflow automation.",
      ],
    },
  ],
} as const;

/** Slide 3 — Massively funded digital transformation. */
export const marketStats = {
  eyebrow: "Market Context",
  title: "Malaysia is Undergoing a Massively Funded Digital Transformation.",
  stats: [
    {
      value: "19%",
      detail: "Southeast Asia's current digital economy surge, leading regional growth.",
    },
    {
      value: "22.6%",
      detail: "Government target for digital economy contribution to Malaysia's GDP by 2025.",
    },
    {
      value: "86.4%",
      detail: "Organizations actively integrating digital platforms into operations by 2027.",
    },
    {
      value: "$2.2B",
      detail: "Recent infrastructure investment by Microsoft to fuel Malaysia's cloud and AI shift.",
    },
  ],
  footnote:
    "Capital is flowing into digital infrastructure at unprecedented rates, shifting economic activity toward hyper-connected ecosystems.",
} as const;

/** Slide 4 — The friction point. */
export const friction = {
  eyebrow: "The Problem",
  title: "The Friction Point: Ambition Outpaces Infrastructure.",
  demand: {
    title: "The Macro Demand",
    points: [
      "85% of organizations recognize a universal mandate for rapid tech adoption.",
      "Urgent drive to digitize commerce and foundational healthcare.",
    ],
  },
  reality: {
    title: "The Operational Reality",
    figure: 13,
    detail: "Only 13% of Malaysian companies are currently fully AI-ready and technologically equipped.",
  },
  conclusion:
    "Despite billions in macro investment, everyday community services — from local commerce to welfare and property — remain highly fragmented, offline-heavy, and operationally inefficient.",
} as const;

/** Slides 5 & 6 — The four everyday platforms. */
export type Platform = {
  slug: string;
  name: string;
  domain: string;
  tagline: string;
  description: string;
  icon: IconName;
  frequency: string;
  features: string[];
};

export const platforms: Platform[] = [
  {
    slug: "doktor-plus",
    name: "doktor+",
    domain: "Community Healthcare Access",
    tagline: "Digital Health Subscription Ecosystem",
    description:
      "Accessibility, continuity, and affordability via digital-first memberships — democratizing community healthcare across Malaysia.",
    icon: "Stethoscope",
    frequency: "Recurring subscription",
    features: [
      "Digital-first health memberships",
      "Continuity of care & records",
      "Affordable, accessible primary care",
      "Telehealth & appointment coordination",
    ],
  },
  {
    slug: "pasar-plus",
    name: "pasar+",
    domain: "Grocery & Hyperlocal Commerce",
    tagline: "Grocery & Community Commerce Platform",
    description:
      "Hyperlocal commerce and daily transaction frequency — turnkey digital storefronts for offline-heavy local businesses.",
    icon: "ShoppingBasket",
    frequency: "High-frequency daily",
    features: [
      "Hyperlocal marketplace & storefronts",
      "Daily high-frequency transactions",
      "Vendor onboarding & featured listings",
      "Local advertising & promotions",
    ],
  },
  {
    slug: "khairat-plus",
    name: "khairat+",
    domain: "Funeral & Welfare Management",
    tagline: "Funeral Assistance & Community Benefits",
    description:
      "Modernizing traditional community welfare management — digitizing khairat schemes and grassroots welfare for the next generation.",
    icon: "HandHeart",
    frequency: "Lifecycle events",
    features: [
      "Digital welfare & khairat schemes",
      "Member contributions & claims",
      "Community benefits management",
      "Transparent fund administration",
    ],
  },
  {
    slug: "reno-plus",
    name: "reno+",
    domain: "Home Renovation Coordination",
    tagline: "Home & Building Renovation Ecosystem",
    description:
      "High-value contractor coordination and property ecosystems — connecting homeowners, contractors and suppliers in one trusted platform.",
    icon: "Hammer",
    frequency: "High-value lifecycle",
    features: [
      "Contractor coordination & matching",
      "Project & milestone tracking",
      "Property & building ecosystems",
      "High-value transaction management",
    ],
  },
];

export const platformsSection = {
  eyebrow: "The Platforms",
  title: "A Vertically Integrated Suite of Everyday Platforms.",
  subtitle:
    "Four mass-market platforms mapped across Economic Impact and Frequency of Use — engineered for Malaysian market behaviors.",
} as const;

/** Slide 7 — Multi-ecosystem advantage / network effects flywheel. */
export const ecosystem = {
  eyebrow: "Network Effects at Scale",
  title: "The Multi-Ecosystem Advantage.",
  subtitle:
    "Interconnected ecosystems generate proprietary data synergies that single-industry startups cannot replicate.",
  steps: [
    {
      step: 1,
      icon: "UserPlus",
      title: "Acquisition",
      detail: "High-frequency daily interactions (pasar+) acquire localized users at low cost.",
    },
    {
      step: 2,
      icon: "ShieldCheck",
      title: "Trust & Subscription",
      detail: "Seamless ecosystem login transitions users into high-trust subscription environments (doktor+).",
    },
    {
      step: 3,
      icon: "CalendarClock",
      title: "Life-Cycle Capture",
      detail: "Ecosystem captures high-value, lower-frequency lifecycle events (reno+, khairat+).",
    },
    {
      step: 4,
      icon: "BrainCircuit",
      title: "Data Intelligence",
      detail: "Aggregated behavioral data trains platform AI, driving operational intelligence and personalized recommendations.",
    },
  ],
} as const;

/** Slide 8 — Enterprise-grade engineering powered by applied AI. */
export const technology = {
  eyebrow: "Engineering",
  title: "Enterprise-Grade Engineering Powered by Applied AI.",
  subtitle:
    "A layered, cloud-native architecture with cybersecurity positioned as the epicenter for transformation.",
  layers: [
    {
      icon: "Cpu",
      title: "Intelligent Automation",
      detail: "Applied AI models embedded across every platform.",
      features: ["AI Customer Assistants", "Predictive Analytics", "Smart Workflow Automation", "Intelligent Operational Dashboards"],
    },
    {
      icon: "Cloud",
      title: "Cloud & Big Data Architecture",
      detail: "Highly scalable databases managing millions of high-frequency community transactions and robust API integrations.",
      features: ["Millions of transactions", "Robust API integrations", "Elastic scalability"],
    },
    {
      icon: "ShieldCheck",
      title: "Cyber-Resilience Engine",
      detail: "Data security, privacy controls, and public-sector resilience — cybersecurity positioned as an epicenter for transformation.",
      features: ["Data security & privacy", "Public-sector resilience", "Compliance-ready controls"],
    },
  ],
} as const;

/** Slide 9 — Stratified monetization architecture (pyramid, base → apex). */
export const monetization = {
  eyebrow: "Business Model",
  title: "Stratified Monetization Architecture.",
  subtitle: "A deliberate shift from volume to high-margin scalability.",
  // Ordered base (broad volume) -> apex (high margin)
  tiers: [
    {
      icon: "Receipt",
      title: "Transaction Revenue",
      detail: "Platform commissions and processing volume fees.",
    },
    {
      icon: "Store",
      title: "Marketplace Monetization",
      detail: "Vendor onboarding, featured listings, and local advertising.",
    },
    {
      icon: "Briefcase",
      title: "Enterprise & Institutional",
      detail: "B2B and organizational licensing opportunities.",
    },
    {
      icon: "BadgeCheck",
      title: "Subscription Revenue",
      detail: "Recurring monthly / annual high-margin memberships.",
    },
    {
      icon: "Sparkles",
      title: "Future AI Services",
      detail: "Premium automation, predictive modeling, and intelligent analytics.",
    },
  ],
} as const;

/** Slide 10 — Strategic alignment with national digital agendas. */
export const nationalAlignment = {
  eyebrow: "Public-Private Synergy",
  title: "Strategic Alignment with National Digital Agendas.",
  subtitle:
    "MindstormX is purpose-built to advance Malaysia's flagship digital and AI mandates.",
  rows: [
    {
      agenda: "Malaysia Digital Economy Blueprint (MyDIGITAL)",
      agendaDetail: "Digitize 875,000 MSMEs and foster inclusive socioeconomic growth.",
      solution: "Provides turnkey digital storefronts (pasar+, reno+) to offline-heavy local businesses and contractors.",
    },
    {
      agenda: "National AI Office (NAIO) Mandate",
      agendaDetail: "Drive applied AI into practical, everyday economic sectors.",
      solution: "Integrates smart workflow automation and predictive analytics into grassroots community services.",
    },
    {
      agenda: "RMKe-12 (Twelfth Malaysia Plan)",
      agendaDetail: "Eradicate the digital divide and elevate living standards.",
      solution: "Democratizes healthcare access (doktor+) and digital welfare (khairat+) via accessible subscription models.",
    },
  ],
} as const;

/** Slide 11 — Core structural defensibilities. */
export const defensibilities = {
  eyebrow: "Why We Win",
  title: "Core Structural Defensibilities.",
  items: [
    {
      icon: "MapPin",
      title: "Localized Positioning",
      detail: "Platforms are engineered specifically around Malaysian market behaviors, bypassing friction faced by generic, imported tech solutions.",
    },
    {
      icon: "Link2",
      title: "Multi-Ecosystem Lock-In",
      detail: "Shared infrastructure across healthcare, commerce, and property creates high switching costs for both users and vendors.",
    },
    {
      icon: "LineChart",
      title: "Predictable Economics",
      detail: "A subscription-first baseline creates sustainable, long-term cash flow and robust operational stability.",
    },
    {
      icon: "Share2",
      title: "Replicable Architecture",
      detail: "The underlying codebase and ecosystem mechanics are fundamentally designed to scale efficiently into fragmented ASEAN markets.",
    },
  ],
} as const;

/** Slide 12 — Strategic expansion roadmap 2026–2030. */
export const roadmap = {
  eyebrow: "2026 – 2030",
  title: "Strategic Expansion Roadmap.",
  subtitle:
    "A staged path from validating core ecosystems in Johor to scaling the architecture across ASEAN.",
  phases: [
    {
      phase: "Phase 1",
      window: "2026 – 2027",
      icon: "MapPin",
      title: "Johor Market Penetration",
      detail: "Launch and validate core ecosystems. Secure strategic institutional partnerships and drive aggressive SME and community onboarding.",
    },
    {
      phase: "Phase 2",
      window: "2027 – 2028",
      icon: "Flag",
      title: "Nationwide Expansion",
      detail: "Scale user acquisition across all Malaysian states. Deploy comprehensive B2G (Business-to-Government) and enterprise collaborations.",
    },
    {
      phase: "Phase 3",
      window: "2029 – 2030",
      icon: "Globe2",
      title: "Regional Ecosystem Scaling",
      detail: "Export the architecture to the broader ASEAN market. Deepen cross-platform AI integration for international operational intelligence.",
    },
  ],
} as const;

/** Slide 13 — The multidisciplinary ecosystem architects (team). */
export const team = {
  eyebrow: "Leadership",
  title: "The Multidisciplinary Ecosystem Architects.",
  subtitle:
    "A founding team spanning operations, strategy, engineering and business development.",
  members: [
    {
      name: "Farhan",
      role: "Co-Founder, Operations",
      detail: "Focuses on operational leadership, strategic execution, and ecosystem growth initiatives.",
      initials: "F",
    },
    {
      name: "Hafiz",
      role: "Co-Founder, Strategy",
      detail: "Leads digital ecosystem architecture, institutional partnerships, and brand expansion.",
      initials: "H",
    },
    {
      name: "Nash",
      role: "Co-Founder, Engineering",
      detail: "Oversees system architecture, infrastructure resilience, and enterprise platform development.",
      initials: "N",
    },
    {
      name: "Fakhri",
      role: "Co-Founder, Business Development",
      detail: "Leads field operations, stakeholder engagement, and strategic market penetration.",
      initials: "F",
    },
  ],
} as const;

/** Slide 14 — The proposition / invest. */
export const proposition = {
  eyebrow: "The Proposition",
  title: "Invest in the Infrastructure of the Everyday Economy.",
  subtitle:
    "MindstormX represents a unique opportunity to secure foundational positioning within Malaysia's rapidly emerging digital services economy.",
  pillars: [
    {
      icon: "LayoutGrid",
      title: "Untapped Vertical Markets",
      detail: "Capturing massive, offline-heavy community sectors currently devoid of digital coordination.",
    },
    {
      icon: "TrendingUp",
      title: "Compounding Revenue",
      detail: "High-recurring subscription ecosystems coupled with future-ready AI scalability.",
    },
    {
      icon: "Handshake",
      title: "Strategic Public-Private Synergy",
      detail: "Perfectly aligned with macro government spending and national digitalization blueprints.",
    },
  ],
} as const;

/** From the website reference mockup — solution pillars. */
export const solutions = {
  eyebrow: "What We Do",
  title: "Solutions Engineered for the Everyday Economy.",
  subtitle:
    "We adhere to the highest standards of security, compliance and data privacy to ensure your organization is always protected and future-ready.",
  items: [
    {
      icon: "BrainCircuit",
      title: "AI & Data Solutions",
      detail: "Harness the power of AI, data analytics and automation to drive intelligent decisions.",
    },
    {
      icon: "HeartPulse",
      title: "Healthcare Solutions",
      detail: "Digital health platforms that improve access, efficiency and patient outcomes.",
    },
    {
      icon: "Landmark",
      title: "Government Solutions",
      detail: "Empowering governments with secure, citizen-centric digital systems.",
    },
    {
      icon: "Users2",
      title: "Smart Community Solutions",
      detail: "Building connected, sustainable communities for the future.",
    },
  ],
} as const;

/** Core values (brand guideline). */
export const values = {
  eyebrow: "Our Values",
  title: "The Principles That Engineer Our Impact.",
  items: [
    { icon: "Lightbulb", title: "Innovation", detail: "Pushing boundaries to engineer solutions that move communities forward." },
    { icon: "ShieldCheck", title: "Integrity", detail: "Building trust through transparency, security and accountability at every layer." },
    { icon: "Users", title: "Collaboration", detail: "Partnering with communities, businesses and governments to create shared value." },
    { icon: "Award", title: "Excellence", detail: "Holding every platform to an enterprise-grade standard of quality and resilience." },
  ],
} as const;

/** Brand attributes (brand guideline). */
export const attributes = [
  { icon: "Scaling", title: "Scalable", detail: "Designed to maintain clarity and impact across every size and platform." },
  { icon: "Shuffle", title: "Versatile", detail: "Works seamlessly across digital, print, signage and merchandise." },
  { icon: "Sparkles", title: "Modern", detail: "A crisp, tech-authentic look representing innovation and technology." },
  { icon: "Star", title: "Memorable", detail: "A unique symbol that creates a strong and lasting brand impression." },
  { icon: "Rocket", title: "Future-Ready", detail: "Built to grow with the brand and adapt to future technological advances." },
] as const;

export const footer = {
  blurb:
    "Building intelligent digital ecosystems that empower communities, businesses and governments to innovate, transform and grow sustainably.",
  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Roadmap", href: "/roadmap" },
        { label: "Solutions", href: "/solutions" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Platforms",
      links: [
        { label: "doktor+", href: "/products#doktor-plus" },
        { label: "pasar+", href: "/products#pasar-plus" },
        { label: "khairat+", href: "/products#khairat-plus" },
        { label: "reno+", href: "/products#reno-plus" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Corporate Profile", href: "/about" },
        { label: "National Alignment", href: "/about#alignment" },
        { label: "Careers", href: "/contact" },
        { label: "Security", href: "/solutions#security" },
      ],
    },
  ],
} as const;

/** Shared CTA band content. */
export const ctaBand = {
  eyebrow: "Let's Build",
  title: "Ready to build the infrastructure of the everyday economy?",
  subtitle:
    "Partner with MindstormX to digitize community services, deploy applied AI, and grow sustainably across Malaysia and beyond.",
  primary: { label: "Contact Us", href: "/contact" },
  secondary: { label: "Explore Solutions", href: "/solutions" },
} as const;
