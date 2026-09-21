import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BRAND, postBySlug } from "@/lib/catalog";
import { DEFAULT_DESCRIPTION, notFoundTitle, pageTitle, socialHead } from "@/lib/seo";

export const Route = createFileRoute("/journal/$slug")({
  head: ({ params }) => {
    const post = postBySlug(params.slug);
    if (!post) {
      return socialHead({
        title: notFoundTitle(),
        description: DEFAULT_DESCRIPTION,
        path: `/journal/${params.slug}`,
      });
    }
    return socialHead({
      title: pageTitle(post.title, "Journal"),
      description: post.dek,
      path: `/journal/${post.slug}`,
      image: post.image,
      imageAlt: post.title,
      type: "article",
    });
  },
  component: PostPage,
});

function PostPage() {
  const { slug } = Route.useParams();
  const post = postBySlug(slug);
  if (!post) throw notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs text-muted">
        <Link to="/journal" className="hover:text-fg">
          Journal
        </Link>{" "}
        / {post.date}
      </p>
      <h1 className="mt-4 text-4xl tracking-tight md:text-5xl">{post.title}</h1>
      <p className="mt-3 text-muted">{post.dek}</p>
      <p className="mt-2 text-xs uppercase tracking-wider text-subtle">{post.author}</p>
      <img src={post.image} alt="" className="mt-8 aspect-[16/9] w-full object-cover" />
      <div className="mt-8 space-y-4 text-base leading-relaxed text-fg/90">
        {post.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </article>
  );
}
