import { u as postBySlug } from "./_ssr/catalog-DNGBx7K9.mjs";
import { _ as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { R as notFound, _ as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as Route$3 } from "./_ssr/router-DwXmIpui.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-rPBIeEwO.js
var import_jsx_runtime = require_jsx_runtime();
function PostPage() {
	const { slug } = Route$3.useParams();
	const post = postBySlug(slug);
	if (!post) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/journal",
						className: "hover:text-fg",
						children: "Journal"
					}),
					" ",
					"/ ",
					post.date
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-4xl tracking-tight md:text-5xl",
				children: post.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: post.dek
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs uppercase tracking-wider text-subtle",
				children: post.author
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: post.image,
				alt: "",
				className: "mt-8 aspect-[16/9] w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-4 text-base leading-relaxed text-fg/90",
				children: post.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p))
			})
		]
	});
}
//#endregion
export { PostPage as component };
