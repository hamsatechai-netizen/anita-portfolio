import { profile, siteUrl } from "../data/profile";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Solution Architect",
    description: profile.summary,
    url: siteUrl,
    knowsAbout: [
      "Data Governance",
      "Enterprise Architecture",
      "AI Governance",
      "Responsible AI",
      "Data Mesh",
      "GenAI",
      "RAG"
    ]
  };
}
