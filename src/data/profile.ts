export const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";

export const contact = {
  email: import.meta.env.VITE_CONTACT_EMAIL || "your-email@example.com",
  linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/your-profile",
  github: import.meta.env.VITE_GITHUB_URL || "https://github.com/your-profile",
  medium: import.meta.env.VITE_MEDIUM_URL || "https://medium.com/@your-profile"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const profile = {
  name: "Anita Ayyagari",
  headline:
    "Solution Architect | Data & AI Leader | Enterprise Data Modernization Specialist | Responsible AI Advocate",
  shortHeadline: "Solution Architect | Data & AI Leader | Enterprise Data Modernization Specialist",
  summary:
    "Solution Architect with 16+ years of experience in Enterprise Data Architecture, Data Integration, Data Governance, Cloud Technologies, and AI-driven transformation initiatives.",
  focus:
    "Helping organizations modernize data ecosystems through Data Mesh, Data Fabric, Lakehouse architectures, metadata-led governance, GenAI, RAG, Agentic AI, and Responsible AI practices.",
  credentials: ["M.Tech in Computer Science", "Research Scholar pursuing PhD in Computer Science", "AI with Empathy advocate"]
};

export const featuredSkills = [
  "Enterprise Data Architecture",
  "Data Governance",
  "Metadata Management",
  "AI Governance",
  "GenAI + RAG",
  "Agentic AI",
  "Data Mesh",
  "Data Fabric",
  "Lakehouse",
  "Informatica"
];

export const skillGroups = [
  {
    title: "AI & GenAI",
    skills: [
      "LLMs",
      "GenAI",
      "Agentic AI",
      "RAG",
      "Prompt Engineering",
      "Vector Databases",
      "Responsible AI",
      "AI Governance",
      "Semantic Search"
    ]
  },
  {
    title: "Data Architecture",
    skills: [
      "Data Mesh",
      "Data Fabric",
      "Lakehouse",
      "Databricks",
      "Snowflake",
      "Delta Lake",
      "Enterprise Architecture",
      "Modernization"
    ]
  },
  {
    title: "Data Integration",
    skills: ["Informatica", "APIs", "ETL", "ELT", "Data Pipelines", "Metadata Management"]
  },
  {
    title: "Cloud & Engineering",
    skills: ["Azure", "AWS", "GitHub", "Python", "SQL", "REST APIs"]
  }
];

export const education = [
  {
    year: "2026",
    title: "Research Scholar in Computer Science",
    institution: "Andhra University",
    detail: "In Progress"
  },
  {
    year: "2025",
    title: "Master of Technology in Computer Science",
    institution: "Andhra University",
    detail: "89%"
  },
  {
    year: "2009",
    title: "Master of Computer Applications",
    institution: "Andhra University",
    detail: "74.5%"
  },
  {
    year: "2006",
    title: "Bachelor of Science - Electronics",
    institution: "Andhra University",
    detail: "68.7%"
  }
];

export const values = ["Innovation", "Empathy", "Continuous Learning", "Responsible AI", "Leadership"];

export const experience = [
  {
    role: "Customer Success Architect",
    company: "Informatica (Salesforce)",
    period: "Current",
    summary:
      "Leading customer success architecture across governance, metadata, enterprise architecture, and AI adoption initiatives.",
    focus: ["Data Governance", "Agentic AI", "Metadata Management", "Enterprise Architecture", "Customer Success", "AI Adoption"]
  },
  {
    role: "Senior Data Architecture Roles",
    company: "Previous organizations",
    period: "Earlier",
    summary:
      "Delivered enterprise data integration, cloud modernization, and governance programs across complex business environments.",
    focus: ["Data Integration", "Cloud Migration", "Enterprise Data Platforms", "Operating Models"]
  },
  {
    role: "Technology Leadership Roles",
    company: "Previous organizations",
    period: "Foundation",
    summary:
      "Built deep delivery experience across software engineering, data platforms, integration, and stakeholder-led transformation.",
    focus: ["Solution Delivery", "Architecture Governance", "Data Pipelines", "Technical Leadership"]
  }
];

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  description: string;
  image: string;
  technologies: string[];
  outcomes: string[];
  features: string[];
};

