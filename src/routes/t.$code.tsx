import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { BRAND, charmByCode } from "@/lib/catalog";
import { DEFAULT_DESCRIPTION, pageTitle, socialHead } from "@/lib/seo";

export const Route = createFileRoute("/t/$code")({
  head: ({ params }) => {
    const bead = charmByCode(params.code);
    if (!bead) {
      return socialHead({
        title: pageTitle("Bead not found"),
        description: DEFAULT_DESCRIPTION,
        path: `/t/${params.code}`,
      });
    }
    return socialHead({
      title: pageTitle(`${bead.name} · ${bead.code}`, "Tap to open"),
      description: `Tap to open ${bead.name}, started at ${bead.origin}.`,
      path: `/t/${params.code}`,
      image: bead.image,
      imageAlt: bead.name,
    });
  },
  beforeLoad: ({ params }) => {
    const bead = charmByCode(params.code);
    if (!bead) throw notFound();
    throw redirect({
      to: "/app/$charmId",
      params: { charmId: bead.id },
      search: { tap: true },
    });
  },
});
