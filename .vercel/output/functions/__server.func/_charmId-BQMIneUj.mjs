import { i as __toESM } from "./_runtime.mjs";
import { l as memoriesFor, r as charmById } from "./_ssr/catalog-DNGBx7K9.mjs";
import { _ as require_jsx_runtime, v as require_react } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { R as notFound, _ as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { d as Button, f as useLocalApp, o as Route$5, u as Input } from "./_ssr/router-DwXmIpui.mjs";
import { t as Badge } from "./_ssr/badge-DgY73l9b.mjs";
import { t as Label } from "./_ssr/label-B9laxGvI.mjs";
import { t as Textarea } from "./_ssr/textarea-BchiSn3k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_charmId-BQMIneUj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CharmPage() {
	const { charmId } = Route$5.useParams();
	const charm = charmById(charmId);
	if (!charm) throw notFound();
	const seeded = memoriesFor(charm.id);
	const local = useLocalApp((s) => s.memories).filter((m) => m.charmId === charm.id);
	const follow = useLocalApp((s) => s.follow);
	const follows = useLocalApp((s) => s.follows);
	const addMemory = useLocalApp((s) => s.addMemory);
	const profile = useLocalApp((s) => s.profile);
	const following = follows.includes(charm.id);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [note, setNote] = (0, import_react.useState)("");
	const [place, setPlace] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app",
						className: "hover:text-fg",
						children: "App"
					}),
					" ",
					"/ ",
					charm.code
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 overflow-hidden rounded-base border-2 border-border bg-secondary-background shadow-shadow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: charm.image,
					alt: charm.name,
					className: "aspect-[16/9] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-4xl tracking-tight",
								children: charm.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted",
								children: [
									"Started ",
									charm.origin,
									" · ",
									charm.holders,
									" holders · ",
									charm.events,
									" rooms"
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: charm.visibility === "private" ? "accent" : "muted",
								children: charm.visibility
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => setOpen((v) => !v),
								children: "Simulate tap"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => follow(charm.id),
								children: following ? "Following" : "Follow journey"
							})]
						}),
						open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-6 grid gap-3 rounded-lg rounded-base border-2 border-border bg-background shadow-shadow p-4",
							onSubmit: (e) => {
								e.preventDefault();
								if (!note.trim()) return;
								addMemory({
									charmId: charm.id,
									note: note.trim(),
									place: place.trim() || "Somewhere tonight"
								});
								setNote("");
								setPlace("");
								setOpen(false);
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [
										"Leaving a moment as ",
										profile.name || "a fan",
										profile.handle ? ` ${profile.handle}` : "",
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "place",
										children: "Place"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "place",
										value: place,
										onChange: (e) => setPlace(e.target.value),
										placeholder: "Roof Season, Marble Afters…"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "note",
										children: "Note"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "note",
										value: note,
										onChange: (e) => setNote(e.target.value),
										placeholder: "Leave something for the next holder.",
										required: true
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									children: "Add moment"
								})
							]
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-10 space-y-6",
				children: [local.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border border-accent/40 bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-accent",
							children: "Your tap"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 leading-relaxed",
							children: m.note
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-subtle",
							children: [
								m.place,
								" · ",
								new Date(m.at).toLocaleString()
							]
						})
					]
				}, m.id)), seeded.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-base border-2 border-border bg-secondary-background shadow-shadow p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: m.avatar,
								alt: "",
								className: "size-10 object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm",
								children: [
									m.author,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: m.handle
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-subtle",
								children: [
									m.place,
									" · ",
									m.event
								]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 leading-relaxed",
							children: m.note
						}),
						m.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: m.photo,
							alt: "",
							className: "mt-4 aspect-[16/9] w-full object-cover"
						}) : null
					]
				}, m.id))]
			})
		]
	});
}
//#endregion
export { CharmPage as component };
