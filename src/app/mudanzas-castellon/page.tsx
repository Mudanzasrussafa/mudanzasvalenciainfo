import ServicePage, { buildMetadata } from "@/components/ServicePage";

const slug = "mudanzas-castellon";

export const metadata = buildMetadata(slug);

export default function Page() {
  return <ServicePage slug={slug} />;
}
