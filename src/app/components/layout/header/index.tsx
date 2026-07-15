"use client";

import Logo from "../logo";
import { ThemeToggle } from "../../theme-toggle";

const Header = () => {
  return (
    <header className="navbar absolute top-0 left-0 z-50 w-full">
      <div className="container">
        <nav className="py-4 sm:py-6 lg:py-7">
          <div className="flex items-center justify-between gap-3 sm:gap-8">
            <div>
              <Logo />
            </div>

            <div className="flex shrink-0 items-center gap-2 sm:gap-4">
              <ThemeToggle />
              <a href="/resume.pdf" download className="inline-flex w-fit whitespace-nowrap rounded-full border border-primary px-3 py-2 text-xs font-semibold text-foreground transition hover:bg-primary hover:text-primary-foreground sm:px-5 sm:py-3 sm:text-sm md:px-7 md:py-4 md:text-base">
                <span className="sm:hidden">Resume</span><span className="hidden sm:inline">Download resume</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
