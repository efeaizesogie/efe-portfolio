import { Reveal } from "@/components/utils/Reveal";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
    return (
        <section className="section-wrapper" id="contact">
            <div className="max-w-[700px] m-auto rounded-xl flex flex-col justify-center items-center gap-6">
                <Reveal width="100%">
                    <h4 className="font-[900] text-center leading-[1] text-5xl md:text-8xl">
                        Contact<span className="text-brand">.</span>
                    </h4>
                </Reveal>
                <Reveal width="100%">
                    <p className="text-center font-extralight">
                        Have an idea to discuss? Shoot me an email if you want to connect! You can also find me on{" "}
                        <Link
                            href="https://www.linkedin.com/in/efe-aizesogie/"
                            target="_blank"
                            rel="nofollow"
                            className="text-brand hover:underline transition-all duration-200 ease-in-out"
                        >
                            Linkedin
                        </Link>{" "}
                        or{" "}
                        <Link href="https://x.com/efecode" target="_blank" rel="nofollow"  className="text-brand hover:underline transition-all duration-200 ease-in-out">
                            X
                        </Link>{" "}
                        if that&apos;s more your speed.
                    </p>
                </Reveal>
                <Reveal width="100%">
                    <Link href="mailto:efeaizesogie@gmail.com" className="text-brand ">
                        <div className="contactEmail hover:scale-95 font-semibold text-white">
                            <AiFillMail size="1.8rem" />
                            <span>Send Email</span>
                        </div>
                    </Link>
                </Reveal>
            </div>
        </section>
    );
};
