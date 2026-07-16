import type { Metadata } from "next";
import {
  highlightVideos,
  images,
  shortVideos,
  site,
  socialLinks,
} from "@/lib/content";

export const seo = {
  title: `${site.name} | Digital Growth & Media for Sports Trainers`,
  description:
    "Scrapiron Studios helps sports trainers build businesses that grow through websites, ongoing marketing, content, booking support, and athlete recruiting media.",
  keywords: [
    "website for sports trainers",
    "sports trainer website design",
    "marketing for sports trainers",
    "private coach website",
    "soccer trainer website",
    "basketball trainer website",
    "baseball instructor website",
    "hockey trainer website",
    "tennis coach website",
    "social media content for trainers",
    "sports website design",
    "youth sports website design",
    "sports marketing",
    "sports branding",
    "recruiting highlight videos",
    "athlete recruiting videos",
    "sports videography",
    "sports photography",
    "tournament photography",
    "sports event video",
    "youth sports marketing",
    "sports organization website",
    "athletic training website",
    "Illinois sports videography",
    "Scrapiron Studios",
  ],
} as const;

export function createMetadata({
  title,
  description = seo.description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const canonicalPath = path === "/" ? "" : path;
  const url = `${site.url}${canonicalPath}`;
  const ogImage = images.og;
  const isHome = !path || path === "" || path === "/";
  const displayTitle = isHome
    ? (title ?? seo.title)
    : `${title} | ${site.name}`;

  return {
    metadataBase: new URL(site.url),
    title: isHome
      ? {
          default: seo.title,
          template: `%s | ${site.name}`,
        }
      : title,
    description,
    keywords: [...seo.keywords],
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    category: "Sports Digital and Creative Services",
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
      title: displayTitle,
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
      title: displayTitle,
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
      "Marketing for sports trainers",
      "Private coach websites",
      "Trainer booking and registration",
      "Local SEO for sports trainers",
      "Sports website design",
      "Sports branding",
      "Athlete recruiting videos",
      "Sports highlight reels",
      "Sports photography",
      "Sports event coverage",
      "Youth sports marketing",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sports Digital and Creative Services",
      itemListElement: [
        {
          "@type": "Offer",
          position: 1,
          itemOffered: {
            "@type": "Service",
            name: "Trainer Growth System",
            description:
              "Websites, website care, ongoing growth marketing, and content support for independent sports trainers and small academies.",
            provider: { "@id": `${site.url}/#organization` },
          },
        },
        {
          "@type": "Offer",
          position: 2,
          itemOffered: {
            "@type": "Service",
            name: "Athlete Recruiting Videos and Highlight Reels",
            description:
              "Recruiting films, highlight reels, and athlete content for coaches and programs.",
            provider: { "@id": `${site.url}/#organization` },
          },
        },
        {
          "@type": "Offer",
          position: 3,
          itemOffered: {
            "@type": "Service",
            name: "Sports Organization Digital Services",
            description:
              "Websites, branding, content, and ongoing digital support for sports organizations.",
            provider: { "@id": `${site.url}/#organization` },
          },
        },
        {
          "@type": "Offer",
          position: 4,
          itemOffered: {
            "@type": "Service",
            name: "Sports Event Coverage",
            description:
              "Photography, video, and promotional content for tournaments, camps, and showcases.",
            provider: { "@id": `${site.url}/#organization` },
          },
        },
      ],
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
