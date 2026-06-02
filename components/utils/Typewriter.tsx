"use client"

import { useEffect, useState } from "react";

const roles = [
    "Frontend Developer",
    "UI Engineer",
    "React Developer",
    "Next.js Developer",
    "Web Designer",
];

export const Typewriter = () => {
    const [displayed, setDisplayed] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = roles[roleIndex];

        const timeout = setTimeout(() => {
            if (!deleting) {
                setDisplayed(current.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);

                if (charIndex + 1 === current.length) {
                    setTimeout(() => setDeleting(true), 1500);
                }
            } else {
                setDisplayed(current.slice(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);

                if (charIndex - 1 === 0) {
                    setDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, deleting ? 40 : 80);

        return () => clearTimeout(timeout);
    }, [charIndex, deleting, roleIndex]);

    return (
        <span className="highlight">
            {displayed}
            <span className="animate-pulse text-brand">|</span>
        </span>
    );
};
