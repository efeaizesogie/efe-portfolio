import { Reveal } from "@/components/utils/Reveal";

interface Props {
  title: string;
  position: string;
  time: string;
  location: string;
  description: string;
  tech: string[];
}

export const ExpItem = ({
  title,
  position,
  time,
  location,
  description,
  tech,
}: Props) => {
  return (
    <div className="mb-8 px-3 pb-6 border-b border-background-light">
      <div className="flex flex-col flex-wrap gap-2 md:flex-row md:items-center justify-between mb-3">
        <Reveal>
          <span className="text-xl md:text-3xl font-bold">{title}</span>
        </Reveal>
        <Reveal>
          <span className="text-sm">{time}</span>
        </Reveal>
      </div>

      <div className="flex flex-wrap items-center justify-between mb-3">
        <Reveal>
          <span className="text-brand font-bold text-sm">{position}</span>
        </Reveal>
        <Reveal>
          <span className="text-sm">{location}</span>
        </Reveal>
      </div>
      <Reveal>
        <p className="font-extralight">{description}</p>
      </Reveal>
      <Reveal>
        <div className='flex flex-wrap gap-3 mt-4'>
          {tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
