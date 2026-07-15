"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "@/components/ui/reveal";

const EducationSkills = () => {
  const [educationData, setEductionData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEductionData(data?.educationData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="overflow-hidden border-t border-muted">
        <div className="container relative z-10">
          <Image src="/images/home/education-skill/edu-skill-vector.svg" alt="" width={260} height={170} className="no-print absolute left-0 top-0 -translate-y-1/2" />
          <div className="relative z-10 py-16 md:py-24 xl:py-32">
            <Reveal>
              <div className="mb-9 flex items-center justify-between gap-2 border-b border-border pb-7 xl:mb-16">
                <h2>Education</h2>
                <p className="text-xl text-primary">( 03 )</p>
              </div>
            </Reveal>
            <div className="max-w-4xl space-y-5 sm:space-y-6">
              {educationData?.education?.map((value: any, index: number) => (
                <Reveal key={index} delay={index * 100} className="education-item flex items-start gap-5 rounded-2xl border border-border bg-card p-6 sm:gap-7 sm:p-8">
                  <div className="no-print mt-2 flex size-4 shrink-0 items-center justify-center rounded-full border border-primary bg-background"><div className="size-1.5 rounded-full bg-primary" /></div>
                  <div className="flex-1">
                    <h5>{value?.title}</h5>
                    <p className="mt-2 font-normal">{value?.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="container py-16 md:py-24 xl:py-32">
          <Reveal>
            <div className="mb-9 flex items-center justify-between gap-2 border-b border-border pb-7 xl:mb-16">
              <h2>Skills</h2>
              <p className="text-xl text-primary">( 04 )</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:gap-4">
            {educationData?.skills?.map((skill: any, idx: number) => (
              <Reveal key={idx} delay={idx * 75}>
                <div className="skill-card rounded-xl border border-border bg-card p-5 font-bold text-foreground shadow-sm">{skill}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationSkills;
