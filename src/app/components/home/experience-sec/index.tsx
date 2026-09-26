import React from "react";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "../section-heading";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "Mar 2025 - Present",
      title: "Software Development Engineer - II",
      company: "Closerlook Digital",
      type: "Fulltime",
      description: <>
        Own <strong>backend delivery</strong> for infrastructure monitoring and real-time platform capabilities. Built <strong>Spring Boot services</strong> for server health, DNS resolution, and SSL-expiry visibility; designed REST and event-driven integrations used by a Flutter application serving <strong>500+ active assets</strong>. Raise engineering quality through <strong>code reviews and mentoring</strong> in close partnership with DevOps and QA.
      </>,
    },
    {
      year: "Mar 2023 - Mar 2025",
      title: "Software Development Engineer - I",
      company: "Closerlook Digital",
      type: "Fulltime",
      description: <>
        Delivered and maintained <strong>secure backend capabilities</strong> across a 500+ asset environment. Integrated REST APIs and real-time streams, investigated <strong>production issues in Linux</strong>, and improved data flows through disciplined debugging, logging, and <strong>root-cause analysis</strong>.
      </>,
    },
    {
      year: "Nov 2022 - Mar 2023",
      title: "Software Development Engineer - Intern",
      company: "Closerlook Digital",
      type: "Internship",
      description: <>
        Contributed <strong>production-facing features</strong> across application and API layers while building strong fundamentals in release engineering. Resolved <strong>20+ issues</strong> through structured debugging and gained hands-on exposure to <strong>CI/CD, code quality, and production support</strong> practices.
      </>,
    },
    // {
    //   year: "2023+",
    //   title: "Team Lead Designer",
    //   company: "www.latest.com",
    //   type: "Fulltime",
    //   description:
    //     "Release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software",
    // },
  ];

  return (
    <section>
      <div className="py-16 md:py-24 xl:py-32">
        <div className="container">
          <SectionHeading title="Experience" index={2} />

          <div className="space-y-5 md:space-y-7">
            {experiences.map((exp, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="grid gap-5 rounded-2xl border border-border bg-card p-5 sm:p-7 lg:grid-cols-[minmax(150px,0.85fr)_minmax(180px,1fr)_minmax(0,1.6fr)] lg:gap-8">
                  <div>
                    <p className="mb-2 font-mono text-sm font-semibold text-primary">{exp.year}</p>
                    <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                  </div>

                  <div className="border-t border-border pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">{exp.type}</p>
                  </div>

                  <div>
                    <p className="text-sm leading-relaxed md:text-base [&_strong]:font-semibold [&_strong]:text-foreground">{exp.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
