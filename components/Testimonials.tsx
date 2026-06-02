"use client"

import { SectionHeader } from "@/components/utils/SectionHeader";
import { Reveal } from "@/components/utils/Reveal";
import { AiFillStar } from "react-icons/ai";

const testimonials = [
    {
        name: "Edoki Chukwuyem",
        handle: "@chuksdev",
        review: "Working with Efeosa was a smart decision. He clearly understood our project goals and delivered a seamless website that met all our expectations. He's very reliable and knows his craft well.",
    },
    {
        name: "Kelechi Eronini",
        handle: "@k_eronini",
        review: "As a teammate, Efeosa is reliable, sharp, and always ready to dive into challenges. He consistently delivers quality work, communicates clearly, and elevates any project he's on. A real asset to the team!",
    },
    {
        name: "Gifted Phreetech",
        handle: "@gifted",
        review: "Working with Efeosa as a fellow intern was inspiring. He was always quick to solve problems, share knowledge, and push for clean, efficient code. His focus and energy made every team task smoother and more fun.",
    },
    {
        name: "Mr Henry",
        handle: "@honatrix",
        review: "It was a great experience working with Efeosa. He delivered a clean, user-friendly website that our customers find easy to navigate. He brings both technical skills and creative ideas to the table.",
    },
    {
        name: "Godstime Nwabue",
        handle: "@nwabuegodstime",
        review: "Efeosa is a very skilled web developer. He handled our site professionally, and since the launch, we've seen a clear improvement in performance and user experience. He's definitely someone I recommend.",
    },
];

const Stars = () => (
    <div className="flex gap-1 text-brand mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
            <AiFillStar key={i} size="1.1rem" />
        ))}
    </div>
);

export const Testimonials = () => {
    return (
        <section className="section-wrapper" id="testimonials">
            <SectionHeader title="Testimonials" dir="l" />
            <div className="columns-1 md:columns-2 gap-6">
                {testimonials.map((t) => (
                    <Reveal key={t.handle} width="100%">
                        <div className="break-inside-avoid bg-background-light rounded-xl p-6 mb-6">
                            <Stars />
                            <p className="font-extralight text-base leading-relaxed mb-5">{t.review}</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center font-bold text-background shrink-0">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{t.name}</p>
                                    <p className="text-xs opacity-50">{t.handle}</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};
