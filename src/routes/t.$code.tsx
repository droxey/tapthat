import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { BRAND, charmByCode } from "@/lib/catalog";
import { DEFAULT_DESCRIPTION, pageTitle, socialHead } from "@/lib/seo";

export const Route = createFileRoute("/t/$code")({
  head: ({ params }) => {
    const charm = charmByCode(params.code);
    if (!charm) {
      return socialHead({
        title: pageTitle("Charm not found"),
        description: DEFAULT_DESCRIPTION,
        path: `/t/${params.code}`,
      });
    }
    return socialHead({
      title: pageTitle(`${charm.name} · ${charm.code}`, "Tap to open"),
      description: `Tap to open ${charm.name}, started at ${charm.origin}.`,
      path: `/t/${params.code}`,
      image: charm.image,
      imageAlt: charm.name,
    });
  },
  beforeLoad: ({ params }) => {
    const charm = charmByCode(params.code);
    if (!charm) throw notFound();
    throw redirect({
      to: "/app/$charmId",
      params: { charmId: charm.id },
      search: { tap: true },
    });
  },
});
