export const siteUrl = import.meta.env.VITE_SITE_URL || "https://anita-portfolio.pages.dev";

export const contact = {
  email: import.meta.env.VITE_CONTACT_EMAIL || "anita.ayyagari913@gmail.com",
  linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/anita-ayyagari/",
  github: import.meta.env.VITE_GITHUB_URL || "https://github.com/hamsatechai-netizen",
  medium: import.meta.env.VITE_MEDIUM_URL || "https://medium.com/@anita.ayyagari913"
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
    "Founder & Director, HamsaTech.ai | Data, AI & Governance Advisor | Responsible Innovation",
  shortHeadline: "Founder & Director at HamsaTech.ai | Independent Data, AI & Governance Advisor",
  summary:
    "Founder and Director of HamsaTech.ai with 16+ years of experience across enterprise data architecture, AI, governance, cloud modernization, and responsible innovation.",
  focus:
    "I advise organizations on turning data and AI ambition into trusted, practical outcomes - combining strategy, architecture, governance, GenAI, and an enduring commitment to innovation with social impact.",
  credentials: ["M.Tech in Computer Science", "16+ years across data and AI", "AI with Empathy advocate"]
};

export const impactMetrics = [
  { value: "16+", label: "Years in data, architecture, and delivery" },
  { value: "100%", label: "Increase in platform consumption enabled" },
  { value: "~$600K", label: "ARR retained through account stabilization" },
  { value: "4.2x", label: "Operational efficiency improvement delivered" }
];

export const currentFocus = [
  {
    title: "Governed enterprise GenAI",
    description: "Production-grade RAG, vector search, and agentic patterns with lifecycle governance, evaluation, lineage, and human oversight."
  },
  {
    title: "Modern data platforms",
    description: "Lakehouse, Data Mesh, and Data Fabric strategies across AWS and Azure, aligned to business domains and operating models."
  },
  {
    title: "Independent AI advisory",
    description: "Helping leaders identify valuable AI opportunities, shape responsible adoption roadmaps, review architecture, and build governance into delivery."
  }
];

export const advisoryServices = [
  {
    title: "AI strategy and use-case advisory",
    description: "Opportunity discovery, prioritization, value framing, adoption roadmaps, and executive workshops."
  },
  {
    title: "Data and AI architecture",
    description: "Independent architecture reviews and target-state designs spanning modern data platforms, RAG, agentic AI, and integration."
  },
  {
    title: "AI and data governance",
    description: "Practical operating models, metadata, lineage, risk controls, Responsible AI, and compliance-by-design."
  },
  {
    title: "Innovation and impact advisory",
    description: "Human-centered solution shaping for organizations and founders using technology to create meaningful social and business impact."
  }
];

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
    detail: "85%"
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
    role: "Founder & Director",
    company: "HamsaTech.ai",
    period: "15 Sep 2026 - Present",
    summary:
      "Building an independent advisory and innovation practice at the intersection of enterprise data, AI, governance, and human-centered impact.",
    focus: ["AI Advisory", "Data and AI Strategy", "Responsible AI", "Governance", "Innovation", "Social Impact"]
  },
  {
    role: "Senior Solutions Architect",
    company: "Informatica Business Solutions / Salesforce",
    period: "Nov 2022 - Sep 2026",
    summary:
      "Led enterprise Data and GenAI architecture across strategic accounts, spanning governed adoption, platform modernization, executive advisory, and complex account stabilization.",
    focus: ["Governed GenAI", "RAG and Agentic AI", "AWS and Azure", "CXO Advisory", "Metadata and Lineage", "Customer Value"]
  },
  {
    role: "Solution Architect",
    company: "Gainsight Software",
    period: "Sep 2021 - Nov 2022",
    summary:
      "Led enterprise adoption and migration to Gainsight NXT, improving integration, onboarding, and delivery predictability through reusable architecture frameworks.",
    focus: ["Platform Modernization", "Migration Architecture", "Integration", "Delivery Frameworks"]
  },
  {
    role: "Manager",
    company: "PwC India",
    period: "Mar 2017 - Aug 2021",
    summary:
      "Led cloud, data, and integration strategy engagements for large regulated clients, including future-state architecture, modernization roadmaps, and program governance.",
    focus: ["Enterprise Transformation", "Architecture Roadmaps", "RFP Solutioning", "Executive Advisory"]
  },
  {
    role: "Engineering and Consulting Roles",
    company: "Anicalls, Accenture, Colruyt IT and Infosys",
    period: "Jul 2009 - Nov 2016",
    summary: "Built a delivery foundation across enterprise integration, software engineering, data platforms, and technical leadership.",
    focus: ["Data Integration", "Software Engineering", "Solution Delivery", "Technical Leadership"]
  }
];

