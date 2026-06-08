import ServicePage, { buildMetadata } from "@/components/ServicePage";
import { pages } from "@/lib/pages";

export const metadata = buildMetadata("guardamuebles-valencia");

export default function Page() {
  return <ServicePage data={pages["guardamuebles-valencia"]} />;
}
