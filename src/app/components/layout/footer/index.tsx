import Logo from "../logo";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-1.5 items-center sm:items-start">
          <div className="relative flex items-center w-full">
            <div className="h-px grow bg-border" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="h-px grow bg-border" />
          </div>
          <p className="text-muted-foreground">
            2026 © Hariharan Ravichandran. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
