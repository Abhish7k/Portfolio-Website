import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import NextpixImg from "@/public/Nextpix.png";
import PokedexImg from "@/public/Pokedex.png";
import TodoAppImg from "@/public/TodoApp.png";
import SnkrsImg from "@/public/Snkrs.png";

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
    name: "Education",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.E. Computer Science",
    location: "Savitribai Phule Pune University, Pune, IN",
    description:
      "CGPA: 7.0, Coursework: Object Oriented Programming, Database Management System, Computer Networks, Operating Systems.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2020 - July 2024",
  },
  {
    title: "High School",
    location: "Modern Education Society's Nowrosjee Wadia College, Pune, IN",
    description: "HSC Science",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2020",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "",
  //   description:
  //     "I'm now a full-stack developer.",
  //   icon: React.createElement(FaReact),
  //   date: "2023 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "SNKRS",
    description: "Ecommerce Shoes Store.",
    githubLink: "https://github.com/Abhish7k/snkrs-client",
    liveLink: "https://shopsnkrs.vercel.app/",
    tags: ["Nextjs", "Redux", "Tailwind", "Strapi", "Stripe"],
    imageUrl: SnkrsImg,
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
    description: "A Modern Todo App build using React.",
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
  // "Prisma",
  // "Redis",
  "Git",
  "GitHub",
  "Docker",
] as const;
