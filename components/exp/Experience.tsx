import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExpItem } from "./ExpItem";
import { experience } from "./expData";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExpItem key={item.title} {...item} />
      ))}
    </section>
  );
};
