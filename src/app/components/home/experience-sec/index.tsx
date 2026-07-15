import React from "react";
import Reveal from "@/components/ui/reveal";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "Mar 2025 - Present",
      title: "Software Development Engineer - II",
      company: "Closerlook Digital",
      type: "Fulltime",
      description:
        "Built a Spring Boot infrastructure monitoring system tracking server health, DNS resolution, and SSL expiry to enable proactive outage detection. Designed and implemented RESTful microservices and real-time pipelines (WebSocket, MQTT) consumed by a Flutter application, processing thousands of daily transactions across 500+ active assets. Conducted code reviews and mentored junior engineers while collaborating with DevOps and QA teams in agile CI/CD-driven workflows.",
    },
    {
      year: "Mar 2023 - Mar 2025",
      title: "Software Development Engineer - I",
      company: "Closerlook Digital",
      type: "Fulltime",
      description:
        "Developed and maintained secure, production-grade applications across 500+ active assets. Integrated backend services using REST APIs and real-time streams. Worked extensively in Linux environments for debugging, logging, and root-cause analysis while improving operational stability by optimizing data flows.",
    },
    {
      year: "Nov 2022 - Mar 2023",
      title: "Software Development Engineer - Intern",
      company: "Closerlook Digital",
      type: "Internship",
      description:
        "Implemented backend-integrated features under senior mentorship. Debugged and resolved 20+ issues across application and API layers. Gained exposure to production release cycles, CI/CD pipelines, and quality practices.",
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
          <Reveal>
            <div className="mb-9 flex items-center justify-between gap-2 border-b border-border pb-7 md:mb-16">
              <h2>Experience</h2>
              <p className="text-xl text-primary">( 02 )</p>
            </div>
          </Reveal>

          <div className="space-y-5 md:space-y-7">
            {experiences.map((exp, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="grid gap-5 rounded-2xl border border-border bg-card p-5 sm:p-7 lg:grid-cols-[minmax(150px,0.85fr)_minmax(180px,1fr)_minmax(0,1.6fr)] lg:gap-8">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-primary">{exp.year}</p>
                    <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                  </div>

                  <div className="border-l border-border pl-5 lg:pl-7">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-lg font-medium text-foreground">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-base font-normal">{exp.type}</p>
                  </div>

                  <div>
                    <p className="text-sm leading-relaxed md:text-base">{exp.description}</p>
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
