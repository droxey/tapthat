import { s as howSteps } from "./catalog-DNGBx7K9.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Button } from "./router-DwXmIpui.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/how-it-works-CWFDRmBH.js
var import_jsx_runtime = require_jsx_runtime();
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-site px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "inline-flex rounded-base border-2 border-border bg-accent px-3 py-1 text-xs font-bold shadow-shadow",
				children: "Wut?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-5xl font-bold tracking-tight md:text-6xl",
				children: "How it works"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-lg",
				children: "Tap the disc. Open the link. Leave a moment. Pass it on."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app",
						children: "Open web app"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/ios",
						children: "iOS app"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-16 space-y-10",
				children: howSteps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: `grid items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.image,
						alt: "",
						className: "aspect-[4/3] w-full rounded-base border-2 border-border object-cover shadow-shadow"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "inline-flex size-10 items-center justify-center rounded-base border-2 border-border bg-accent font-bold",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-3xl font-bold tracking-tight",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed",
								children: s.body
							})
						]
					})]
				}, s.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16 rounded-base border-2 border-border bg-main p-8 shadow-shadow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold",
					children: "Hotspots"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold",
						children: "iPhone."
					}), " The NFC bar sits across the top back. Lock screen scans more reliably than an open app."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold",
						children: "Android."
					}), " Usually the middle of the back. Unlock to the home screen, then hold still."] })]
				})]
			})
		]
	});
}
//#endregion
export { HowItWorks as component };
