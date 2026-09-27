"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/portfolio";
import Logo from "../logo";
import { ThemeToggle } from "../../theme-toggle";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((el): el is HTMLElement => el !== null);

    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      // The active section is the last one whose top has passed 40% of the viewport.
      const marker = window.innerHeight * 0.4;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      const current = atBottom
        ? sections[sections.length - 1]
        : sections.filter((section) => section.getBoundingClientRect().top <= marker).pop();
      setActive(current ? `#${current.id}` : "");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    // The drawer only exists below md, so close it if the viewport grows past that.
    const desktop = window.matchMedia("(min-width: 768px)");
    const onBreakpoint = () => desktop.matches && setMenuOpen(false);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-background/70 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <header
        className={cn(
          "navbar fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
          menuOpen ? "border-border bg-background" : solid ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent",
        )}
      >
        <div className="container">
          <nav aria-label="Primary" className={cn("flex items-center justify-between gap-3 transition-[padding] duration-300", solid ? "py-3" : "py-4 sm:py-6")}>
            <Logo />

            <ul className="hidden items-center gap-1 md:flex">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    aria-current={active === href ? "true" : undefined}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-foreground",
                      active === href ? "bg-muted text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <ThemeToggle />
              <a
                href="/resume.pdf"
                download
                className="hidden items-center gap-2 whitespace-nowrap rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-primary hover:text-primary-foreground sm:inline-flex"
              >
                <Download className="size-4" /> Resume
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background text-foreground md:hidden"
              >
                {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </nav>
        </div>

        <div id="mobile-menu" hidden={!menuOpen} className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border md:hidden">
          <div className="container pt-4 pb-6">
            <ul className="-mx-3 grid gap-1">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active === href ? "true" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3 py-3 text-lg font-medium transition-colors hover:text-foreground",
                      active === href ? "bg-muted text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {label}
                    {active === href && <span className="size-1.5 rounded-full bg-primary" />}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/resume.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground sm:hidden"
            >
              <Download className="size-4" /> Download resume
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
