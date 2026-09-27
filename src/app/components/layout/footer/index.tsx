import { ArrowUp } from "lucide-react";
import { EMAIL, contactBar } from "@/data/portfolio";
import Logo from "../logo";

const links = [
  ...contactBar.socialItems.map(({ name, link }) => ({ label: name, href: link, external: true })),
  { label: "Email", href: `mailto:${EMAIL}`, external: false },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 sm:py-12">
      <div className="container flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
          <Logo />
          <p className="text-sm text-muted-foreground">© 2026 Hariharan Ravichandran. All rights reserved.</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm md:justify-end">
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
          <a href="#top" className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-primary">
            Back to top <ArrowUp className="size-4" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
