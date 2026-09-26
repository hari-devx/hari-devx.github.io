import { ArrowRight, Download } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { Cursor, TerminalWindow } from "@/components/ui/terminal";

const SESSION = [
  { command: "whoami", output: "hariharan — software engineer II" },
  { command: "cat stack.txt", output: "java · spring boot · kafka · aws" },
  { command: "uptime", output: "3+ years shipping backend systems" },
];

const HeroSection = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 pb-12 md:pt-40 lg:pb-30 xl:pt-52">
      <div aria-hidden="true" className="hero-orb hero-orb-one" />
      <div aria-hidden="true" className="hero-orb hero-orb-two" />
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,420px)] lg:gap-12">
          <Reveal className="flex max-w-2xl flex-col gap-4 md:gap-7">
            <div>
              <h1 className="whitespace-nowrap text-[8.4vw] sm:text-5xl xl:text-6xl 2xl:text-7xl">I&apos;m Hariharan</h1>
              <h1 className="whitespace-nowrap text-[8.4vw] sm:text-5xl xl:text-6xl 2xl:text-7xl">Software Engineer II</h1>
            </div>
            <p className="max-w-md text-muted-foreground xl:max-w-xl">
              Backend-focused software engineer with 3+ years of experience designing reliable
              services, real-time integrations, and cloud-ready platforms. I turn complex
              operational requirements into maintainable Java and Spring Boot systems.
            </p>
            <div className="no-print flex flex-col gap-3 xs:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 sm:text-base">
                Get in touch <ArrowRight className="size-4" />
              </a>
              <a href="/resume.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary sm:text-base">
                <Download className="size-4" /> Download resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="no-print">
            <TerminalWindow title="hari@devx: ~" bodyClassName="space-y-3 p-5 font-mono text-sm sm:p-6 sm:text-base">
              {SESSION.map(({ command, output }) => (
                <div key={command}>
                  <p className="text-sm sm:text-base">
                    <span className="text-primary">$</span> <span className="text-foreground">{command}</span>
                  </p>
                  <p className="font-mono text-sm text-muted-foreground sm:text-base">{output}</p>
                </div>
              ))}
              <p className="text-sm sm:text-base">
                <span className="text-primary">$</span> <Cursor />
              </p>
            </TerminalWindow>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
