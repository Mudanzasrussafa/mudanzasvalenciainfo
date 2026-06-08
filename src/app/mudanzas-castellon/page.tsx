import ServicePage, { buildMetadata } from "@/components/ServicePage";
import { pages } from "@/lib/pages";

export const metadata = buildMetadata("mudanzas-castellon");

export default function Page() {
  return <ServicePage data={pages["mudanzas-castellon"]} />;
}
