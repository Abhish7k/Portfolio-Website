import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import NextpixImg from "@/public/Nextpix.png";
import PokedexImg from "@/public/Pokedex.png";
import TodoAppImg from "@/public/TodoApp.png";
import SnkrsImg from "@/public/Snkrs.png";
import MovixImg from "@/public/Movix.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer Intern",
    location: "Yhills Edutech, Remote",
    description:
      "I actively contributed to the development and enhancement of user interfaces using HTML, CSS, JavaScript and React.js. My role involved implementing dynamic components, optimizing performance, and collaborating on the seamless integration of frontend components with backend systems.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - Apr 2023",
  },
  {
    title: "Open Source Contributor",
    location: "Frontend Freaks",
    description:
      "Contributed to the Frontend Freaks official website, successfully merging two pull requests. Fostered a collaborative environment by providing constructive feedback and assisting fellow contributors.",
    icon: React.createElement(FaGithub),
    date: "",
  },
] as const;

export const projectsData = [
  {
    title: "Snkrs",
    description: "Ecommerce Shoes Store.",
    githubLink: "https://github.com/Abhish7k/snkrs-client",
    liveLink: "https://shopsnkrs.vercel.app/",
    tags: ["Nextjs", "Redux", "Tailwind", "Strapi", "Stripe"],
    imageUrl: SnkrsImg,
  },
  {
    title: "Movix",
    description: "Interactive platform to explore Movies and TV Shows.",
    githubLink: "https://github.com/Abhish7k/Movix",
    liveLink: "https://movixhub.vercel.app/",
    tags: ["Reactjs", "Sass", "Redux", "Axios", "TMDB API"],
    imageUrl: MovixImg,
  },
  {
    title: "NextPix",
    description: "Image Gallery app built using Next.js.",
    githubLink: "https://github.com/Abhish7k/NextJS-image-gallery",
    liveLink: "https://nextpix.vercel.app/",
    tags: ["TypeScript", "Nextjs", "Tailwind"],
    imageUrl: NextpixImg,
  },
  {
    title: "Pokédex",
    description: "A Pokédex app powered by Next.js.",
    githubLink: "https://github.com/Abhish7k/Pokedex-NextJS",
    liveLink: "https://next-pokedex-app.vercel.app/",
    tags: ["TypeScript", "Nextjs", "Tailwind"],
    imageUrl: PokedexImg,
  },
  {
    title: "Todo App",
    description: "A Modern Todo App built using React.",
    githubLink: "https://github.com/Abhish7k/React-Todo",
    liveLink: "https://justdoitlilbro.netlify.app/",
    tags: ["React", "Tailwind"],
    imageUrl: TodoAppImg,
  },
] as const;

export const skillsData = [
  "C++",
  "Java",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  // "Redis",
  "Git",
  "GitHub",
  "Docker",
] as const;