export const achievements = [
  {
    title: "Scaled platform adoption",
    result: "100% increase in IPU consumption",
    detail: "Led architecture-driven GenAI and data-platform adoption across strategic enterprise accounts."
  },
  {
    title: "Protected strategic revenue",
    result: "Approximately $600K ARR retained",
    detail: "Stabilized at-risk customers through architecture remediation, roadmap realignment, and executive engagement."
  },
  {
    title: "Simplified operations",
    result: "4.2x efficiency improvement",
    detail: "Reduced architectural complexity and helped transform a round-the-clock support model into 8/5 operations."
  },
  {
    title: "Recognized for impact",
    result: "Multiple excellence awards",
    detail: "Recognized at Infosys, Accenture, PwC, and Informatica for customer success, delivery, innovation, and collaboration."
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
  context: string;
  role: string;
  approach: string[];
  impactNote?: string;
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
    features: ["Digital Phenotyping", "Mental Wellness", "Farmer Support", "Responsible AI"],
    context: "A social-impact initiative exploring how technology can address challenges in healthcare and agriculture while keeping empathy, safety, and local context at the center.",
    role: "Contributor shaping the technology vision, responsible-AI principles, and solution concepts.",
    approach: ["Frame high-value social problems before selecting technology", "Design for explainability, consent, privacy, and human escalation", "Connect behavioral and wellness signals to supportive - not punitive - interventions"],
    impactNote: "Concept and innovation work; claims are intentionally limited to work completed and do not imply a deployed clinical product."
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
    features: ["Model inventory", "Risk scoring", "Policy mapping", "Operating model"],
    context: "Enterprises need a repeatable way to move from AI experimentation to controlled production use, especially where regulatory and audit obligations apply.",
    role: "Architecture lead translating governance principles into reusable controls and operating-model decisions.",
    approach: ["Connect model and use-case inventories to business ownership", "Classify risk and map policies to lifecycle gates", "Capture evidence through metadata, lineage, evaluation, and monitoring", "Define human accountability and exception paths"],
    impactNote: "Reusable portfolio accelerator informed by enterprise architecture and governance experience."
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
    features: ["Claims triage", "Document intelligence", "Exception handling", "Performance metrics"],
    context: "An ISB capstone examining long claim cycles, repeated manual review, fragmented documents, and limited decision transparency.",
    role: "Solution architect for the target workflow, data flow, decision support, and value-measurement model.",
    approach: ["Map the end-to-end claim lifecycle and exception points", "Use document intelligence to structure incoming evidence", "Route low-confidence and high-risk decisions to human reviewers", "Measure cycle time, touchpoints, exceptions, and customer outcomes"],
    impactNote: "Capstone solution design; outcome statements describe the target-state value hypothesis rather than production results."
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
    features: ["Product ownership", "Self-service discovery", "Quality contracts", "Governance controls"],
    context: "Centralized data teams often become delivery bottlenecks while domain teams lack clear accountability for data quality, meaning, and usability.",
    role: "Enterprise architect defining the reference operating model, data-product contract, and federated governance pattern.",
    approach: ["Identify domains and accountable product owners", "Standardize product metadata, service levels, and quality contracts", "Enable self-service discovery with policy-aware access", "Federate decisions while retaining enterprise guardrails"],
    impactNote: "Reference accelerator designed to be adapted to an organization's maturity, regulation, and platform landscape."
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
    features: ["Knowledge ingestion", "Vector retrieval", "Prompt orchestration", "Trust controls"],
    context: "Enterprise knowledge assistants need more than an LLM: they must respect source permissions, ground answers, expose evidence, and support ongoing evaluation.",
    role: "AI architect defining a secure, platform-neutral RAG pattern from ingestion through monitoring.",
    approach: ["Ingest and classify governed enterprise sources", "Chunk, embed, and retrieve with access-aware filters", "Orchestrate prompts with citations and bounded instructions", "Evaluate retrieval and generation quality with observable feedback loops"],
    impactNote: "Reference architecture suitable for discovery and design workshops; product choices depend on the client's platform standards."
  }
];

