import { i as __toESM } from "../_runtime.mjs";
import { p as products } from "./catalog-DNGBx7K9.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$1 } from "./router-DwXmIpui.mjs";
import { t as ProductCard } from "./product-card-BFklbdbH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-CKQX5-7c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Shop() {
	const { q } = Route$1.useSearch();
	const list = (0, import_react.useMemo)(() => {
		const needle = q?.trim().toLowerCase();
		if (!needle) return products;
		return products.filter((p) => p.name.toLowerCase().includes(needle) || p.blurb.toLowerCase().includes(needle) || p.category.includes(needle));
	}, [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-site px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-5xl font-bold tracking-tight",
				children: q ? `“${q}”` : "Shop"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted",
				children: "Enamel NFC charms, packs, bracelets, and the occasional hat. Battery-free. Built to be traded."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-16 text-muted",
				children: "Nothing matches."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16 grid gap-5 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold",
							children: "Bulk orders"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "100+ charms at a discounted rate for houses, labels, and commemorative nights."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold",
							children: "Custom charms"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Want a TapThat-enabled custom shape? We’ll make the disc."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-base border-2 border-border bg-main p-6 shadow-shadow",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold",
								children: "Let’s partner"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm",
								children: "Events, brands, artists. Drop a line and we’ll find the form factor."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/partners",
								className: "mt-3 inline-block text-sm font-bold underline",
								children: "Partner desk"
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Shop as component };
