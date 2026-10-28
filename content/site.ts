// All portfolio content lives here. Edit this file to update the site.
// TODO(Bettina): items marked TODO need your real details before launch.

export const profile = {
  name: "Bettina Pulliam",
  role: "Lead Web Software Engineer",
  company: "", // TODO: add your company name, or leave empty to hide it
  question: "Who is Bettina Pulliam?",
  answer:
    "Bettina is a lead web software engineer. She builds fast, accessible websites and voice experiences, and leads the team that ships them. She started her career in a classroom, and still believes good software should teach people how to use it.",
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
  years: string; // TODO: fill in, e.g. "2020–2021"
  status: "live" | "archived";
  stack: string[];
  media: { video?: string; poster: string; alt: string };
  before?: { src: string; alt: string };
  // Case study. Lines starting with "TODO" are hidden on the site until you replace them.
  problem: string;
  approach: string[];
  outcome: string[];
  links: { label: string; href: string }[];
};

export const featured: Project[] = [
  {
    slug: "voice-series",
    title: "The Voice Series",
    summary:
      "A WordPress site for a voice-first content series. I built the site, recorded and edited its demo media, and set up the search optimization.",
    role: "Developer and SEO",
    client: "Data Driven Design",
    years: "",
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
      "TODO: what happened after launch, e.g. traffic, search ranking, leads, or how long the site ran.",
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
    years: "",
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
    years: "",
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
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Vue", "Tailwind CSS", "HTML", "CSS"],
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
    group: "Web platform",
    items: ["WordPress", "SEO", "Google Analytics", "Git and GitHub", "AWS Amplify"],
  },
];

// Newest first. TODO: add years.
export const experience = [
  {
    title: "Lead Web Software Engineer",
    place: "Current role", // TODO: company name
    note: "Leading web engineering: architecture, code review, and shipping.",
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
