import ServicePage, { buildMetadata } from "@/components/ServicePage";

const slug = "mudanzas-nacionales-valencia";

export const metadata = buildMetadata(slug);

export default function Page() {
  return <ServicePage slug={slug} />;
}
