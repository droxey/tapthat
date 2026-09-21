import { BRAND } from "@/lib/catalog";

export const SITE_URL = `https://${BRAND.domain}`;

export const DEFAULT_DESCRIPTION =
  "Tap that. Follow the rest. Charms for cruises, resorts, pineapple weekends.";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og.jpg`;

/** Homepage / root document title */
export const HOME_TITLE = `${BRAND.name} — ${BRAND.tagline}`;

export const DEFAULT_OG_TITLE = "TapThat. Charms for cruises, resorts, pineapple weekends.";

/** Browser tab + OG title: "Page — short line | TapThat" (or "Page | TapThat"). */
export function pageTitle(page: string, line?: string) {
  if (line?.trim()) return `${page} — ${line.trim()} | ${BRAND.name}`;
  return `${page} | ${BRAND.name}`;
}

export function notFoundTitle() {
  return pageTitle("Not found");
}

export type SocialHeadInput = {
  /** Document <title> and fallback for share title */
  title: string;
  description: string;
  /** Site path ("/shop") or absolute URL */
  path?: string;
  /** Absolute URL or site path ("/products/ghost.jpg") */
  image?: string;
  imageAlt?: string;
  type?: string;
  /** Override share title when it should differ from document title */
  shareTitle?: string;
};

function absolutize(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

/** Open Graph + Twitter meta and a canonical link for a route. */
export function socialHead({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  imageAlt = "TapThat. Charms for cruises, resorts, pineapple weekends.",
  type = "website",
  shareTitle,
}: SocialHeadInput) {
  const url = absolutize(path);
  const imageUrl = absolutize(image);
  const ogTitle = shareTitle ?? title;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: type },
      { property: "og:site_name", content: BRAND.name },
      { property: "og:url", content: url },
      { property: "og:title", content: ogTitle },
      { property: "og:description", content: description },
      { property: "og:image", content: imageUrl },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: ogTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:alt", content: imageAlt },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
