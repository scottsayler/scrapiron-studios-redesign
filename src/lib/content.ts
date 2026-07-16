export const site = {
  name: "Scrapiron Studios",
  tagline: "Where Hustle Meets Highlight",
  description:
    "Scrapiron Studios helps sports trainers build businesses that grow through websites, ongoing marketing, content, and athlete media.",
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
  { label: "For Trainers", href: "/trainer-growth-system" },
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
    title: "Build a Training Business That Grows",
    description:
      "Connect your website, social media, search visibility, booking, programs, and content through the Trainer Growth System.",
    href: "/trainer-growth-system",
    cta: "Explore the Trainer Growth System",
    eyebrow: "Trainers & academies",
  },
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

export const homepageOutcomes = [
  {
    title: "Build Your Home Base",
    description:
      "Create one professional destination for programs, proof, booking, and registration.",
    href: "/trainer-growth-system#home-base",
    cta: "See How the Home Base Works",
  },
  {
    title: "Grow Your Training Business",
    description:
      "Connect your website, social media, search presence, and seasonal promotions.",
    href: "/trainer-growth-system#offers",
    cta: "Explore Growth Services",
  },
  {
    title: "Showcase Your Athletes",
    description:
      "Create recruiting videos, highlight reels, photography, and athlete media.",
    href: "/athletes",
    cta: "View Athlete Media Services",
  },
] as const;

export const trainerChallenges = [
  "Parents cannot quickly understand who you work with or which programs fit.",
  "Programs, pricing, locations, and schedules are difficult to find in one place.",
  "Social content creates interest but does not always give families a clear next step.",
  "Camps and clinics are promoted through scattered posts, links, and messages.",
  "Booking often requires unnecessary back-and-forth communication.",
  "Testimonials and athlete results get buried in social feeds.",
  "Local families may have difficulty finding your business through Google.",
  "Marketing slows down when coaching and operations become busy.",
] as const;

export const socialMediaObjection = {
  question: "I already have Facebook and Instagram. Why do I need a website?",
  distinction:
    "Social media helps people discover you. Your website helps them choose you.",
  introduction:
    "Facebook, Instagram, TikTok, and YouTube are valuable ways to share your work and help families discover you. Your website gives that attention somewhere to go.",
  explanation:
    "A parent may find you through a reel, a local search, or a referral. Your home base quickly answers who you train, where sessions happen, what programs are available, what others say, and how to book.",
  ownership:
    "Social feeds are built for ongoing content. Your website organizes the information families need to make a decision, creates one booking path, captures local search traffic, and gives you a destination you own.",
} as const;

export const trainerFrameworkStages = [
  {
    title: "Build",
    description: "Create your professional home base.",
  },
  {
    title: "Grow",
    description:
      "Attract athletes and promote lessons, camps, clinics, and programs.",
  },
  {
    title: "Showcase",
    description:
      "Capture training, athlete development, testimonials, expertise, and results.",
  },
  {
    title: "Scale",
    description:
      "Expand programs, locations, visibility, and brand across a growing business.",
  },
] as const;

