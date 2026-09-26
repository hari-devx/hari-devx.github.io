import Reveal from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  index: number;
  className?: string;
};

const SectionHeading = ({ title, index, className }: SectionHeadingProps) => (
  <Reveal>
    <div className={cn("mb-9 flex items-end justify-between gap-4 border-b border-border pb-6 sm:pb-7 md:mb-16", className)}>
      <h2>{title}</h2>
      <p className="shrink-0 font-mono text-lg text-primary sm:text-xl">{String(index).padStart(2, "0")}</p>
    </div>
  </Reveal>
);

export default SectionHeading;