export const researchAreas = ["Responsible AI", "Digital Phenotyping", "AI Governance", "Enterprise AI Architecture"];

export const speakingEngagements = [
  {
    institution: "Aditya University",
    department: "School of Computing - Department of Computer Applications",
    format: "Guest Lecture",
    date: "2026-08-07",
    dateLabel: "7 August 2026",
    location: "Cotton Block Seminar Hall, Aditya University",
    title: "Build Your Future: AI Career Roadmap & Live Claude Code Demonstration",
    description:
      "A full-day, practice-oriented session connecting the AI career landscape with a live Claude Code demonstration, followed by audience interaction and a valedictory recognition.",
    themes: ["AI Careers", "Claude Code", "Applied AI", "Student Mentoring"],
    images: [
      { src: "/gallery/aditya-interactive-session.jpg", alt: "Anita Ayyagari answering a participant question during the Aditya University guest lecture" },
      { src: "/gallery/aditya-valedictory-recognition.jpg", alt: "Aditya University faculty presenting Anita Ayyagari with a commemorative plaque" },
      { src: "/gallery/aditya-ai-career-roadmap-poster.jpg", alt: "Official Aditya University guest lecture poster" }
    ],
    responses: [
      "Students highlighted the session's practical guidance on AI careers, Claude Code, research, automation, and responsible solution design",
      "The live challenge asked learners to define an AI approach, impact measures, and risks for a student portfolio automation use case",
      "Valedictory recognition from the Department of Computer Applications"
    ],
    evidenceLinks: [
      { label: "Student reflection", href: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7492449173146013696/" },
      { label: "Applied challenge response", href: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7491854636941942784/" }
    ]
  },
  {
    institution: "Talent AP AI Circle",
    department: "Talent AP with DeepTech Nallapadu Foundation",
    format: "Community Speaker Session",
    date: "2026-07-25",
    dateLabel: "25 July 2026",
    location: "Visakhapatnam Public Library",
    title: "Guardrails, Not Guidelines: Operationalizing AI Governance",
    description:
      "A practitioner session on moving AI governance from principles to operational controls, including AI asset visibility, accountable ownership, continuous reviews, and enterprise trust.",
    themes: ["AI Governance", "AI Asset Registry", "Continuous Controls", "Enterprise Trust"],
    images: [
      { src: "/gallery/talent-ap-ai-circle-poster.jpg", alt: "Talent AP AI Circle speaker announcement for Anita Ayyagari" },
      { src: "/gallery/talent-ap-ai-circle-community.jpg", alt: "Anita Ayyagari with participants at the Talent AP AI Circle in Visakhapatnam" },
      { src: "/gallery/ai-governance-asset-register-visual.jpg", alt: "Session visual showing an AI Asset Register and continuous AI governance agent" }
    ],
    responses: [
      "Organizer reported thought-provoking discussion on governance, reliability, evaluation, and responsible real-world deployment",
      "The event connected industry, academia, startups, researchers, students, and technology professionals"
    ],
    evidenceLinks: [
      { label: "Talent AP event recap", href: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7490744506539995136/" }
    ]
  },
  {
    institution: "Visakha Institute of Engineering & Technology",
    department: "Department of MCA",
    format: "Faculty Development Program - Resource Person",
    date: "2026-04-06",
    dateLabel: "6-10 April 2026",
    location: "Board Room, Visakha Institute of Engineering & Technology",
    title: "Building Responsible AI Systems: Governance, Frameworks & Implementation",
    description:
      "Delivered within the one-week RICA-2026 hybrid FDP, this session connected Responsible AI foundations with governance frameworks, lifecycle controls, practical implementation, and industry-relevant ethical scenarios.",
    themes: ["Responsible AI", "Governance Frameworks", "Lifecycle Controls", "Faculty Development"],
    images: [
      {
        src: "/gallery/visakha-rica-2026-poster.jpg",
        alt: "Anita Ayyagari featured as a resource person for the RICA-2026 Faculty Development Program",
        display: "focus",
        position: "70% 82%"
      },
      {
        src: "/gallery/visakha-rica-2026-poster.jpg",
        alt: "Complete official poster for the RICA-2026 Faculty Development Program at Visakha Institute",
        display: "contain",
        position: "center"
      },
      { src: "/gallery/responsible-ai-fdp-feedback.jpg", alt: "Feedback summary for Anita Ayyagari's Building Responsible AI Systems FDP session" }
    ],
    responses: [
      "4.7/5 overall rating from 90+ participant responses",
      "100% positive live feedback with strong engagement and practical understanding",
      "Participant feedback emphasized clear explanations, communication, informative coverage, and practical insights"
    ],
    evidenceLinks: [
      { label: "LinkedIn impact summary", href: "https://www.linkedin.com/feed/update/urn:li:activity:7446948586921291777/" },
      { label: "Session evidence PDF", href: "/evidence/responsible-ai-fdp-session-snapshot.pdf" }
    ]
  },
  {
    institution: "Vignan's Institute of Information Technology",
    department: "Office of Industry Relations",
    format: "Guest Lecture",
    date: "2025-08-23",
    dateLabel: "23 August 2025",
    location: "Duvvada, Visakhapatnam",
    title: "Modern Data Architectures: Powering the Future of AI and Analytics",
    description:
      "A guest lecture connecting scalable modern data architecture with AI and analytics readiness, illustrated through an industry-oriented discussion with students and faculty.",
    themes: ["Modern Data Architecture", "AI Readiness", "Analytics", "Scalable Data"],
    images: [
      { src: "/gallery/vignan-modern-data-architectures-poster.jpg", alt: "Official Vignan's guest lecture poster for Modern Data Architectures" },
      { src: "/gallery/vignan-guest-lecture-session.jpg", alt: "Anita Ayyagari delivering the modern data architectures guest lecture at Vignan's" },
      { src: "/gallery/vignan-guest-lecture-recognition.jpg", alt: "Vignan's faculty recognizing Anita Ayyagari after the guest lecture" }
    ],
    responses: ["Formal recognition from the Office of Industry Relations", "Academic-industry exchange with students and faculty"],
    evidenceLinks: []
  }
];

export type Publication = {
  title: string;
  type: "Published Paper" | "Whitepaper" | "Research Interest" | "Conference Topic" | "Webinar" | "Framework";
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
  },
  {
    title: "From Data Chaos to Governed Intelligence: AI Agents in Action - Part 3",
    type: "Webinar",
    status: "Presented 23 June 2026",
    href: "https://success.informatica.com/explore/tt-webinars/from-data-chaos-to-governed-intelligence--ai-agents-in-action---1.html"
  },
  {
    title: "AI Governance - Practical Framework View",
    type: "Framework",
    status: "Published on LinkedIn",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7447324564306534400/"
  }
];
