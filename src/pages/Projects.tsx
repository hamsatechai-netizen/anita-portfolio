import { ProjectCard } from "../components/ProjectCard";
import { Section } from "../components/Section";
import { Seo } from "../components/Seo";
import { projects } from "../data/profile";

export default function Projects() {
  return (
    <>
      <Seo title="Projects | Anita Ayyagari" description="Portfolio projects and architecture accelerators from Anita Ayyagari." path="/projects" />
      <Section
        eyebrow="Projects"
        title="Architecture projects, accelerators, and platform concepts"
        description="Selected work across Responsible AI, governance, data modernization, insurance automation, and enterprise knowledge intelligence."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}
