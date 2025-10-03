"use client"

import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";

export const Hero = () => {
    return (
        <section className={`section-wrapper ${"hero"}`}>
            <div className="heroGrid">
                <div className="copyWrapp">
                    <Reveal>
                        <h1 className="title">
                                                  Hi, I&apos;m EFE
                            <motion.span
                                style={{
                                    display: "inline-block",
                                    transformOrigin: "bottom",
                                }}
                                animate={{
                                    scaleY: [1, 1.2, 1],
                                    color: ["#000", "#fc8c03", "#000"],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                            >
                                .
                            </motion.span>
                        </h1>
                    </Reveal>
                    <Reveal>
                        <h2 className="subTitle">
                            I&apos;m a <span className={"highlight"}>Frontend Developer</span>
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="aboutCopy">
                            I&apos;ve spent the last 2 years building and scaling applications for
                            some pretty cool companies and individuals. I also create interesting self projects on my spare time.
                            Let&apos;s connect!
                        </p>
                    </Reveal>
                    <Reveal>
                        <StandardButton
                            onClick={() => document.getElementById("contact")?.scrollIntoView()}
                        >
                            Contact me
                        </StandardButton>
                    </Reveal>
                </div>

            </div>
        </section>
    );
};
