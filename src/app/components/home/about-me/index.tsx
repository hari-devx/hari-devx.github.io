import { Languages } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "../section-heading";

const STATS = [
  { count: "3+", label: "Years building production software" },
  { count: "500+", label: "Active assets supported" },
  { count: "2+", label: "Real-time systems delivered" },
];

const LANGUAGES = ["English", "Tamil"];

const AboutMe = () => {
  return (
    <section id="about">
      <div className="bg-muted py-16 md:py-24 xl:py-32">
        <div className="container">
          <SectionHeading title="About Me" index={1} />

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
            <Reveal className="flex flex-col gap-8">
              <p className="text-base leading-relaxed text-foreground/85 md:text-lg">
                I design and evolve backend systems that are dependable under real-world
                conditions. My work spans secure APIs, event-driven integrations, and
                cloud-native services—always with an emphasis on clear ownership,
                operational visibility, and maintainable engineering practices.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <Languages className="size-4 text-primary" /> Languages
                </span>
                {LANGUAGES.map((lang) => (
                  <span key={lang} className="rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground">
                    {lang}
                  </span>
                ))}
              </div>
            </Reveal>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {STATS.map((item, i) => (
                <Reveal key={item.label} delay={i * 90}>
                  <div className="h-full rounded-2xl border border-border bg-background p-4 sm:p-6">
                    <p className="font-mono text-2xl font-semibold text-foreground sm:text-4xl">{item.count}</p>
                    <p className="mt-2 text-xs leading-snug text-muted-foreground sm:text-sm">{item.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
