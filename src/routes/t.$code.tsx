import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { charmByCode } from "@/lib/catalog";

export const Route = createFileRoute("/t/$code")({
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
