import Image from "next/image";
import Reveal from "@/components/ui/reveal";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 pb-12 md:pt-40 lg:pb-30 xl:pt-52">
      <div aria-hidden="true" className="hero-orb hero-orb-one" />
      <div aria-hidden="true" className="hero-orb hero-orb-two" />
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <Reveal className="flex max-w-2xl flex-col gap-4 md:gap-7">
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm Hariharan</h1>
                <div className="wave">
                  <Image
                    src={"/images/home/banner/wave-icon.svg"}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h1>Software Engineer II</h1>
            </div>
            <p className="max-w-md text-muted-foreground xl:max-w-xl">
              Backend engineer with 3+ years building secure, scalable systems using Java,
              Spring Boot, REST APIs, and real-time messaging. Skilled in CI/CD automation,
              cloud-native practices, and clean architecture.
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
