"use client";
import ThemeImage from "@/components/ui/theme-image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContactBar = () => {
  const [contactBarData, setContactBarData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactBarData(data?.contactBar);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-muted">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7">
            {/* Contact Items */}
            <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center md:justify-start md:gap-5 lg:gap-11">
              {contactBarData?.contactItems?.map(
                (value: any, index: number) => (
                  <Link
                    key={index}
                    href={value?.link}
                    className="flex min-w-0 items-center gap-2 text-sm sm:text-base lg:gap-4"
                  >
                    <ThemeImage
                      src={value?.icon}
                      darkSrc={value?.icon?.replace(".svg", "-dark.svg")}
                      alt={value?.type}
                      width={24}
                      height={24}
                      className="min-w-[24px] min-h-[24px]"
                    />

                    <h6 className="break-all text-sm hover:text-primary md:text-base xl:text-xl">
                      {value?.label}
                    </h6>
                  </Link>
                ),
              )}
            </div>

            {/* Social Items */}
            <div className="flex items-center justify-center gap-4 md:justify-end md:gap-2.5">
              {contactBarData?.socialItems?.map((value: any, index: number) => (
                <Link key={index} href={value?.link}>
                  <ThemeImage
                    src={value?.icon}
                    darkSrc={value?.icon?.replace(".svg", "-dark.svg")}
                    alt={value?.platform}
                    width={30}
                    height={30}
                    className="hover:opacity-80"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
