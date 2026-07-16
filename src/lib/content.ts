export const site = {
  name: "Scrapiron Studios",
  tagline: "Where Hustle Meets Highlight",
  description:
    "Scrapiron Studios helps sports organizations and athletes build their presence, tell their story, and create more opportunities through websites, branding, photography, video, and digital content.",
  email: "scott@scrapiron.co",
  location: "Illinois, United States",
  url: "https://scrapiron.co",
} as const;

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/scrapironstudios/",
    platform: "instagram",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@ScrapironStudios",
    platform: "youtube",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@scrapironstudios",
    platform: "tiktok",
  },
] as const;

export const navLinks = [
  { label: "Organizations", href: "/organizations" },
  { label: "Athletes", href: "/athletes" },
  { label: "Events", href: "/events" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const images = {
  logo: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_64,w_64,q_auto/13584074/492806_617547.png",
  wordmark: "/scrapiron-wordmark.jpg",
  hero:
    "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_720,w_960,f_auto,q_auto/unsplashcom/photo-1555888081-9f8b9a8cd171",
  og: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto/13584074/824086_858253.png",
} as const;

export type VideoCategory =
  | "Recruiting Films"
  | "Athlete Highlights"
  | "Team Stories"
  | "Event Coverage"
  | "Photography"
  | "Social Edits";

export type PortfolioVideo = {
  id: string;
  title: string;
  description: string;
  category: VideoCategory;
  format: "highlight" | "short";
  start?: number;
};

export const highlightVideos: PortfolioVideo[] = [
  {
    id: "dJydxNuqSmM",
    title: "Game Highlight Reel",
    description:
      "Full-length sports highlight reel with pace, impact, and game-changing moments.",
    category: "Athlete Highlights",
    format: "highlight",
    start: 52,
  },
  {
    id: "5h1gDL4cEvc",
    title: "Sports Highlight Reel",
    description:
      "Dynamic highlight cut built to capture energy and tell the story of the competition.",
    category: "Event Coverage",
    format: "highlight",
  },
];

export const shortVideos: PortfolioVideo[] = [
  {
    id: "EVaC2pzUJ8Q",
    title: "Quick Highlight Short",
    description: "Vertical social clip optimized for Shorts, Reels, and TikTok.",
    category: "Social Edits",
    format: "short",
  },
  {
    id: "fBEfr5uVD9A",
    title: "Player Moment Short",
    description: "Fast-cut athlete moment built for social feeds and shareability.",
    category: "Athlete Highlights",
    format: "short",
  },
  {
    id: "duHxTe7pMyQ",
    title: "Game Action Short",
    description: "Punchy in-game action formatted for mobile viewing.",
    category: "Event Coverage",
    format: "short",
  },
  {
    id: "doDETR6rPVw",
    title: "Sports Clip Short",
    description: "Scroll-stopping sports content in vertical format.",
    category: "Social Edits",
    format: "short",
  },
];

export const allVideos: PortfolioVideo[] = [
  ...highlightVideos,
  ...shortVideos,
];

export const audiencePathways = [
  {
    title: "Build a Stronger Sports Organization",
    description:
      "Websites, branding, content, and ongoing digital support that help you attract athletes, communicate with families, promote programs, and grow registrations.",
    href: "/organizations",
    cta: "Explore Organization Services",
    eyebrow: "Organizations",
  },
  {
    title: "Showcase What You Can Do",
    description:
      "Recruiting videos, highlight reels, player profiles, and sports content designed to help athletes present themselves clearly to coaches and programs.",
    href: "/athletes",
    cta: "Explore Athlete Services",
    eyebrow: "Athletes",
  },
  {
    title: "Capture the Moment and Extend Its Reach",
    description:
      "Photography, video, social content, and promotional coverage for tournaments, showcases, camps, championships, and sports events.",
    href: "/events",
    cta: "Explore Event Coverage",
    eyebrow: "Events",
  },
] as const;

export const organizationServiceGroups = [
  {
    title: "Build Your Presence",
    items: [
      "Website design",
      "Website redesign",
      "Mobile optimization",
      "Registration integration",
      "Scheduling integration",
      "Website management",
    ],
  },
  {
    title: "Tell Your Story",
    items: [
      "Brand identity",
      "Photography",
      "Promotional video",
      "Team and coach profiles",
      "Social media content",
      "Sponsor content",
    ],
  },
  {
    title: "Grow Participation",
    items: [
      "Local SEO",
      "Google Business Profile",
      "Email campaigns",
      "Landing pages",
      "Camp and clinic promotion",
      "Registration campaigns",
      "Analytics and performance reporting",
    ],
  },
] as const;

export const athleteServices = [
  "Full-season highlight reels",
  "Position-specific recruiting films",
  "Skills and training videos",
  "Athlete introduction videos",
  "Social media edits",
  "Film organization and labeling",
  "Player profile pages",
] as const;

export const athleteProcess = [
  {
    step: "01",
    title: "Submit film or schedule filming",
    description:
      "Send existing game film or work with us to schedule a filming session.",
  },
  {
    step: "02",
    title: "Define the athlete and goals",
    description:
      "We identify the athlete, position, season, and what coaches need to see.",
  },
  {
    step: "03",
    title: "Select and organize clips",
    description:
      "We review footage, pull the strongest plays, and structure the film clearly.",
  },
  {
    step: "04",
    title: "Edit the recruiting film",
    description:
      "We cut a clear, well-paced recruiting video or highlight reel around those goals.",
  },
  {
    step: "05",
    title: "Review revisions",
    description:
      "You review a draft. We refine until the film presents the athlete accurately.",
  },
  {
    step: "06",
    title: "Deliver shareable files",
    description:
      "You receive final files and formats ready to share with coaches and programs.",
  },
] as const;

export const eventServices = [
  {
    title: "Tournament coverage",
    description:
      "Photo and video documentation across brackets, fields, and key moments.",
  },
  {
    title: "Athlete clips",
    description:
      "Individual highlight moments athletes and families can share after the event.",
  },
  {
    title: "Event photography",
    description:
      "Action and atmosphere photography that captures competition and community.",
  },
  {
    title: "Promotional content",
    description:
      "Pre-event videos and graphics that help fill teams, seats, and registrations.",
  },
  {
    title: "Sponsor content",
    description:
      "Assets that give sponsors visibility during and after the event.",
  },
  {
    title: "Recap films",
    description:
      "Post-event films that extend the reach of championships, showcases, and camps.",
  },
  {
    title: "Social media packages",
    description:
      "Short-form clips formatted for Instagram, TikTok, and YouTube Shorts.",
  },
] as const;

export const whyScrapironPoints = [
  "We understand athletes, parents, coaches, and directors.",
  "We understand registration cycles and seasonal promotion.",
  "We understand recruiting and highlight content.",
  "We can connect websites, media, and ongoing content.",
  "We can support both the organization and the athletes it serves.",
] as const;

export const growthPartnerInclusions = [
  "Website updates",
  "New landing pages",
  "Registration campaign support",
  "Email content",
  "Social media content",
  "Photography and video",
  "SEO updates",
  "Analytics review",
  "Technical support",
] as const;

export const organizationChallenges = [
  "Outdated websites that do not reflect the quality of the program",
  "Difficult or unclear registration processes",
  "Inconsistent branding across digital channels",
  "Limited photo and video content for promotion",
  "Poor mobile usability for parents and athletes",
  "Confusing schedules and program information",
  "Weak local search visibility",
  "Dependence on social media alone for enrollment",
  "No clear process for website updates",
  "Difficulty promoting camps, clinics, and tryouts",
] as const;

export const contactServiceOptions = [
  "Organization website",
  "Website redesign",
  "Branding",
  "Ongoing digital support",
  "Recruiting video",
  "Athlete highlight reel",
  "Photography",
  "Event coverage",
  "Promotional video",
  "Other",
] as const;

export const finalCtaPaths = [
  {
    title: "Grow a Sports Organization",
    href: "/contact?interest=organization",
    description: "Websites, branding, content, and ongoing digital support.",
  },
  {
    title: "Create an Athlete Highlight Video",
    href: "/contact?interest=athlete",
    description: "Recruiting films and highlight reels built around clear goals.",
  },
  {
    title: "Cover a Sports Event",
    href: "/contact?interest=event",
    description: "Photography, video, and content for tournaments and showcases.",
  },
] as const;

/** Legacy three-service offering preserved for internal reference / JSON-LD breadth */
export const services = [
  {
    title: "Highlight Reel Creation",
    description:
      "Dynamic highlight reels that capture every thrilling moment of your sports events — paced for impact, polished for presentation.",
    features: [
      "Multi-angle game footage editing",
      "Music & sound design",
      "Recruiting-ready exports",
    ],
    icon: "film",
  },
  {
    title: "Social Media Management",
    description:
      "Player-focused video content that drives engagement — plus recurring content packages that open sponsor revenue opportunities.",
    features: [
      "Platform-optimized formats",
      "Consistent posting cadence",
      "Sponsor integration slots",
    ],
    icon: "share",
  },
  {
    title: "Hype Videos",
    description:
      "Pre-event energy that fills seats and builds buzz — perfect for tournaments, camps, fundraisers, and season openers.",
    features: [
      "Event & season promos",
      "Fast-turnaround delivery",
      "Crowd-ready cinematic cuts",
    ],
    icon: "bolt",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Share Your Footage",
    description:
      "Send game film, clips, or raw files. Tell us the story you want told — we'll handle the rest.",
  },
  {
    step: "02",
    title: "We Cut & Craft",
    description:
      "Our editors build pacing, select the best moments, and add music, graphics, and polish.",
  },
  {
    step: "03",
    title: "Review & Refine",
    description:
      "You get a draft to approve. We iterate until the final cut matches your vision.",
  },
  {
    step: "04",
    title: "Publish & Perform",
    description:
      "Delivered in formats ready for social, recruiting, jumbotrons, and sponsor decks.",
  },
] as const;
