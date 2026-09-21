import { _ as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { R as notFound } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as Route$2 } from "./_ssr/router-DwXmIpui.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-ePsKSp5H.js
var import_jsx_runtime = require_jsx_runtime();
var pages = {
	privacy: {
		title: "Privacy policy",
		body: [
			"TapThat does not sell personal data to third parties. Memories, photos, and socials you add to a charm stay in the app under the visibility you chose: public to the floor, or private to people who physically tap the disc.",
			"We do not use charms to track your location. Places on a journey are typed in by holders.",
			"Account and order emails are used to fulfill shop orders and product updates you opted into. You can write hello@tapthat.fans to delete a card or a memory."
		]
	},
	terms: {
		title: "Terms of service",
		body: [
			"The shop, app, and charms are provided as-is for personal and event use. Custom partner work is covered by a separate quote.",
			"You are responsible for what you write on a public charm. Don’t leave anything you wouldn’t say to the next person holding it.",
			"Happiness guarantee: unused product may be returned within 14 days. Activated charms that have entered a public journey cannot be restocked as new."
		]
	},
	shipping: {
		title: "Shipping & returns",
		body: ["Continental USA: 3–7 business days standard, 2–4 with priority. We pack from a single US location.", "Returns: contact hello@tapthat.fans within 14 days. Defective discs are replaced. Custom partner runs over 200 units are made to order and are not returnable unless defective."]
	}
};
function Policy() {
	const { slug } = Route$2.useParams();
	const page = pages[slug];
	if (!page) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-5xl tracking-tight",
			children: page.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 space-y-4 leading-relaxed text-muted",
			children: page.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p))
		})]
	});
}
//#endregion
export { Policy as component };
