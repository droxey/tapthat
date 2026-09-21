import { createFileRoute, notFound } from "@tanstack/react-router";
import { BRAND } from "@/lib/catalog";
import { DEFAULT_DESCRIPTION, notFoundTitle, pageTitle, socialHead } from "@/lib/seo";

const pages: Record<string, { title: string; body: string[] }> = {
  privacy: {
    title: "Privacy policy",
    body: [
      "TapThat does not sell personal data to third parties. Memories, photos, and socials you add to a charm stay in the app under the visibility you chose: public to the floor, or private to people who physically tap the disc.",
      "We do not use charms to track your location. Places on a journey are typed in by holders.",
      `Account and order emails are used to fulfill shop orders and product updates you opted into. You can write ${BRAND.email} to delete a card or a memory.`,
    ],
  },
  terms: {
    title: "Terms of service",
    body: [
      "The shop, app, and charms are provided as-is for personal and event use. Custom partner work is covered by a separate quote.",
      "You are responsible for what you write on a public charm. Don’t leave anything you wouldn’t say to the next person holding it.",
      "Unused product may be returned within 14 days. Activated charms that have entered a public journey cannot be restocked as new.",
    ],
  },
  shipping: {
    title: "Shipping & returns",
    body: [
      "Continental USA: 3–7 business days standard, 2–4 with priority. We pack from a single US location.",
      `Returns: contact ${BRAND.email} within 14 days. Defective discs are replaced. Custom partner runs over 200 units are made to order and are not returnable unless defective.`,
    ],
  },
};


export const Route = createFileRoute("/policies/$slug")({
  head: ({ params }) => {
    const page = pages[params.slug];
    if (!page) {
      return socialHead({
        title: notFoundTitle(),
        description: DEFAULT_DESCRIPTION,
        path: `/policies/${params.slug}`,
      });
    }
    return socialHead({
      title: pageTitle(page.title),
      description: page.body[0] ?? DEFAULT_DESCRIPTION,
      path: `/policies/${params.slug}`,
      image: "/og.jpg",
      imageAlt: page.title,
    });
  },
  component: Policy,
});

function Policy() {
  const { slug } = Route.useParams();
  const page = pages[slug];
  if (!page) throw notFound();
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-5xl tracking-tight">{page.title}</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-muted">
        {page.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </main>
  );
}
