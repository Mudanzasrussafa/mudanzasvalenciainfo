import ServicePage, { buildMetadata } from "@/components/ServicePage";
import { pages } from "@/lib/pages";

export const metadata = buildMetadata("empresas-de-mudanzas-valencia");

export default function Page() {
  return <ServicePage data={pages["empresas-de-mudanzas-valencia"]} />;
}