export const trainerGrowthOffers = [
  {
    id: "build-your-home-base",
    title: "Build Your Home Base",
    type: "One-time website project",
    bestFor:
      "Independent trainers and academies that need a professional, clear place to send interested families.",
    description:
      "Create one professional destination where parents and athletes can understand your programs, trust your experience, and take the next step.",
    outcomes: [
      "Explain who you train, what you offer, and where sessions happen",
      "Show credentials, testimonials, athlete results, photos, and footage",
      "Connect inquiry forms, booking, registration, maps, and program pages",
      "Establish a mobile-first foundation for search and analytics",
      "Get practical support for launch, domains, hosting migration, and Google visibility",
    ],
    cta: "Build Your Home Base",
    service: "Trainer website",
  },
  {
    id: "website-care",
    title: "Website Care",
    type: "Monthly website support",
    bestFor:
      "Trainers who want their website managed without carrying the technical workload.",
    description:
      "Keep your website current, secure, and ready to turn new interest into booked training.",
    outcomes: [
      "Managed hosting, security monitoring, backups, and platform updates",
      "Uptime, performance, form, and booking-link checks",
      "Minor website edits and basic technical support",
      "Domain support and analytics monitoring",
    ],
    cta: "Discuss Website Care",
    service: "Website Care",
  },
  {
    id: "growth",
    title: "Growth",
    type: "Monthly marketing service",
    bestFor:
      "Active trainers who regularly promote lessons, camps, clinics, and seasonal programs.",
    description:
      "Stay visible, promote your programs, and create a more consistent path from social media interest to athlete inquiries.",
    outcomes: [
      "Everything in Website Care",
      "Program updates, landing pages, and seasonal launches",
      "Local SEO and Google Business Profile improvements",
      "Review, testimonial, blog, news, and athlete spotlight support",
      "Promotional graphics, social assets, and short-form video edits",
      "Performance reporting and conversion-path improvements",
    ],
    cta: "Talk About Growth",
    service: "Growth",
  },
  {
    id: "growth-partnership",
    title: "Growth Partnership",
    type: "Ongoing growth and content partnership",
    bestFor:
      "Established trainers, academies, multi-coach businesses, and growing locations.",
    description:
      "Work with one consistent growth and content partner instead of managing multiple freelancers, vendors, and disconnected projects.",
    outcomes: [
      "Everything in Growth",
      "Recurring content days, photography, video, reels, and short-form content",
      "Seasonal campaign, email, camp, and clinic launch support",
      "Parent testimonials and athlete success stories",
      "Support for multiple coaches, programs, and locations",
      "Priority support, advanced reporting, and quarterly growth planning",
    ],
    cta: "Discuss a Growth Partnership",
    service: "Growth Partnership",
  },
] as const;

export const recruitingMediaOptions = [
  {
    title: "Film Edit",
    description:
      "The athlete provides existing game footage. We review, select, identify, and edit the strongest clips into a clear recruiting video with athlete and contact information.",
    includes: [
      "Footage review and clip selection",
      "Player identification and editing",
      "Titles, athlete details, and contact information",
      "Final recruiting video",
    ],
  },
  {
    title: "Training Session Package",
    description:
      "We film a dedicated skills or training session and shape the footage into useful recruiting and social media assets.",
    includes: [
      "On-site filming and skills demonstrations",
      "Training footage and coach feedback",
      "Recruiting video",
      "Short-form social clip",
    ],
  },
  {
    title: "Full Recruiting Media Package",
    description:
      "A broader athlete media package combining game film, a dedicated session, photography, and profile content.",
    includes: [
      "Game-film edit and dedicated skills session",
      "Athlete interview and photography",
      "Recruiting profile page",
      "Multiple social clips and additional revisions",
    ],
  },
] as const;

export const sportsServed = [
  "Soccer trainers",
  "Basketball trainers",
  "Baseball instructors",
  "Softball instructors",
  "Hockey skills coaches",
  "Tennis professionals",
  "Volleyball trainers",
  "Football position coaches",
  "Strength and conditioning coaches",
  "Speed and agility trainers",
  "Small sports academies",
  "Multi-coach training businesses",
] as const;

export const seasonalOpportunities = [
  {
    season: "Winter",
    items: [
      "Website updates",
      "Offseason training promotion",
      "Recruiting videos",
      "Indoor training content",
      "Program planning",
    ],
  },
  {
    season: "Spring",
    items: [
      "Summer camp registration",
      "Clinic launches",
      "Spring training content",
      "Local SEO updates",
      "Schedule updates",
    ],
  },
  {
    season: "Summer",
    items: [
      "Camps",
      "Media days",
      "Athlete spotlights",
      "Photography and training footage",
      "Fall program promotion",
    ],
  },
  {
    season: "Fall",
    items: [
      "Recruiting media",
      "Team and athlete content",
      "Winter registration",
      "Website updates",
      "Year-end planning",
    ],
  },
] as const;

