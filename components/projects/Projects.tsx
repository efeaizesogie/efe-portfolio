import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import {projects} from "@/components/projects/ProjectsData";

export const Projects = () => {
    return (
        <section className="section-wrapper w-sreen" id="projects">
            <SectionHeader title="Projects" dir="r" />

            <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] gap-8">
                {projects.map((project) => (
                    <Project key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};
