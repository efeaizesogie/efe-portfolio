"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const root = document.getElementById("main");
    if (!root) return;

    const sections = root.querySelectorAll(".section-wrapper");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting && target.id) {
            setSelected(target.id);
          }
        });
      },
      { root, threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "var(--background-dark)" }}>
      <motion.nav
        initial={{ x: 70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="sidebar"
      >
        <span
          className="logo"
          onClick={() => {
            document.location.hash === ""
              ? document.getElementById("main")?.scrollIntoView()
              : (document.location.hash = "");
          }}
        >
          EF<span>.</span>
        </span>
        <motion.a
          initial={{ x: 70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          href="#about"
          onClick={() => {
            setSelected("about");
          }}
          className={selected === "about" ? "selected" : ""}
        >
          About
        </motion.a>
        <motion.a
          initial={{ x: 70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="#projects"
          onClick={() => setSelected("projects")}
          className={selected === "projects" ? "selected" : ""}
        >
          Projects
        </motion.a>
        <motion.a
          initial={{ x: 70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="#experience"
          onClick={() => setSelected("experience")}
          className={selected === "experience" ? "selected" : ""}
        >
          Exp.
        </motion.a>
        <motion.a
          initial={{ x: 70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="#testimonials"
          onClick={() => setSelected("testimonials")}
          className={selected === "testimonials" ? "selected" : ""}
        >
          Test.
        </motion.a>
        <motion.a
          initial={{ x: 70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="#contact"
          onClick={() => setSelected("contact")}
          className={selected === "contact" ? "selected" : ""}
        >
          Contact
        </motion.a>
      </motion.nav>
    </div>
  );
};
