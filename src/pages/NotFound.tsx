import { ButtonLink } from "../components/ButtonLink";
import { Section } from "../components/Section";
import { Seo } from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | Anita Ayyagari" description="The requested page was not found." path="/404" />
      <Section eyebrow="404" title="Page not found" description="The page you requested is unavailable or has moved.">
        <ButtonLink to="/">Return home</ButtonLink>
      </Section>
    </>
  );
}
