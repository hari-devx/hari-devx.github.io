"use client";

import ThemeImage from "@/components/ui/theme-image";
import Reveal from "@/components/ui/reveal";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 pb-12 md:pt-40 lg:pb-30 xl:pt-52">
      <div aria-hidden="true" className="hero-orb hero-orb-one" />
      <div aria-hidden="true" className="hero-orb hero-orb-two" />
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-7 sm:grid-cols-2 md:gap-4 lg:flex">
          <Reveal className="flex max-w-2xl flex-col gap-4 md:gap-7">
            <div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-5 lg:gap-8">
                <h1>I'm Hariharan</h1>
                <div className="wave">
                  <ThemeImage
                    src={"/images/home/banner/wave-icon.svg"}
                    darkSrc={"/images/home/banner/wave-icon-dark.svg"}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className="size-10 sm:size-12 lg:size-[62px]"
                  />
                </div>
              </div>
              <h1>Software Engineer II</h1>
            </div>
            <p className="max-w-md text-muted-foreground xl:max-w-xl">
              Backend-focused software engineer with 3+ years of experience designing reliable
              services, real-time integrations, and cloud-ready platforms. I turn complex
              operational requirements into maintainable Java and Spring Boot systems.
            </p>
          </Reveal>
          {/* <Image
            src={"/images/home/banner/banner-img.png"}
            alt="banner-img"
            width={685}
            height={650}
            className="block lg:hidden"
          /> */}
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        {/* <Image
          src={"/images/home/banner/banner-img.png"}
          alt="banner-img"
          width={685}
          height={650}
          className=" absolute right-0 top-0 z-1"
        /> */}
      </div>
    </section>
  );
};

export default index;
