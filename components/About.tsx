import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "./utils/SectionHeader";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={"about"}>
        <div>
          <Reveal>
            <p className={`${"aboutText"} ${"highlightFirstLetter"}`}>
              Howdy! I&apos;m Efe Aizesogie , and I&apos;m a Bachelor of Science in Geomatics.
              <br/><br/>
              I have experience working in both the GIS and web development worlds, with a focus on frontend development. I&apos;m passionate about creating beautiful, responsive websites that provide a great user experience.
             </p>
          </Reveal>
          <Reveal>
            <p className={"aboutText"}>
              My skills include HTML, CSS, JavaScript, and various frontend frameworks like React and Vue.js. 
              I&apos;ve also worked with backend technologies like Node.js, Firebase, MongoDB and PHP/Laravel , allowing me to build full-stack applications.
            </p>
          </Reveal>
          <Reveal>
            <p className={'aboutText'}>
              When I&apos;m not coding, I enjoy digital painting. 
              I believe that maintaining a healthy work-life balance is crucial for staying productive and motivated.
            </p>
          </Reveal>
          <Reveal>
            <p className={'aboutText'}>
              I&apos;m always looking for new challenges and opportunities to learn and grow as a developer. 
              If you&apos;re interested in working together or have any questions, please don&apos;t hesitate to get in touch!
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={"links"}>
              <div className={"linksText"}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
