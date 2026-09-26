import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "../section-heading";
import { education, skills } from "@/data/portfolio";

const EducationSkills = () => {
  return (
    <>
      <section className="overflow-hidden border-t border-muted">
        <div className="container relative z-10">
          <Image src="/images/home/education-skill/edu-skill-vector.svg" alt="" width={260} height={170} className="no-print absolute left-0 top-0 -translate-y-1/2" />
          <div className="relative z-10 py-16 md:py-24 xl:py-32">
            <SectionHeading title="Education" index={3} className="xl:mb-16" />
            <div className="w-full space-y-5 sm:space-y-6">
              {education.map((value, index) => (
                <Reveal key={index} delay={index * 100} className="education-item flex items-start gap-5 rounded-2xl border border-border bg-card p-6 sm:gap-7 sm:p-8">
                  <div className="no-print mt-2 flex size-4 shrink-0 items-center justify-center rounded-full border border-primary bg-background"><div className="size-1.5 rounded-full bg-primary" /></div>
                  <div className="flex-1">
                    <h5>{value.title}</h5>
                    <p className="mt-2 font-normal">{value.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="container py-16 sm:py-20 md:py-28 xl:py-36">
          <SectionHeading title="Skills" index={4} className="xl:mb-16" />
          <div className="grid grid-cols-1 gap-4 pb-4 sm:gap-5 lg:grid-cols-2">
            {skills.map((skill, idx) => (
              <Reveal key={idx} delay={idx * 75}>
                <article className="skill-card h-full rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold">{skill.title}</h3>
                    <span className="shrink-0 font-mono text-sm text-primary">0{idx + 1}</span>
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-relaxed md:text-base">{skill.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                    {skill.technologies.map((technology) => (
                      <span key={technology} className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-xs font-medium text-foreground sm:text-sm">{technology}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationSkills;
