export type ContactItem = { type: "email" | "phone"; label: string; icon: string; link: string };
export type SocialItem = { platform: string; icon: string; link: string };
export type EducationItem = { title: string; description: string };
export type SkillItem = { title: string; description: string; technologies: string[] };
export type ContactLink = { title: string; href: string };
export type ContactInfo = { type: "email" | "phone"; label: string; link: string };

export const EMAIL = "hariharan.ravichandran1004@gmail.com";
export const PHONE = "+91 9384418654";
export const LINKEDIN_URL = "https://www.linkedin.com/in/haridev1004/";

export const contactBar: { contactItems: ContactItem[]; socialItems: SocialItem[] } = {
  contactItems: [
    {
      type: "email",
      label: EMAIL,
      icon: "/images/icon/mail-icon.svg",
      link: `mailto:${EMAIL}`,
    },
    {
      type: "phone",
      label: PHONE,
      icon: "/images/icon/call-icon.svg",
      link: "tel:+919384418654",
    },
  ],
  socialItems: [
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: LINKEDIN_URL,
    },
  ],
};

export const education: EducationItem[] = [
  {
    title: "Master of Computer Applications",
    description: "KumaraGuru College of Technology — 2021 to 2023 | GPA: 7.3",
  },
];

export const skills: SkillItem[] = [
  {
    title: "Backend & Platform Engineering",
    description: "Building secure, maintainable backend platforms with well-defined domain boundaries, API contracts, and production-ready service ownership.",
    technologies: ["Java", "Spring Boot", "Microservices", "REST APIs", "SQL", "Git"],
  },
  {
    title: "System Design & Architecture",
    description: "Translating product requirements into scalable designs, balancing latency, reliability, data consistency, observability, and operational complexity.",
    technologies: ["High-Level Design", "Low-Level Design", "API Design", "Caching", "Database Design", "Scalability"],
  },
  {
    title: "Distributed & Event-Driven Systems",
    description: "Designing asynchronous workflows and resilient integrations that decouple services and support reliable, real-time data movement.",
    technologies: ["Apache Kafka", "RabbitMQ", "WebSocket", "MQTT", "Idempotency", "Retries & DLQs"],
  },
  {
    title: "Cloud Reliability & Delivery",
    description: "Shipping dependable services through repeatable delivery practices, containerization, production troubleshooting, and infrastructure-aware engineering.",
    technologies: ["AWS EC2", "Docker", "Jenkins", "CI/CD", "Monitoring", "Incident Debugging"],
  },
];

export const contactLinks: { socialLinks: ContactLink[]; contactInfo: ContactInfo[] } = {
  socialLinks: [{ title: "LinkedIn", href: LINKEDIN_URL }],
  contactInfo: contactBar.contactItems.map(({ type, label, link }) => ({ type, label, link })),
};
