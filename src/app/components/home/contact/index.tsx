"use client";

import { ArrowUpRight, CheckCircle2, Mail, Phone, Send } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Reveal from "@/components/ui/reveal";
import { Textarea } from "@/components/ui/textarea";

type ContactLink = { title: string; href: string };
type ContactInfo = { type: "email" | "phone"; label: string; link: string };

const fieldClassName =
  "h-12 rounded-xl border-border bg-background px-4 text-foreground shadow-none placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20";

const Contact = () => {
  const [socialLinks, setSocialLinks] = useState<ContactLink[]>([]);
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", number: "", email: "", message: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch contact details");
        const data = await res.json();
        setSocialLinks(data?.contactLinks?.socialLinks ?? []);
        setContactInfo(data?.contactLinks?.contactInfo ?? []);
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/hariharan.ravichandran1004@gmail.com", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok || !data.success) throw new Error("Unable to send message");

      setFormData({ name: "", number: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (status !== "idle") setStatus("idle");
  };

  return (
    <section className="no-print">
      <div className="container">
        <div className="pb-16 pt-16 sm:pb-20 md:pt-24 xl:pt-32">
          <Reveal>
            <div className="mb-9 flex items-center justify-between gap-2 border-b border-border pb-7 md:mb-16">
              <h2>Contact Me</h2>
              <p className="text-xl text-primary">( 05 )</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:rounded-3xl">
              <div className="grid lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.9fr)]">
                <form onSubmit={handleSubmit} className="min-w-0 p-4 xs:p-5 sm:p-9 lg:p-12">
                  <div className="mb-7 sm:mb-9">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Start a conversation</p>
                    <h3 className="break-words text-2xl leading-tight sm:text-3xl md:text-4xl">Let&apos;s solve the next hard problem.</h3>
                    <p className="mt-3 max-w-xl">Whether you&apos;re scaling a backend platform, improving reliability, or looking for a thoughtful engineering partner, I&apos;d be glad to connect.</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">Name <span className="text-primary">*</span></Label>
                      <Input required id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className={fieldClassName} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="number" className="text-sm font-medium text-foreground">Phone <span className="text-primary">*</span></Label>
                      <Input required id="number" type="tel" name="number" value={formData.number} onChange={handleChange} placeholder="Your phone number" className={fieldClassName} />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 sm:mt-6">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">Email <span className="text-primary">*</span></Label>
                    <Input required id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" className={fieldClassName} />
                  </div>

                  <div className="mt-4 space-y-2 sm:mt-6">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">How can I help? <span className="text-primary">*</span></Label>
                    <Textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell me a little about the opportunity or project..." className="min-h-32 resize-y rounded-xl border-border bg-background px-4 py-3 text-foreground shadow-none placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20" />
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <Button type="submit" disabled={status === "submitting"} className="h-12 w-full rounded-full bg-primary px-6 text-base text-primary-foreground hover:bg-primary/90 sm:w-auto">
                      {status === "submitting" ? "Sending message..." : "Send message"}
                      <Send className="size-4" />
                    </Button>
                    <p className="text-sm text-muted-foreground">Fields marked <span className="text-primary">*</span> are required.</p>
                  </div>

                  {status === "success" && (
                    <p role="status" className="mt-6 flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground">
                      <CheckCircle2 className="size-5 shrink-0 text-primary" /> Thanks — your message has been sent.
                    </p>
                  )}
                  {status === "error" && <p role="alert" className="mt-6 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">Something went wrong. Please email me directly instead.</p>}
                </form>

                <aside className="flex min-w-0 flex-col justify-between border-t border-border bg-muted/50 p-4 xs:p-5 sm:p-9 lg:border-l lg:border-t-0 lg:p-12">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact details</p>
                    <h4 className="mt-3 text-2xl font-semibold">Prefer a direct route?</h4>
                    <p className="mt-3">Reach out by email or phone, or find me on LinkedIn.</p>
                  </div>

                  <div className="my-7 space-y-3 sm:my-10">
                    {contactInfo.map((item) => {
                      const Icon = item.type === "email" ? Mail : Phone;
                      return (
                        <Link key={item.type} href={item.link} className="group flex min-w-0 items-center gap-3 rounded-2xl border border-border bg-background p-3 transition hover:border-primary hover:shadow-sm sm:gap-4 sm:p-4">
                          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon className="size-5" /></span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.type}</span>
                            <span className="block truncate text-sm font-medium text-foreground sm:text-base">{item.label}</span>
                          </span>
                          <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground transition group-hover:text-primary" />
                        </Link>
                      );
                    })}
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="mb-3 text-sm text-muted-foreground">Elsewhere</p>
                    <div className="flex flex-wrap gap-2">
                      {socialLinks.map((link) => (
                        <Link key={link.title} href={link.href} target="_blank" rel="noreferrer" className="inline-flex max-w-full items-center gap-1 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary">
                          {link.title} <ArrowUpRight className="size-3.5" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
