import type { Metadata } from "next";
import {
  highlightVideos,
  images,
  services,
  shortVideos,
  site,
  socialLinks,
} from "@/lib/content";

export const seo = {
  title: `${site.name} | Sports Video Editing & Highlight Reels`,
  description:
    "Scrapiron Studios creates sports highlight reels, hype videos, and social content for teams and athletes in Illinois and nationwide. Where hustle meets highlight.",
  keywords: [
    "sports video editing",
    "highlight reel creation",
    "sports highlight videos",
    "hype video production",
    "athlete spotlight videos",
    "team highlight reels",
    "social media sports content",
    "recruiting highlight videos",
    "Illinois sports videography",
    "Scrapiron Studios",
  ],
} as const;

export function createMetadata({
  title = seo.title,
  description = seo.description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const url = `${site.url}${path}`;
  const ogImage = images.og;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: seo.title,
      template: `%s | ${site.name}`,
    },
    description,
    keywords: [...seo.keywords],
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    category: "Sports Video Production",
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    icons: {
      icon: images.logo,
      apple: images.logo,
      shortcut: images.logo,
    },
  };
}

export function createJsonLd() {
  const sameAs = socialLinks.map((link) => link.href);

  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    description: seo.description,
    url: site.url,
    logo: images.logo,
    image: images.og,
    email: site.email,
    slogan: site.tagline,
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "IL",
      addressCountry: "US",
    },
    sameAs,
    knowsAbout: [
      "Sports video editing",
      "Highlight reel production",
      "Hype video production",
      "Social media video content",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sports Video Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: {
            "@id": `${site.url}/#organization`,
          },
        },
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    description: seo.description,
    url: site.url,
    publisher: {
      "@id": `${site.url}/#organization`,
    },
    inLanguage: "en-US",
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/#webpage`,
    url: site.url,
    name: seo.title,
    description: seo.description,
    isPartOf: {
      "@id": `${site.url}/#website`,
    },
    about: {
      "@id": `${site.url}/#organization`,
    },
    inLanguage: "en-US",
  };

  const portfolioVideos = [...highlightVideos, ...shortVideos].map((video) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    uploadDate: "2024-01-01",
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    publisher: {
      "@id": `${site.url}/#organization`,
    },
  }));

  return [organization, website, webPage, ...portfolioVideos];
}
