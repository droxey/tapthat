import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { p as cn } from "./router-DwXmIpui.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-DgY73l9b.js
var import_jsx_runtime = require_jsx_runtime();
function Badge({ className, tone = "muted", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-base border-2 border-border px-2.5 py-0.5 text-xs font-bold", tone === "muted" && "bg-secondary-background text-foreground", tone === "accent" && "bg-accent text-accent-foreground", tone === "solid" && "bg-main text-main-foreground", className),
		...props
	});
}
//#endregion
export { Badge as t };
