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
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="mb-9 flex items-center justify-between gap-2 border-b border-border pb-7 md:mb-16">
              <h2>Experience</h2>
              <p className="text-xl text-primary">( 02 )</p>
            </div>
          </Reveal>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="relative grid grid-cols-1 items-start gap-2.5 sm:grid-cols-3 md:gap-4 xl:gap-8">
                <div className="">
                  <h4 className="text-md mb-2 font-bold text-foreground">{exp.year}</h4>
                  <h4 className="text-lg font-normal">{exp.title}</h4>
                </div>

                <div className=" relative">
                  {index < experiences.length && (
                    <div
                      className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? "h-40" : "h-30"} bg-muted`}
                    ></div>
                  )}

                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    {/* <div
                      className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${
                        index === 1 ? "border-primary" : "border-black"
                      }`}
                    >
                      {index === 1 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      )}
                    </div> */}
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl font-normal text-foreground">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-base font-normal">{exp.type}</p>
                  </div>
                </div>

                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base">{exp.description}</p>
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
