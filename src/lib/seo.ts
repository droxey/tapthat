import { BRAND } from "@/lib/catalog";

export const SITE_URL = `https://${BRAND.domain}`;

export const DEFAULT_DESCRIPTION =
  "TapThat — tech-powered charms for lifestyle events. Tap any phone, leave a moment, follow the journey.";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og.jpg`;

export const DEFAULT_OG_TITLE = "TapThat — charms for cruises, resorts, pineapple weekends";

export type SocialHeadInput = {
  /** Document <title> and fallback for share title */
  title: string;
  description: string;
  /** Site path ("/shop") or absolute URL */
  path?: string;
  /** Absolute URL or site path ("/products/fans.jpg") */
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
  imageAlt = "TapThat — tech-powered charms for lifestyle events",
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
