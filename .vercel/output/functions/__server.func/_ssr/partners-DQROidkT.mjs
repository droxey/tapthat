import { i as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { d as Button, u as Input } from "./router-DwXmIpui.mjs";
import { t as Label } from "./label-B9laxGvI.mjs";
import { t as Textarea } from "./textarea-BchiSn3k.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-DJkODalo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/partners-DQROidkT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var partnerFaqs = [
	{
		q: "What custom app features do you offer?",
		a: "We can brand the entire user flow: theme colors, premier logo placements, targeted notifications, branded activation, user badges, and ad placements."
	},
	{
		q: "How does wristband activation work?",
		a: "The app turns existing event wristbands into engagement hubs. It can scan NFC/RFID already in the band and layer a branded experience, incentives, and moments — no hardware swap required."
	},
	{
		q: "What are TapThat Quests?",
		a: "Fan experiences before, during, and after a night: in-app incentives plus custom NFC form factors that create moments your crowd will actually remember."
	},
	{
		q: "How much do custom charms cost?",
		a: "Custom units run $3–$7 depending on size, colors, design, and order volume. Email hello@tapthat.fans for a quote."
	},
	{
		q: "What’s the MOQ?",
		a: "Minimum order starts at 200 units."
	}
];
function Partners() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-5xl tracking-tight md:text-6xl",
				children: "Partner with TapThat"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-lg text-muted",
				children: "Custom scannable charms, a branded app layer, and wristband quests for events, labels, and artists."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-3",
				children: [
					["Custom scannable charms", "Showcase a brand on enamel that can be scanned for an experience — events, products, or fans."],
					["App branding", "Theme colors, logo placements, notifications, activation flow, badges, and more."],
					["Wristbands & quests", "Hosting a night? Use the chips already in the bands. No hardware change required."]
				].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-base border-2 border-border bg-secondary-background shadow-shadow p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: d
					})]
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl",
					children: "We collab with"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						["Events", "Custom apps on existing wristbands."],
						["Brands", "Charms and placements for customer engagement."],
						["Artists", "Musicians and other creatives with a room."],
						["More", "Another category? We’ll find a form factor."]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-base border-2 border-border shadow-shadow p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: v
						})]
					}, k))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto mt-16 max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl",
					children: "Partner FAQ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "mt-4",
					children: partnerFaqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: f.q,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: f.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: f.a })]
					}, f.q))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16 grid gap-10 rounded-base border-2 border-border bg-secondary-background shadow-shadow p-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl",
					children: "Let’s work together"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-muted",
					children: [
						"Inbox:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-fg",
							href: "mailto:hello@tapthat.fans",
							children: "hello@tapthat.fans"
						})
					]
				})] }), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "self-center text-fg",
					children: "Got it. We’ll write back."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-4",
					onSubmit: (e) => {
						e.preventDefault();
						setSent(true);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "name",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								name: "name",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								name: "email",
								type: "email",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "comment",
								children: "Comment"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "comment",
								name: "comment",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: "Send message"
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Partners as component };
