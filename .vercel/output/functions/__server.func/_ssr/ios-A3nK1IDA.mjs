import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Button } from "./router-DwXmIpui.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ios-A3nK1IDA.js
var import_jsx_runtime = require_jsx_runtime();
var features = [
	{
		t: "Store memories in the charm",
		d: "Photos, notes, and the place you were — tapped from the disc on your wrist."
	},
	{
		t: "See updates on what you traded",
		d: "Follow a charm after it leaves your hand. Watch the next rooms write back."
	},
	{
		t: "A social card on every tap",
		d: "Add handles and a note. Anyone who taps a charm you activated can find you."
	},
	{
		t: "The public floor",
		d: "A feed of how fans are using charms tonight — rooms, notes, journeys."
	},
	{
		t: "Public or private",
		d: "Rename a disc. Keep a journey world-visible, or lock it to people who physically tap."
	}
];
function Ios() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-10 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.28em] text-subtle",
					children: "iOS 13.4+"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-5xl tracking-tight md:text-6xl",
					children: "TapThat for iPhone"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-muted",
					children: "Tech-powered charms in your pocket. The web app works on any phone; iOS adds camera memories, comments, and lock-screen scanning that actually sticks."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app",
							children: "Open the web app"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/how-it-works",
							children: "Scan without an app"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-subtle",
					children: "Rated 5.0 · Entertainment · English"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/scan.jpg",
				alt: "Phone held to a wrist charm",
				className: "aspect-[4/5] w-full object-cover"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-16 grid gap-6 md:grid-cols-2",
			children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-base border-2 border-border bg-secondary-background shadow-shadow p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: f.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: f.d
				})]
			}, f.t))
		})]
	});
}
//#endregion
export { Ios as component };
