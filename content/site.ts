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
  title: string;
  summary: string;
  role: string;
  stack: string[];
  media: { video?: string; poster: string; alt: string };
  before?: { src: string; alt: string };
  links: { label: string; href: string }[];
};

export const featured: Project[] = [
  {
    title: "The Voice Series",
    summary:
      "A WordPress site for a voice-first content series. I built the site, recorded and edited its demo media, and set up the search optimization.",
    role: "Developer and SEO, Data Driven Design",
    stack: ["WordPress", "Yoast SEO", "Voice UX"],
    media: {
      video: "/work/voiceseries.mp4",
      poster: "/work/voiceseries.jpg",
      alt: "Scrolling through The Voice Series homepage",
    },
    links: [{ label: "Visit site", href: "https://voiceseries.com/" }],
  },
  {
    title: "Ms. Brown's List",
    summary:
      "A redesign for a small-business directory. I defined the brand colors and theme, rebuilt the layout, and loaded the client's business listings into the backend.",
    role: "Designer and developer, client project",
    stack: ["WordPress", "Brand system", "Content migration"],
    media: {
      poster: "/work/msbrown-after.webp",
      alt: "Ms. Brown's List homepage after the redesign",
    },
    before: {
      src: "/work/msbrown-before.webp",
      alt: "Ms. Brown's List homepage before the redesign",
    },
    links: [{ label: "Visit site", href: "https://www.msbrownslist.com/" }],
  },
  {
    title: "Nalen Ayurveda",
    summary:
      "A rebuild of a wellness brand's WordPress site, restructured for clearer navigation and better search visibility.",
    role: "Developer, Data Driven Design",
    stack: ["WordPress", "SEO", "UX"],
    media: {
      video: "/work/nalen.mp4",
      poster: "/work/nalen.jpg",
      alt: "Scrolling through the Nalen Ayurveda site",
    },
    links: [
      { label: "Visit site", href: "https://datadriven1.wpengine.com/nalen/" },
    ],
  },
  {
    title: "Nomad Travel",
    summary:
      "A full stack travel planner with accounts, saved trips, and secure sign-in.",
    role: "Full stack developer",
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "JWT"],
    media: {
      video: "/work/nomad.mp4",
      poster: "/work/nomad.jpg",
      alt: "Signing in and planning a trip in Nomad Travel",
    },
    links: [
      { label: "Try it", href: "https://bfpulliam.github.io/NomadTravel/" },
      { label: "View code", href: "https://github.com/bfpulliam/NomadTravel" },
    ],
  },
];

export const earlier = [
  {
    title: "Clicky Game",
    stack: "React",
    demo: "https://bfpulliam.github.io/clickyGame/",
    code: "https://github.com/bfpulliam/clickyGame",
  },
  {
    title: "Train Schedule",
    stack: "Firebase, JavaScript",
    demo: "https://bfpulliam.github.io/trainSchedule/",
    code: "https://github.com/bfpulliam/trainSchedule",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Vue", "HTML", "CSS"],
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
