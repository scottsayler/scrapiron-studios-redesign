export const site = {
  name: "Scrapiron Studios",
  tagline: "Where Hustle Meets Highlight",
  description:
    "Premier sports video editing — highlight reels, hype videos, and social content that turns game-day moments into momentum for your program.",
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
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export const stats = [
  { value: "100+", label: "Highlight reels delivered" },
  { value: "48hr", label: "Typical turnaround" },
  { value: "3", label: "Core video services" },
  { value: "∞", label: "Replay-worthy moments" },
] as const;

export const highlightVideos = [
  {
    id: "dJydxNuqSmM",
    title: "Game Highlight Reel",
    description:
      "Full-length sports highlight reel with pace, impact, and game-changing moments.",
    start: 52,
  },
  {
    id: "5h1gDL4cEvc",
    title: "Sports Highlight Reel",
    description:
      "Dynamic highlight cut built to capture energy and drive engagement.",
  },
] as const;

export const shortVideos = [
  {
    id: "EVaC2pzUJ8Q",
    title: "Quick Highlight Short",
    description: "Vertical social clip optimized for Shorts, Reels, and TikTok.",
  },
  {
    id: "fBEfr5uVD9A",
    title: "Player Moment Short",
    description: "Fast-cut athlete moment built for social feeds.",
  },
  {
    id: "duHxTe7pMyQ",
    title: "Game Action Short",
    description: "Punchy in-game action formatted for mobile.",
  },
  {
    id: "doDETR6rPVw",
    title: "Sports Clip Short",
    description: "Scroll-stopping sports content in vertical format.",
  },
] as const;

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

export const images = {
  logo: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_64,w_64,q_auto/13584074/492806_617547.png",
  hero:
    "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_720,w_960,f_auto,q_auto/unsplashcom/photo-1555888081-9f8b9a8cd171",
  og: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto/13584074/824086_858253.png",
} as const;
