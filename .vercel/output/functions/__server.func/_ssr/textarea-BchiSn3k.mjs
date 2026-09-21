import "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { p as cn } from "./router-DwXmIpui.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-24 w-full rounded-base border-2 border-border bg-secondary-background px-3 py-2 text-sm text-foreground placeholder:text-foreground/40 outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2", className),
		...props
	});
}
//#endregion
export { Textarea as t };
