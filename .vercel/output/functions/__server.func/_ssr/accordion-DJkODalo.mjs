import { _ as require_jsx_runtime, a as Trigger2, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { o as ChevronDown } from "../_libs/lucide-react.mjs";
import { p as cn } from "./router-DwXmIpui.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/accordion-DJkODalo.js
var import_jsx_runtime = require_jsx_runtime();
function Accordion({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		className: cn("grid gap-4", className),
		...props
	});
}
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		className: cn("overflow-hidden rounded-base border-2 border-border bg-secondary-background shadow-shadow", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
		className: "flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
			className: cn("flex flex-1 items-center justify-between gap-4 bg-main px-4 py-4 text-left text-base font-bold text-main-foreground transition-all [&[data-state=open]>svg]:rotate-180", className),
			...props,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-5 shrink-0 transition-transform duration-200" })]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		className: "overflow-hidden border-t-2 border-border bg-secondary-background text-sm text-foreground data-[state=closed]:animate-none",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("p-4 leading-relaxed", className),
			children
		})
	});
}
//#endregion
export { AccordionTrigger as i, AccordionContent as n, AccordionItem as r, Accordion as t };