export const audienceSegments = [
  {
    title: "For Trainers",
    items: [
      "Trainer Growth System",
      "Websites and Website Care",
      "Growth and Growth Partnership",
      "Social content, photography, video, and SEO",
      "Camp and clinic promotion",
    ],
  },
  {
    title: "For Athletes",
    items: [
      "Recruiting videos and highlight reels",
      "Skills videos and profile pages",
      "Sports photography and social edits",
    ],
  },
  {
    title: "For Teams, Clubs, and Academies",
    items: [
      "Websites and registration pages",
      "Media days, photography, and hype videos",
      "Social content, sponsor graphics, and camp promotion",
    ],
  },
  {
    title: "For Tournaments and Events",
    items: [
      "Event websites and registration support",
      "Photography and video coverage",
      "Promotional graphics and social content",
    ],
  },
] as const;

export const trainerGrowthFaqs = [
  {
    question: "I already have Facebook and Instagram. Why do I need a website?",
    answer:
      "Social media helps people discover you. Your website helps them choose you. It organizes the programs, locations, proof, pricing or inquiry options, and booking steps families need after seeing a post or receiving a referral.",
  },
  {
    question: "Is the website a one-time project?",
    answer:
      "Yes. Build Your Home Base is an initial one-time project. Website Care, Growth, and Growth Partnership are separate ongoing services.",
  },
  {
    question: "Do I have to purchase a monthly plan?",
    answer:
      "No. We can discuss the right launch and handoff for your business. Monthly support is available when you want Scrapiron to keep the website and marketing moving.",
  },
  {
    question: "Does Scrapiron Studios provide hosting?",
    answer:
      "Yes. Managed hosting can be included with Website Care and ongoing services, along with updates, backups, monitoring, and support.",
  },
  {
    question: "Can you update my current website?",
    answer:
      "Yes. We can review your current site and recommend focused updates or a rebuild based on its platform, condition, and your goals.",
  },
  {
    question: "Can you connect my existing booking platform?",
    answer:
      "Usually, yes. The goal is to give families one clear path to the booking or registration tools you already use.",
  },
  {
    question: "Can you help promote camps and clinics?",
    answer:
      "Yes. Growth services can support landing pages, registration paths, promotional assets, content, search updates, and seasonal launches.",
  },
  {
    question: "Do you manage social media accounts?",
    answer:
      "Social account management is scoped based on the trainer’s needs. Scrapiron can create the strategy and content assets that connect social activity to the website and programs.",
  },
  {
    question: "Do you create content for trainers?",
    answer:
      "Yes. Options include photography, training footage, short-form video, promotional graphics, testimonials, athlete spotlights, and program content.",
  },
  {
    question: "Do you film training sessions?",
    answer:
      "Yes. Training sessions can be filmed for trainer marketing, athlete development stories, skills videos, and recruiting media.",
  },
  {
    question: "How do athlete recruiting videos work?",
    answer:
      "Athletes can provide existing film or schedule a dedicated session. The project is scoped around the footage available, the athlete’s position, and the media they need.",
  },
  {
    question: "Can I refer athletes to Scrapiron Studios?",
    answer:
      "Yes. Trainers can connect athletes and families directly with Scrapiron for recruiting media. Any future referral program terms will be shared separately once finalized.",
  },
  {
    question: "Do you work with academies and multiple coaches?",
    answer:
      "Yes. Growth Partnership is designed for established academies, multi-coach businesses, multiple programs, and multiple locations.",
  },
  {
    question: "What sports do you support?",
    answer:
      "Scrapiron supports individual and team-sport trainers, including soccer, basketball, baseball, softball, hockey, tennis, volleyball, football, strength, speed, and agility.",
  },
  {
    question: "Do recruiting videos guarantee college interest?",
    answer:
      "No. Recruiting media helps athletes present their skills and information clearly. It does not guarantee exposure, scholarships, offers, roster opportunities, or coach responses.",
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
  "Trainer website",
  "Website Care",
  "Growth",
  "Growth Partnership",
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
    title: "Explore the Trainer Growth System",
    href: "/trainer-growth-system",
    description:
      "Build your home base, keep it ready to convert, stay visible with seasonal growth, and offer recruiting media through trainer partnerships.",
  },
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
