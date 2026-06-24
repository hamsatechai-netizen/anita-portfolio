import { Helmet } from "react-helmet-async";
import { absoluteUrl, personSchema } from "../lib/seo";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  schema?: object;
};

export function Seo({ title, description, path = "/", image = "/images/og-cover.svg", schema }: SeoProps) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const jsonLd = schema || personSchema();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
