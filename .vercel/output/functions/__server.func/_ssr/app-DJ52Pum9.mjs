import { c as memories, i as charms } from "./catalog-DNGBx7K9.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Button, f as useLocalApp, u as Input } from "./router-DwXmIpui.mjs";
import { t as Badge } from "./badge-DgY73l9b.mjs";
import { t as Label } from "./label-B9laxGvI.mjs";
import { t as Textarea } from "./textarea-BchiSn3k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-DJ52Pum9.js
var import_jsx_runtime = require_jsx_runtime();
function AppHome() {
	const { profile, setProfile, follows } = useLocalApp();
	const feed = [...memories].sort((a, b) => +new Date(b.at) - +new Date(a.at));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.28em] text-subtle",
					children: "Web app"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-5xl tracking-tight",
					children: "The floor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted",
					children: "Public moments from charms in the wild. Tap a disc in real life — or simulate a tap from a charm page."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/ios",
					children: "iOS app"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-8 lg:grid-cols-[1fr_20rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: feed.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/app/$charmId",
					params: { charmId: m.charmId },
					className: "flex min-w-0 gap-4 overflow-hidden rounded-base border-2 border-border bg-secondary-background shadow-shadow p-4 hover:border-fg/25",
					children: [m.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: m.photo,
						alt: "",
						className: "hidden size-24 object-cover sm:block"
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: m.avatar,
									alt: "",
									className: "size-8 object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm",
									children: [
										m.author,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted",
											children: m.handle
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-fg",
								children: m.note
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs uppercase tracking-wider text-subtle",
								children: [
									m.place,
									" · ",
									m.event
								]
							})
						]
					})]
				}, m.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-base border-2 border-border bg-secondary-background shadow-shadow p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl",
							children: "Your social card"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: "Shown when someone taps a charm you activated."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-4 grid gap-3",
							onSubmit: (e) => {
								e.preventDefault();
								const fd = new FormData(e.currentTarget);
								setProfile({
									name: String(fd.get("name") ?? ""),
									handle: String(fd.get("handle") ?? ""),
									instagram: String(fd.get("ig") ?? ""),
									note: String(fd.get("note") ?? "")
								});
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "name",
										children: "Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "name",
										name: "name",
										defaultValue: profile.name
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "handle",
										children: "Handle"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "handle",
										name: "handle",
										defaultValue: profile.handle,
										placeholder: "@you"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "ig",
										children: "Instagram"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "ig",
										name: "ig",
										defaultValue: profile.instagram
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "note",
										children: "Note on your card"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "note",
										name: "note",
										defaultValue: profile.note
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									size: "sm",
									children: "Save card"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-base border-2 border-border bg-secondary-background shadow-shadow p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl",
						children: "Live charms"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: charms.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/$charmId",
							params: { charmId: c.id },
							className: "flex items-center justify-between gap-2 px-1 py-2 hover:bg-elevated",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: c.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [follows.includes(c.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Following" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: c.visibility === "private" ? "accent" : "muted",
									children: c.visibility
								})]
							})]
						}) }, c.id))
					})]
				})]
			})]
		})]
	});
}
//#endregion
export { AppHome as component };