export const projects: Project[] = [
  {
    slug: "hamsatech-ai",
    title: "HamsaTech.ai",
    kicker: "AI with Empathy Platform",
    summary: "Responsible AI platform concept for digital phenotyping, sports wellness, and behavioral intelligence.",
    description:
      "A human-centered AI platform concept focused on empathetic intelligence, safe personalization, and measurable wellness outcomes.",
    image: "/images/project-hamsatech.svg",
    technologies: ["Responsible AI", "Digital Phenotyping", "Behavioral Intelligence", "Wellness Analytics"],
    outcomes: ["Defined product pillars", "Mapped ethical AI controls", "Outlined wellness intelligence workflows"],
    features: ["Digital Phenotyping", "Sports Wellness", "Behavioral Intelligence", "Responsible AI"]
  },
  {
    slug: "ai-governance-framework",
    title: "AI Governance Framework",
    kicker: "Enterprise AI Risk Management Accelerator",
    summary: "A reusable governance model for AI risk, controls, policies, metadata, and adoption readiness.",
    description:
      "A practical accelerator that helps enterprises assess, govern, and scale AI systems with accountability and control.",
    image: "/images/project-governance.svg",
    technologies: ["AI Governance", "Risk Controls", "Metadata", "Policy Frameworks"],
    outcomes: ["Reusable governance model", "Risk assessment taxonomy", "Responsible AI guardrails"],
    features: ["Model inventory", "Risk scoring", "Policy mapping", "Operating model"]
  },
  {
    slug: "insurance-claims-automation",
    title: "Insurance Claims Automation",
    kicker: "ISB Capstone Project",
    summary: "Claims workflow automation concept using analytics, process intelligence, and AI decision support.",
    description:
      "A capstone solution exploring how automation can reduce claim cycle time while improving transparency and customer experience.",
    image: "/images/project-claims.svg",
    technologies: ["Process Automation", "AI Decision Support", "Analytics", "Insurance"],
    outcomes: ["Reduced manual touchpoints", "Mapped claim lifecycle", "Designed decision support flow"],
    features: ["Claims triage", "Document intelligence", "Exception handling", "Performance metrics"]
  },
  {
    slug: "enterprise-data-mesh-accelerator",
    title: "Enterprise Data Mesh Accelerator",
    kicker: "Modern Data Operating Model",
    summary: "Blueprint for domain-oriented data products, federated governance, and metadata-driven discovery.",
    description:
      "A reference accelerator for enterprises shifting from centralized data delivery into product-oriented data ownership.",
    image: "/images/project-mesh.svg",
    technologies: ["Data Mesh", "Data Products", "Governance", "Metadata"],
    outcomes: ["Domain model", "Data product template", "Federated governance pattern"],
    features: ["Product ownership", "Self-service discovery", "Quality contracts", "Governance controls"]
  },
  {
    slug: "genai-rag-reference-architecture",
    title: "GenAI + RAG Reference Architecture",
    kicker: "Enterprise Knowledge Intelligence",
    summary: "Secure reference architecture for retrieval-augmented generation over governed enterprise knowledge.",
    description:
      "A practical RAG architecture covering ingestion, embedding, retrieval, orchestration, grounding, observability, and governance.",
    image: "/images/project-rag.svg",
    technologies: ["GenAI", "RAG", "Vector Databases", "Semantic Search", "AI Governance"],
    outcomes: ["Reference architecture", "Governed retrieval pattern", "Adoption roadmap"],
    features: ["Knowledge ingestion", "Vector retrieval", "Prompt orchestration", "Trust controls"]
  }
];

export const testimonials = [
  {
    quote:
      "Anita brings rare depth across architecture, governance, and customer outcomes. Her approach turns complex data strategy into practical execution.",
    author: "Enterprise Data Leader",
    role: "Customer stakeholder"
  },
  {
    quote:
      "Her ability to connect Responsible AI, metadata, and architecture makes her a strong partner for modernization programs.",
    author: "AI Transformation Sponsor",
    role: "Program stakeholder"
  }
];

export const researchAreas = ["Responsible AI", "Digital Phenotyping", "AI Governance", "Enterprise AI Architecture"];

export type Publication = {
  title: string;
  type: "Published Paper" | "Whitepaper" | "Research Interest" | "Conference Topic";
  status: string;
  href?: string;
};

export const publications: Publication[] = [
  {
    title: "Smart Hospital Admission using AI and Informatica",
    type: "Published Paper",
    status: "Published in ISJEM - 31 August 2025",
    href: "https://isjem.com/download/smart-hospital-admission-using-ai-and-informatica/"
  },
  {
    title: "Responsible AI Governance for Enterprise Architecture",
    type: "Whitepaper",
    status: "Draft"
  },
  {
    title: "Digital Phenotyping and Empathetic AI Systems",
    type: "Research Interest",
    status: "In progress"
  },
  {
    title: "Metadata-Driven Controls for GenAI Adoption",
    type: "Conference Topic",
    status: "Planned"
  }
];
