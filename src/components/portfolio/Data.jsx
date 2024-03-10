import pro1_video from "../../assets/videos/wake-ease.webm";
import pro2_video from "../../assets/videos/hkblog.webm";
import pro3_video from "../../assets/videos/take-a-trip.webm";
import pro4_video from "../../assets/videos/fresh-cart.webm";

export const projectData = [
  {
    id: 1,
    video: pro1_video,
    title: "WakeEase",
    desc: "WalkEase is a modern and stylish shoe selling E-commerce app designed to provide users with a seamless shopping experience for footwear. With its animated hero section, sticky navbar, hover effects, beautiful UI, and mobile responsiveness, WalkEase offers a visually appealing interface combined with Cart functionality.",
    category: "Front-end",
    liveLink: "https://walk-ease.vercel.app/",
    code: "https://github.com/ho-ssain/walk-ease",
    tech: ["React", "Redux-Toolkit", "React-Redux", "Tailwind- CSS", "Vite"],
  },
  {
    id: 2,
    video: pro2_video,
    title: "hkDev",
    desc: "hkDev is a feature-rich modern blog web application designed to provide users with a seamless blogging experience. It includes a variety of functionalities such as a modern blog editor, Google authentication, dynamic blog pages, search capabilities, user profiles, analytics, and more.",
    category: "Full-stack",
    liveLink: "https://hkdev-client.onrender.com/",
    code: "https://github.com/ho-ssain/hkdev-MERN",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT-token",
      "Framer-motion",
    ],
  },
  {
    id: 3,
    video: pro3_video,
    title: "Take-A-Trip",
    desc: "This project is a stunning ReactJS-powered landing page for travel and tour purposes. It incorporates hooks, AOS Library (Animation), React-Icons, and a captivating video background. It's designed with a responsive layout.",
    category: "Front-end",
    liveLink: "https://take-a-trip.vercel.app/",
    code: "https://github.com/ho-ssain/travel_app_lp",
    tech: ["React", "Hooks", "AOS-Library", "React-Icons,"],
  },
  {
    id: 4,
    video: pro4_video,
    desc: "This project showcases a responsive website design for a fruits and vegetables business, developed using HTML, CSS, and JavaScript. It features various sections to enhance user experience, including Responsive Home Section, Categories Section, Product Section, About Section, Customer, Section And Beautiful Footer Section With Email Newsletter",

    title: "FreshCart",
    category: "Front-end",
    liveLink: "https://freshcart1.netlify.app/",
    code: "https://github.com/ho-ssain/fresh-cart",
    tech: ["HTML5", "CSS3", "JS"],
  },
];

export const projectsNav = [
  { name: "All" },
  { name: "Front-end" },
  { name: "Full-stack" },
];
