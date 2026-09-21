import { i as __toESM } from "./_runtime.mjs";
import { f as productBySlug, m as relatedProducts } from "./_ssr/catalog-DNGBx7K9.mjs";
import { _ as require_jsx_runtime, v as require_react } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { R as notFound, _ as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { d as Button, l as useCart, m as formatMoney, n as Route } from "./_ssr/router-DwXmIpui.mjs";
import { t as Badge } from "./_ssr/badge-DgY73l9b.mjs";
import { t as ProductCard } from "./_ssr/product-card-BFklbdbH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CeZ6BsSl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route.useParams();
	const product = productBySlug(slug);
	if (!product) throw notFound();
	const [variant, setVariant] = (0, import_react.useState)(product.variants[0]);
	const [shot, setShot] = (0, import_react.useState)(product.gallery[0]);
	const add = useCart((s) => s.add);
	const [added, setAdded] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-5 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "hover:text-fg",
						children: "Shop"
					}),
					" ",
					"/ ",
					product.name
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-10 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: shot,
					alt: product.name,
					className: "aspect-square w-full rounded-base border-2 border-border object-cover shadow-shadow"
				}), product.gallery.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-4 gap-2",
					children: product.gallery.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setShot(src),
						className: `overflow-hidden rounded-base border-2 ${shot === src ? "border-border shadow-shadow" : "border-border"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: "",
							className: "aspect-square w-full object-cover"
						})
					}, src))
				}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					product.soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "solid",
						children: "Sold out"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl font-bold tracking-tight",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-2xl font-bold tabular-nums",
						children: [product.compareAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-2 text-subtle line-through",
							children: formatMoney(product.compareAt)
						}) : null, formatMoney(product.price)]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-muted",
						children: product.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "text-sm font-bold",
							children: "Options"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: product.variants.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: !v.available,
								onClick: () => setVariant(v),
								className: `h-10 rounded-base border-2 border-border px-4 text-sm font-bold ${variant.id === v.id ? "bg-main shadow-shadow" : "bg-secondary-background"} ${!v.available ? "opacity-40" : ""}`,
								children: v.name
							}, v.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-8 w-full sm:w-auto",
						disabled: product.soldOut || !variant.available,
						onClick: () => {
							add({
								slug: product.slug,
								variantId: variant.id,
								variantName: variant.name
							});
							setAdded(true);
						},
						children: product.soldOut ? "Sold out" : added ? "Added to bag" : "Add to bag"
					}),
					added ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/cart",
						className: "ml-4 text-sm text-muted hover:text-fg",
						children: "View bag"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-10 space-y-2 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Battery-free NFC disc, water-resistant enamel" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Works with iPhone 11+ and Android 6+" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Public or private once activated in the app" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ships in 3–7 business days (US)" })
						]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold",
					children: "You might also tap"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-8 sm:grid-cols-3",
					children: relatedProducts(product.slug).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
				})]
			})
		]
	});
}
//#endregion
export { ProductPage as component };
