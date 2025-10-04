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
      <div className="flex items-center justify-between mb-3">
        <Reveal>
          <span className="text-4xl font-bold">{title}</span>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className="flex items-center justify-between mb-3">
        <Reveal>
          <span className="text-brand font-bold">{position}</span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>
      <Reveal>
        <p className="mb-4 font-extralight">{description}</p>
      </Reveal>
      <Reveal>
        <div className='flex flex-wrap gap-3'>
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
