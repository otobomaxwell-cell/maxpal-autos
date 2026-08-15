import type { Metadata } from "next";
import { business } from "./business";

export const SITE_NAME = business.shortName;

export const DEFAULT_DESCRIPTION =
  "Priority vehicle repairs in Derby, DE24. Same-day and next-available appointments for brakes, suspension, starting problems and more. Workshop and selected mobile mechanic service.";

// Set once real production domain exists; falls back to localhost so
// metadataBase never throws in dev or before the site is deployed.
export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const DEFAULT_OG_IMAGE = "/og-image.png";

export type BuildSeoMetadataProps = {
  readonly title?: string;
  readonly description?: string;
  readonly path: string;
  readonly image?: string;
  readonly icons?: Metadata["icons"];
  readonly noIndex?: boolean;
};

export function buildSeoMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  icons,
  noIndex = false,
}: BuildSeoMetadataProps): Metadata {
  const pageTitle = title ? `${title} – ${SITE_NAME}` : SITE_NAME;
  const pageDescription = description ?? DEFAULT_DESCRIPTION;
  const url = `${BASE_URL}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    ...(icons && { icons }),
  };
}
