import { i as __toESM } from "../_runtime.mjs";
import { n as ambassadors } from "./catalog-DNGBx7K9.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Button, u as Input } from "./router-DwXmIpui.mjs";
import { t as Label } from "./label-B9laxGvI.mjs";
import { t as Textarea } from "./textarea-BchiSn3k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/squad-BjR-C13x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Squad() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.28em] text-subtle",
				children: "Ambassadors"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-5xl tracking-tight md:text-6xl",
				children: "The Squad"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-lg text-muted",
				children: "Not an influencer grid. A short list of fans who trade in public, write what happened, and send the charm on. Early colorways, a private channel, no follower minimum."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-8 md:grid-cols-3",
				children: ambassadors.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden rounded-base border-2 border-border bg-secondary-background shadow-shadow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: a.avatar,
						alt: a.name,
						className: "aspect-[4/5] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl",
								children: a.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-wider text-muted",
								children: [
									a.handle,
									" · ",
									a.city
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-accent",
								children: a.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: a.bio
							})
						]
					})]
				}, a.handle))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16 rounded-base border-2 border-border bg-secondary-background shadow-shadow p-8 md:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl",
						children: "Apply"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 max-w-xl text-muted",
						children: [
							"Tell us the rooms you actually go to. We read every note. Read the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/journal/$slug",
								params: { slug: "squad-update" },
								className: "text-fg underline-offset-4 hover:underline",
								children: "program note"
							}),
							" ",
							"first if you want the long version."
						]
					}),
					sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-fg",
						children: "Application in. If it’s a yes, you’ll hear from us."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-8 grid max-w-xl gap-4",
						onSubmit: (e) => {
							e.preventDefault();
							setSent(true);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "n",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "n",
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "c",
									children: "City"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "c",
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "r",
									children: "Rooms you go to"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "r",
									required: true,
									placeholder: "Festivals, afters, fairs…"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								children: "Send application"
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Squad as component };
