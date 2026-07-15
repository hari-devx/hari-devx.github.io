"use client";

import Logo from "../logo";
import { ThemeToggle } from "../../theme-toggle";

const Header = () => {
  return (
    <header className="navbar absolute top-0 left-0 z-50 w-full">
      <div className="container">
        <nav className="py-7">
          <div className="flex items-center justify-between gap-4 sm:gap-8">
            <div>
              <Logo />
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <ThemeToggle />
              <a href="/resume.pdf" download className="inline-flex w-fit rounded-full border border-primary px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-primary hover:text-primary-foreground sm:px-5 sm:py-3 md:px-7 md:py-4 md:text-base">
                Download resume
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
