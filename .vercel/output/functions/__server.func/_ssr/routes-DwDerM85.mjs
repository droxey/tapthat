import { a as events, o as faqs, p as products, s as howSteps } from "./catalog-DNGBx7K9.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Button, m as formatMoney } from "./router-DwXmIpui.mjs";
import { t as ProductCard } from "./product-card-BFklbdbH.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-DJkODalo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DwDerM85.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const featured = products.filter((p) => p.featured).slice(0, 4);
	const ticker = [...events, ...events];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-site items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "inline-flex rounded-base border-2 border-border bg-accent px-3 py-1 text-xs font-bold shadow-shadow",
					children: "Charms for cruises, resorts, pineapple weekends"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-5 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl",
					children: [
						"Tap that.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Follow the rest."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-md text-base leading-relaxed",
					children: "A disc you tap. A night you keep. Trade it on the lido, at the palapa, or wherever the pineapple is pointing."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							children: "Shop charms"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/how-it-works",
							children: "How it works"
						})
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rotate-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero.jpg",
					alt: "Pixel cruise deck with a pineapple charm bracelet",
					className: "aspect-[4/3] w-full rounded-base border-2 border-border object-cover shadow-shadow"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "overflow-hidden border-y-4 border-border bg-main py-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max animate-marquee gap-0",
				children: ticker.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "px-8 text-sm font-bold uppercase tracking-wide",
					children: [
						e.name,
						" · ",
						e.city
					]
				}, `${e.name}-${i}`))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-site px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl font-bold tracking-tight",
					children: "Shop"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						children: "All products"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y-4 border-border bg-secondary-background py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-site px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl font-bold tracking-tight",
						children: "Four steps"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
						children: howSteps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-base border-2 border-border bg-background p-5 shadow-shadow",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "inline-flex size-10 items-center justify-center rounded-base border-2 border-border bg-accent font-bold",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-lg font-bold leading-snug",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: s.body
								})
							]
						}, s.n))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/how-it-works",
								children: "Read the guide"
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-3xl px-4 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl font-bold tracking-tight",
					children: "FAQ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "mt-8",
					children: faqs.slice(0, 5).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: f.q,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: f.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: f.a })]
					}, f.q))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/faq",
						className: "text-sm font-bold underline",
						children: "All questions"
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-site rounded-base border-2 border-border bg-accent p-8 shadow-shadow md:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl font-bold tracking-tight md:text-5xl",
						children: "Ready to become a fan?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 max-w-lg text-base",
						children: [
							"Starter packs from ",
							formatMoney(1499),
							". The 10-pack is the weekend move."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-6",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							children: "Shop now"
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { Home as component };
