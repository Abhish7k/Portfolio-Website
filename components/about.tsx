"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mt-5 mb-5">
        As a dedicated <span className="font-bold">Full-stack Developer</span>{" "}
        with a strong foundation in both frontend and backend technologies, I
        specialize in a stack that includes{" "}
        <span className="font-medium">Javascript, React and Next.js</span> on
        the frontend. In addition to frontend, I'm also well-versed in backend
        technologies like{" "}
        <span className="font-medium">Node.js, Express.js</span> and databases
        such as <span className="font-medium">PostgreSQL</span> and{" "}
        <span className="font-medium">MongoDB</span>. My proficiency extends to
        TypeScript and Java, enabling me to craft versatile software solutions
        that encompass the entire development stack.
        <br />
        <br />
        I'm also a final year Computer Science student. Proficient in data
        structures and algorithms, and fueled by a passion for problem solving,
        I regularly solve problems on coding platforms like{" "}
        <span className="font-medium">
          <a href="https://leetcode.com/Abhish7k/" target="_blank">
            LeetCode
          </a>
        </span>{" "}
        and{" "}
        <span className="font-medium">
          <a
            href="https://auth.geeksforgeeks.org/user/abhish3k/"
            target="_blank"
          >
            GeeksforGeeks
          </a>
        </span>{" "}
        using <span className="font-medium">C++.</span>
      </p>
      <br />
      <br />
    </motion.section>
  );
}
