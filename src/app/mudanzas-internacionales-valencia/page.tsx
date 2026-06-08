import ServicePage, { buildMetadata } from "@/components/ServicePage";
import { pages } from "@/lib/pages";

export const metadata = buildMetadata("mudanzas-internacionales-valencia");

export default function Page() {
  return <ServicePage data={pages["mudanzas-internacionales-valencia"]} />;
}
