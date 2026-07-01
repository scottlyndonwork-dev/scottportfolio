import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    description:
      "Building responsive websites and simple web solutions with HTML, CSS, JavaScript, WordPress, PHP, and MySQL.",
    icon: web,
  },
  {
    title: "Virtual Assistance & Admin",
    description:
      "Calendar and inbox management, scheduling, research and reporting, documentation, stakeholder follow-up, Notion, Asana, ChatGPT, and Zapier automation.",
    icon: mobile,
  },
  {
    title: "Design & Creative",
    description:
      "Canva professional design, branding and layout, social media graphics, logo design, banners, promotional materials, and UI/visual design sense.",
    icon: creator,
  },
  {
    title: "Technical Support",
    description:
      "HTML, CSS, JavaScript, WordPress, PHP, MySQL, Python, system support, troubleshooting, and technical documentation.",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Administrative Assistant",
    company_name: "Villa Enterprises",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2021 – 2025",
    points: [
      "Managed calendars, inboxes, and admin workflows for ongoing client operations with zero missed deadlines.",
      "Organized digital files and documentation, keeping shared drives clean and easy to navigate for the whole team.",
      "Conducted research and prepared reports that directly supported client decision-making.",
      "Identified and implemented small workflow improvements that increased day-to-day efficiency for ongoing projects.",
    ],
  },
  {
    title: "Graphic Designer / Creative Specialist",
    company_name: "Self-Employed / Multiple Clients",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2018 – Present",
    points: [
      "Created 1,000+ marketing assets (logos, banners, social graphics) in Canva, strengthening brand consistency for clients.",
      "Translated client briefs into on-brand visual assets, managing design projects independently from concept to delivery.",
      "Built a consistent freelance practice across diverse industries, maintaining long-term and repeat client relationships.",
    ],
  },
  {
    title: "IT Consultant",
    company_name: "Univ Group & Uni V Foods Corporation",
    icon: shopify,
    iconBg: "#383E56",
    date: "2021 – 2026 (Part-Time)",
    points: [
      "Provided ongoing IT support across approximately 10 business locations, covering system access, hardware, and network issues.",
      "Maintained technical documentation and operational records that supported continuity across all sites.",
      "Assisted with system upgrades, reducing recurring technical issues through proactive maintenance.",
      "Recommended and helped implement technology solutions that improved day-to-day operational efficiency.",
    ],
  },
  {
    title: "Programmer",
    company_name: "Department of Trade and Industry (DTI) Philippines, Regional Office",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2026 (4 months)",
    points: [
      "Supported development of a regional Finance and Administration Management System using PHP, MySQL, JavaScript, HTML, and CSS.",
      "Assisted with system testing, debugging, and documentation for a smooth region-wide rollout.",
      "Provided technical support to regional staff, resolving system-related issues with minimal downtime.",
      "Collaborated with internal teams to document and improve operational workflows.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
