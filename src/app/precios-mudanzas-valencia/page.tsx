import ServicePage, { buildMetadata } from "@/components/ServicePage";

const slug = "precios-mudanzas-valencia";

export const metadata = buildMetadata(slug);

export default function Page() {
  return <ServicePage slug={slug} />;
}
