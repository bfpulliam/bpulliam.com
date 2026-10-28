// All portfolio content lives here. Edit this file to update the site.
// TODO(Bettina): items marked TODO need your real details before launch.

export const profile = {
  name: "Bettina Pulliam",
  role: "Lead Web Software Engineer",
  company: "", // TODO: add your company name, or leave empty to hide it
  question: "Who is Bettina Pulliam?",
  answer:
    "Bettina is a lead web software engineer. She builds fast, accessible and secure government websites, and leads the team that ships them. She started her career in a classroom, and still believes good software should teach people how to use it.",
  // Formspree form used by the contact section (from the old site). Messages go to the email set in Formspree.
  formEndpoint: "https://formspree.io/f/xleorvlr",
  linkedin: "https://www.linkedin.com/in/bettinapulliam",
  github: "https://github.com/bfpulliam",
  // TODO: replace with your current resume link
  resume:
    "https://docs.google.com/document/d/1auX1W5S0_MtG710KceCjbNWruV9pjrMdVxA_4LlctOI/edit?usp=sharing",
};

export const about = [
  "I taught school before I wrote software. I enrolled in Vanderbilt University's full stack bootcamp while teaching full time, and I've been building for the web ever since.",
  "Teaching and engineering ask for the same things: clear communication, patience with complexity, and a habit of checking whether the other person actually understood. Today I bring those habits to leading a web engineering team.",
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  client: string;
  // government: described without code or screenshots; demo: sample build; archived: retired client site
  status: "government" | "demo" | "archived";
  stack: string[];
  // Either a recording/screenshot (media) or, for work that can't be shown, a typographic panel.
  media?: { video?: string; poster: string; alt: string };
  panel?: string[];
  before?: { src: string; alt: string };
  gallery?: { src: string; alt: string; caption: string }[];
  // Case study. Lines starting with "TODO" are hidden on the site until you replace them.
  problem: string;
  approach: string[];
  outcome: string[];
  links: { label: string; href: string }[];
};

