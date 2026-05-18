import type { Metadata } from "next";

export const BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL ?? "https://hippoprocurement.com";

export const DEFAULT_DESCRIPTION =
  "Hippo Procurement Ltd sources medical consumables and high-demand products directly from factories for pharmacies, clinics, and SMEs in Nigeria & Ghana — 25–40% cheaper stock with 10–14 day delivery, no middlemen.";

export const DEFAULT_OG_IMAGE = "/og-default.png";

const SITE_NAME = "Hippo Procurement Ltd";

interface BuildMetadataParams {
  title: string;
  description?: string;
  path: string;
  image?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  image,
}: BuildMetadataParams): Metadata {
  const desc = description ?? DEFAULT_DESCRIPTION;
  const ogImage = image ?? DEFAULT_OG_IMAGE;
  const canonicalUrl = `${BASE_URL}${path}`;

  return {
    title,
    description: desc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description: desc,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [ogImage],
    },
  };
}
