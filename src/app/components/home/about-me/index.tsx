"use client";

import Image from "next/image";
import ThemeImage from "@/components/ui/theme-image";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/ui/reveal";

const AboutMe = () => {
  return (
    <section>
      <div className="relative overflow-hidden bg-muted py-16 md:py-24 xl:py-32">
        {/* <div className="absolute top-0 w-full px-9">
          <Image
            src="/images/home/about-me/resume-bg-img.svg"
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full opacity-5"
          />
        </div> */}

        <div className="relative z-10">
          <div className="container">
            <Reveal>
              <div className="flex items-end justify-between gap-4 border-b border-border pb-6 sm:pb-7">
                <h2>About Me</h2>
                <p className="text-xl text-primary">( 01 )</p>
              </div>
            </Reveal>

            <div className="grid items-center gap-10 pt-10 lg:grid-cols-[minmax(220px,0.42fr)_minmax(0,1fr)] lg:gap-14 xl:gap-20 xl:pt-16">
              <div className="mx-auto hidden w-full max-w-[303px] lg:flex">
                <Image
                  src="/images/home/about-me/about-banner-img.svg"
                  alt="about-banner"
                  width={303}
                  height={440}
                  className="h-auto w-full"
                />
              </div>

              <div className="w-full max-w-3xl">
                <p className="max-w-2xl text-base leading-relaxed md:text-lg">
                  I design and evolve backend systems that are dependable under real-world
                  conditions. My work spans secure APIs, event-driven integrations, and
                  cloud-native services—always with an emphasis on clear ownership,
                  operational visibility, and maintainable engineering practices.
                </p>

                <div className="grid grid-cols-1 gap-6 border-b border-border py-8 sm:grid-cols-3 sm:gap-5 xl:py-12">
                  {[
                    { count: "3+", label: "Years building production software" },
                    { count: "500+", label: "Active assets supported" },
                    { count: "2+", label: "Real-time systems delivered" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="mt-1 text-sm text-muted-foreground md:text-base">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-start gap-4 pt-8 sm:flex-row sm:items-center xl:pt-12">
                  <div className="flex items-center gap-3.5">
                    <ThemeImage
                      src="/images/icon/lang-icon.svg"
                      darkSrc="/images/icon/lang-icon-dark.svg"
                      alt="lang-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base text-foreground xl:text-xl">Language</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    {["English", "Tamil"].map((lang, index) => (
                      <Badge key={index} variant="outline" className="h-full rounded-full bg-background">
                        <p className="bg-background px-4 py-2 text-sm text-muted-foreground md:px-5 md:text-base">
                          {lang}
                        </p>
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default AboutMe;