export const featured: Project[] = [
  {
    slug: "storybook-nextjs-migration",
    title: "Storybook and a Next.js migration",
    summary:
      "I introduced Storybook as our component workshop and led the migration of our government sites to Next.js for server-side rendering.",
    role: "Lead engineer",
    client: "Government web projects",
    status: "government",
    stack: ["Next.js", "Server-side rendering", "Storybook", "React"],
    panel: ["Storybook", "Next.js", "Server-side rendering"],
    problem:
      "Our sites needed a faster, more consistent way to build and review interface components, and pages that render on the server so they load quickly and are easy for search engines to read.",
    approach: [
      "Introduced Storybook so every component is built, reviewed and tested on its own before it reaches a page.",
      "Led the framework migration to Next.js, moving pages to server-side rendering.",
      "TODO: the framework you migrated from, how you staged the migration, and how many sites or developers it covered.",
    ],
    outcome: [
      "TODO: what changed, e.g. faster page loads, fewer UI bugs, or quicker reviews.",
    ],
    links: [],
  },
  {
    slug: "ipaws-alerts",
    title: "Reviving an emergency alerts project",
    summary:
      "I brought an archived project back into service. It's now used for FEMA IPAWS alerts and notifications.",
    role: "Lead engineer",
    client: "Government web projects",
    status: "government",
    stack: ["Legacy code revival", "FEMA IPAWS", "Alerts and notifications"],
    panel: ["Archived", "Revived", "In service for FEMA IPAWS"],
    problem:
      "An archived project was needed again to support FEMA's Integrated Public Alert and Warning System (IPAWS), which delivers emergency alerts and notifications to the public. The code had been shelved and needed to run reliably again.",
    approach: [
      "Revived the archived codebase and brought it back into active use.",
      "TODO: what you updated to get it running, e.g. dependencies, hosting, security fixes or testing.",
    ],
    outcome: [
      "The project is in active use today for FEMA IPAWS alerts and notifications.",
      "TODO: anything else, e.g. how quickly it was back in service.",
    ],
    links: [],
  },
  {
    slug: "accessible-secure-government-sites",
    title: "Accessible, secure government sites",
    summary:
      "I use Deque's axe tools to make sure our government websites meet ADA accessibility requirements, and I implement the cybersecurity standards that protect them.",
    role: "Lead engineer",
    client: "Government web projects",
    status: "government",
    stack: ["axe DevTools", "WCAG", "ADA compliance", "Cybersecurity"],
    panel: ["Accessible to everyone", "Secure by default"],
    problem:
      "Government websites have to work for everyone, including people who use screen readers, keyboards or other assistive technology, and they have to stay protected from attacks.",
    approach: [
      "Audit our sites with Deque's axe tools to find accessibility issues and fix them against WCAG, the standard behind ADA requirements.",
      "Implement cybersecurity standards across the sites.",
      "TODO: which security standards you follow, and whether accessibility checks run automatically in your builds.",
    ],
    outcome: [
      "TODO: e.g. sites passing accessibility audits, issues fixed, or security reviews passed.",
    ],
    links: [],
  },
  {
    slug: "konnect-u",
    title: "KoNNECT-U",
    summary:
      "A sample client site for a network of nurses who escort patients on commercial flights. Built to show how I'd approach a small-business brief today.",
    role: "Designer and developer",
    client: "Sample client demo",
    status: "demo",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "React Hook Form", "Zod"],
    media: {
      video: "/work/konnect-u.mp4",
      poster: "/work/konnect-u.webp",
      alt: "Scrolling through the KoNNECT-U homepage, then opening the request form",
    },
    gallery: [
      {
        src: "/work/konnect-u-form.webp",
        alt: "The first step of the four-step request form",
        caption: "The request form splits the intake into four short steps.",
      },
    ],
    problem:
      "Families arranging care for someone who has to fly need to trust the service quickly, then request help without a long phone call. The site has to feel warm and calm, and it has to work for older visitors on any device.",
    approach: [
      "Designed the homepage around a boarding pass, so visitors understand the service at a glance: a patient in one seat, a registered nurse in the next.",
      "Built a four-step request form with React Hook Form and Zod, validated again on the server.",
      "Chose a high-legibility typeface and checked color contrast for older visitors.",
      "Added a scroll-based stand-in for hover effects on touch screens, and turned motion off for visitors who prefer reduced motion.",
      "Kept every page static, so the site loads quickly.",
    ],
    outcome: [],
    links: [],
  },
  {
    slug: "voice-series",
    title: "The Voice Series",
    summary:
      "A WordPress site for a voice-first content series. I built the site, recorded and edited its demo media, and set up the search optimization.",
    role: "Developer and SEO",
    client: "Data Driven Design",
    status: "archived",
    stack: ["WordPress", "Yoast SEO", "Voice UX"],
    media: {
      video: "/work/voiceseries.mp4",
      poster: "/work/voiceseries.jpg",
      alt: "Scrolling through The Voice Series homepage",
    },
    problem:
      "Data Driven Design needed a home for its voice-first content series: a place to explain Alexa Skills and Google Actions to business owners and be found by people searching for voice strategy.",
    approach: [
      "Built the site in WordPress so the team could publish new episodes and articles without a developer.",
      "Recorded and edited the demo media that shows voice apps in action, since voice is hard to explain in text alone.",
      "Set up on-page SEO with Yoast: page titles, descriptions, readable URLs and structured headings.",
      "TODO: anything else you decided or built, such as the page structure or navigation.",
    ],
    outcome: [
      "TODO: what happened after launch, e.g. traffic, search ranking or leads.",
    ],
    links: [],
  },
  {
    slug: "ms-browns-list",
    title: "Ms. Brown's List",
    summary:
      "A redesign for a small-business directory. I defined the brand colors and theme, rebuilt the layout, and loaded the client's business listings into the backend.",
    role: "Designer and developer",
    client: "Client project",
    status: "archived",
    stack: ["WordPress", "Brand system", "Content migration"],
    media: {
      poster: "/work/msbrown-after.webp",
      alt: "Ms. Brown's List homepage after the redesign",
    },
    before: {
      src: "/work/msbrown-before.webp",
      alt: "Ms. Brown's List homepage before the redesign",
    },
    problem:
      "Ms. Brown's List is a directory that connects people with local businesses. The original site had no consistent brand, and visitors couldn't easily search for a business or understand what the directory offered.",
    approach: [
      "Defined a brand theme and color palette with the client, then applied it across the whole site.",
      "Rebuilt the homepage around the three things visitors came to do: locate, connect and enjoy.",
      "Put search front and center, with fields for keyword and location.",
      "Migrated the client's business listings into the WordPress backend so she could manage them herself.",
    ],
    outcome: [
      "TODO: what changed for the client, e.g. more listings, more searches, or her feedback.",
    ],
    links: [],
  },
  {
    slug: "nalen-ayurveda",
    title: "Nalen Ayurveda",
    summary:
      "A rebuild of a wellness brand's WordPress site, restructured for clearer navigation and better search visibility.",
    role: "Developer",
    client: "Data Driven Design",
    status: "archived",
    stack: ["WordPress", "SEO", "UX"],
    media: {
      video: "/work/nalen.mp4",
      poster: "/work/nalen.jpg",
      alt: "Scrolling through the Nalen Ayurveda site",
    },
    problem:
      "Nalen Ayurveda sells wellness products. Its existing site was hard to navigate and wasn't helping customers find products through search.",
    approach: [
      "Reconstructed the site in WordPress with a simpler navigation structure.",
      "Gave product imagery room to breathe, matching the calm feel of the brand.",
      "Applied SEO best practices to page structure and content.",
      "TODO: anything else you decided or built.",
    ],
    outcome: [
      "TODO: what happened after launch.",
    ],
    links: [],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Storybook", "Tailwind CSS", "Vue", "HTML", "CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "MongoDB", "MySQL", "Sequelize", "C#"],
  },
  {
    group: "Voice and UX",
    items: ["Alexa Skills", "Google Actions", "Voice UI design", "UX research", "Adobe XD"],
  },
  {
    group: "Accessibility and security",
    items: ["axe DevTools", "WCAG and ADA compliance", "Cybersecurity standards", "Server-side rendering"],
  },
  {
    group: "Web platform",
    items: ["WordPress", "SEO", "Google Analytics", "Git and GitHub", "AWS Amplify"],
  },
];

// Newest first.
export const experience = [
  {
    title: "Lead Web Software Engineer",
    place: "Current role", // TODO: company name
    note: "Leading government web projects: a Next.js migration, Storybook, accessibility and security.",
  },
  {
    title: "Apprentice, voice and web",
    place: "Data Driven Design",
    note: "Designed voice interfaces for Alexa Skills and Google Actions, and redesigned client sites for SEO and usability.",
  },
  {
    title: "IT Infrastructure Professional program",
    place: "GO TECH, Nashville Software School",
    note: "CompTIA-track training in hardware, networking, operating systems, and security.",
  },
  {
    title: "Full stack web development",
    place: "Vanderbilt University bootcamp",
    note: "MERN stack, completed while teaching full time.",
  },
  {
    title: "Teacher",
    place: "Classroom",
    note: "Where I learned to explain complicated things simply.",
  },
];
