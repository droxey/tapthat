import { i as __toESM } from "../_runtime.mjs";
import { f as productBySlug, t as NAV } from "./catalog-DNGBx7K9.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { _ as require_jsx_runtime, m as Slot, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link, f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useNavigate, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as Search, n as TriangleAlert, r as ShoppingBag, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, s as DialogTrigger, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-DpWnWZax.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatMoney(cents) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD"
	}).format(cents / 100);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DwXmIpui.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function Wordmark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-base border-2 border-border bg-accent px-2.5 py-1 text-sm font-bold tracking-tight text-accent-foreground shadow-shadow", className),
		children: "TAPTHAT"
	});
}
function LogoLink({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: cn("inline-flex", className),
		"aria-label": "TapThat home",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})
	});
}
var useLocalApp = create()(persist((set, get) => ({
	profile: {
		name: "",
		handle: "",
		instagram: "",
		note: ""
	},
	follows: [],
	memories: [],
	newsletter: [],
	orders: [],
	setProfile: (p) => set({ profile: {
		...get().profile,
		...p
	} }),
	follow: (id) => {
		set({ follows: get().follows.includes(id) ? get().follows.filter((x) => x !== id) : [...get().follows, id] });
	},
	addMemory: (m) => {
		const row = {
			...m,
			id: `local-${Date.now()}`,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		set({ memories: [row, ...get().memories] });
		return row;
	},
	subscribe: (email) => {
		if (!get().newsletter.includes(email)) set({ newsletter: [...get().newsletter, email] });
	},
	placeOrder: (total) => {
		const id = `TT-${Date.now().toString(36).toUpperCase()}`;
		set({ orders: [{
			id,
			at: (/* @__PURE__ */ new Date()).toISOString(),
			total
		}, ...get().orders] });
		return id;
	}
}), { name: "tapthat-local" }));
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-base text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2", {
	variants: {
		variant: {
			default: "bg-main text-main-foreground border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
			accent: "bg-accent text-accent-foreground border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
			outline: "bg-secondary-background text-foreground border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
			ghost: "text-foreground hover:bg-secondary-background",
			link: "text-foreground underline-offset-4 hover:underline",
			noShadow: "bg-main text-main-foreground border-2 border-border"
		},
		size: {
			default: "h-10 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-8",
			icon: "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("flex h-10 w-full rounded-base border-2 border-border bg-secondary-background px-3 py-2 text-sm text-foreground placeholder:text-foreground/40 outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2", className),
		...props
	});
}
function NewsletterForm({ className }) {
	const subscribe = useLocalApp((s) => s.subscribe);
	const [email, setEmail] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
		className: cn("flex items-center gap-2", className),
		onSubmit: (e) => {
			e.preventDefault();
			if (!email.includes("@")) return;
			subscribe(email);
			setDone(true);
		},
		children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-bold",
			children: "You’re on the list."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			type: "email",
			required: true,
			value: email,
			onChange: (e) => setEmail(e.target.value),
			placeholder: "Email",
			"aria-label": "Email",
			className: "min-w-0 flex-1"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "submit",
			variant: "accent",
			children: "Join"
		})] })
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-16 border-t-4 border-border bg-secondary-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-site gap-10 px-4 py-12 md:grid-cols-[1fr_1fr_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm leading-relaxed",
						children: "Tech-powered charms for lifestyle events. Tap any phone, leave a moment, follow the rest."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "mt-4 inline-block text-sm font-bold underline",
						href: "mailto:hello@tapthat.fans",
						children: "hello@tapthat.fans"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "grid grid-cols-2 gap-2 text-sm font-bold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "hover:underline",
							children: "Shop"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app",
							className: "hover:underline",
							children: "App"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/how-it-works",
							className: "hover:underline",
							children: "How it works"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/faq",
							className: "hover:underline",
							children: "FAQ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/partners",
							className: "hover:underline",
							children: "Partner"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/squad",
							className: "hover:underline",
							children: "Squad"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/journal",
							className: "hover:underline",
							children: "Journal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:underline",
							children: "Contact"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold",
						children: "Join the list"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Drops, rooms, nothing else."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterForm, { className: "mt-4" })
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t-2 border-border bg-main",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-site flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm font-bold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" TapThat"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/policies/$slug",
							params: { slug: "privacy" },
							className: "hover:underline",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/policies/$slug",
							params: { slug: "terms" },
							className: "hover:underline",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/policies/$slug",
							params: { slug: "shipping" },
							className: "hover:underline",
							children: "Shipping"
						})
					]
				})]
			})
		})]
	});
}
var useCart = create()(persist((set, get) => ({
	lines: [],
	add: (line, qty = 1) => {
		if (get().lines.find((l) => l.slug === line.slug && l.variantId === line.variantId)) {
			set({ lines: get().lines.map((l) => l.slug === line.slug && l.variantId === line.variantId ? {
				...l,
				qty: l.qty + qty
			} : l) });
			return;
		}
		set({ lines: [...get().lines, {
			...line,
			qty
		}] });
	},
	setQty: (slug, variantId, qty) => {
		if (qty <= 0) {
			set({ lines: get().lines.filter((l) => !(l.slug === slug && l.variantId === variantId)) });
			return;
		}
		set({ lines: get().lines.map((l) => l.slug === slug && l.variantId === variantId ? {
			...l,
			qty
		} : l) });
	},
	remove: (slug, variantId) => set({ lines: get().lines.filter((l) => !(l.slug === slug && l.variantId === variantId)) }),
	clear: () => set({ lines: [] })
}), { name: "tapthat-cart" }));
function cartCount(lines) {
	return lines.reduce((n, l) => n + l.qty, 0);
}
function cartSubtotal(lines) {
	return lines.reduce((n, l) => {
		const p = productBySlug(l.slug);
		return n + (p ? p.price * l.qty : 0);
	}, 0);
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
function SheetContent({ className, children, side = "right", title, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-overlay" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		className: cn("fixed top-0 z-50 flex h-full w-[min(100%,20rem)] flex-col border-2 border-border bg-secondary-background p-6", side === "right" ? "right-0 border-l-4" : "left-0 border-r-4", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "text-lg font-bold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "icon",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})
			})]
		}), children]
	})] });
}
function SiteHeader() {
	const count = useCart((s) => cartCount(s.lines));
	const [q, setQ] = (0, import_react.useState)("");
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const primary = NAV.slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b-4 border-border bg-secondary-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-site items-center justify-between gap-4 px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoLink, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 text-sm font-bold md:flex",
					children: primary.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "hover:underline",
						activeProps: { className: "underline" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "icon",
							"aria-label": "Search",
							className: "hidden md:inline-flex",
							onClick: () => setSearchOpen((v) => !v),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "icon",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cart",
								"aria-label": "Bag",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative inline-flex",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4" }), count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -right-2 -top-2 grid size-4 place-items-center rounded-base border-2 border-border bg-accent text-[10px] leading-none",
										children: count
									}) : null]
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "icon",
								className: "md:hidden",
								"aria-label": "Menu",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
							title: "Menu",
							side: "right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "flex flex-col gap-2",
								children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: item.to,
										className: "rounded-base border-2 border-border bg-main px-3 py-3 font-bold shadow-shadow",
										children: item.label
									})
								}, item.to))
							})
						})] })
					]
				})
			]
		}), searchOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mx-auto flex max-w-site gap-2 border-t-2 border-border px-4 py-3",
			onSubmit: (e) => {
				e.preventDefault();
				navigate({
					to: "/shop",
					search: { q }
				});
				setSearchOpen(false);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				autoFocus: true,
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search charms, packs, hats…",
				"aria-label": "Search the shop"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				children: "Go"
			})]
		}) : null]
	});
}
var styles_default = "/assets/styles-Bus3p-R2.css";
var APP_NAME = "TapThat";
var Route$15 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "TapThat — tech-powered charms for lifestyle events. Tap any phone, leave a moment, follow the journey."
			},
			{
				name: "theme-color",
				content: "#c9e0fe"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-screen bg-background text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$14 = () => import("./routes-DwDerM85.mjs");
var Route$14 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./cart-CxtXQpGO.mjs");
var Route$13 = createFileRoute("/cart")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./contact-B2HVtJjF.mjs");
var Route$12 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./faq-CK_ieCTw.mjs");
var Route$11 = createFileRoute("/faq")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./how-it-works-CWFDRmBH.mjs");
var Route$10 = createFileRoute("/how-it-works")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./ios-A3nK1IDA.mjs");
var Route$9 = createFileRoute("/ios")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./partners-DQROidkT.mjs");
var Route$8 = createFileRoute("/partners")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./squad-BjR-C13x.mjs");
var Route$7 = createFileRoute("/squad")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./app-DJ52Pum9.mjs");
var Route$6 = createFileRoute("/app/")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("../_charmId-BQMIneUj.mjs");
var Route$5 = createFileRoute("/app/$charmId")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./journal-D75TVu5i.mjs");
var Route$4 = createFileRoute("/journal/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("../_slug-rPBIeEwO.mjs");
var Route$3 = createFileRoute("/journal/$slug")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("../_slug-ePsKSp5H.mjs");
var Route$2 = createFileRoute("/policies/$slug")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./shop-CKQX5-7c.mjs");
var Route$1 = createFileRoute("/shop/")({
	validateSearch: (s) => ({ q: typeof s.q === "string" ? s.q : void 0 }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_slug-CeZ6BsSl.mjs");
var Route = createFileRoute("/shop/$slug")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$14.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$15
});
var CartRoute = Route$13.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$15
});
var ContactRoute = Route$12.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$15
});
var FaqRoute = Route$11.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$15
});
var HowItWorksRoute = Route$10.update({
	id: "/how-it-works",
	path: "/how-it-works",
	getParentRoute: () => Route$15
});
var IosRoute = Route$9.update({
	id: "/ios",
	path: "/ios",
	getParentRoute: () => Route$15
});
var PartnersRoute = Route$8.update({
	id: "/partners",
	path: "/partners",
	getParentRoute: () => Route$15
});
var SquadRoute = Route$7.update({
	id: "/squad",
	path: "/squad",
	getParentRoute: () => Route$15
});
var AppIndexRoute = Route$6.update({
	id: "/app/",
	path: "/app/",
	getParentRoute: () => Route$15
});
var AppCharmIdRoute = Route$5.update({
	id: "/app/$charmId",
	path: "/app/$charmId",
	getParentRoute: () => Route$15
});
var JournalIndexRoute = Route$4.update({
	id: "/journal/",
	path: "/journal/",
	getParentRoute: () => Route$15
});
var JournalSlugRoute = Route$3.update({
	id: "/journal/$slug",
	path: "/journal/$slug",
	getParentRoute: () => Route$15
});
var PoliciesSlugRoute = Route$2.update({
	id: "/policies/$slug",
	path: "/policies/$slug",
	getParentRoute: () => Route$15
});
var ShopIndexRoute = Route$1.update({
	id: "/shop/",
	path: "/shop/",
	getParentRoute: () => Route$15
});
var rootRouteChildren = {
	IndexRoute,
	CartRoute,
	ContactRoute,
	FaqRoute,
	HowItWorksRoute,
	IosRoute,
	PartnersRoute,
	SquadRoute,
	AppCharmIdRoute,
	JournalSlugRoute,
	PoliciesSlugRoute,
	ShopSlugRoute: Route.update({
		id: "/shop/$slug",
		path: "/shop/$slug",
		getParentRoute: () => Route$15
	}),
	AppIndexRoute,
	JournalIndexRoute,
	ShopIndexRoute
};
var routeTree = Route$15._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-xl px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: "This room is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "That page isn’t on TapThat."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-6 inline-block text-sm underline-offset-4 hover:underline",
				children: "Back to the floor"
			})
		]
	});
}
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFound
	});
}
//#endregion
export { Route$3 as a, cartSubtotal as c, Button as d, useLocalApp as f, Route$2 as i, useCart as l, formatMoney as m, Route as n, Route$5 as o, cn as p, Route$1 as r, cartCount as s, router_exports as t, Input as u };
