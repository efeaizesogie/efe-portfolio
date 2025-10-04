
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {

  return (
    <div className="relative">
      <Reveal>
        <div className={"statColumn"}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={"statGrid"}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">Tailwind</span>
            <span className="chip">React</span>
            <span className="chip">Nextjs</span>
            <span className="chip">Redux</span>
            <span className="chip">Graphql</span>
            <span className="chip">Gsap</span>
            <span className="chip">ThreeJs</span>
            <span className="chip">Vercel</span>
            <span className="chip">Schadcn</span>
            <span className="chip">Figma</span>
            <span className="chip">GitHub</span>
            <span className="chip">Framer motion</span>
          </div>
        </div>
      </Reveal>
      
    </div>
  );
};
