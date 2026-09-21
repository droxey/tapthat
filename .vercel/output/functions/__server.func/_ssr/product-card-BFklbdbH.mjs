import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as formatMoney } from "./router-DwXmIpui.mjs";
import { t as Badge } from "./badge-DgY73l9b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-BFklbdbH.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/shop/$slug",
		params: { slug: product.slug },
		className: "group block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-base border-2 border-border bg-secondary-background shadow-shadow transition-all group-hover:translate-x-boxShadowX group-hover:translate-y-boxShadowY group-hover:shadow-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: product.name,
					className: "aspect-square w-full object-cover"
				}), product.soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "solid",
					className: "absolute left-3 top-3",
					children: "Sold out"
				}) : product.compareAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "accent",
					className: "absolute left-3 top-3",
					children: "Sale"
				}) : null]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3 border-t-2 border-border p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold",
					children: product.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "shrink-0 text-sm font-bold tabular-nums",
					children: formatMoney(product.price)
				})]
			})]
		})
	});
}
//#endregion
export { ProductCard as t };
