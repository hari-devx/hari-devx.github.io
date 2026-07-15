"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/ui/reveal";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-muted py-10 md:py-32">
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
              <div className="flex items-center justify-between gap-2 border-b border-border pb-7">
                <h2>About Me</h2>
                <p className="text-xl text-primary">( 01 )</p>
              </div>
            </Reveal>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-[303px] h-[440px] hidden lg:flex">
                <Image
                  src="/images/home/about-me/about-banner-img.svg"
                  alt="about-banner"
                  width={303}
                  height={440}
                  className="w-full h-full"
                />
              </div>

              <div className="w-full lg:max-w-2xl flex-1">
                <p>
                  I build production-grade backend systems using Java and Spring Boot,
                  focusing on secure REST APIs, real-time pipelines, and resilient
                  cloud-native architecture. I enjoy improving operational stability
                  with automation, clean design, and scalable infrastructure.
                </p>

                <div className="grid grid-cols-1 gap-5 border-b border-border py-10 sm:grid-cols-3 xl:py-16">
                  {[
                    { count: "3+", label: "Years of experience" },
                    { count: "1", label: "Company" },
                    { count: "2+", label: "Production systems" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base text-foreground md:text-lg">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3.5">
                    <Image
                      src="/images/icon/lang-icon.svg"
                      alt="lang-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base text-foreground xl:text-xl">Language</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["English", "Tamil"].map((lang, index) => (
                      <Badge key={index} variant="outline" className="h-full rounded-full bg-background">
                        <p className="bg-background px-4 py-2 text-base text-muted-foreground md:px-5 md:py-3.5 xl:text-xl">
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
