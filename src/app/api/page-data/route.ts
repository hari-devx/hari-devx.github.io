import { NextResponse } from "next/server";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "hariharan.ravichandran1004@gmail.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:hariharan.ravichandran1004@gmail.com"
    },
    {
      type: "phone",
      label: "+91 9384418654",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+919384418654"
    },
    // {
    //   type: "website",
    //   label: "www.linkedin.com/in/haridev1004",
    //   icon: "/images/icon/linkedin-icon.svg",
    //   link: "https://www.linkedin.com/in/haridev1004/"
    // }
  ],
  socialItems: [
    // {
    //   platform: "dribbble",
    //   icon: "/images/icon/dribble-icon.svg",
    //   link: "https://dribbble.com"
    // },
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://www.linkedin.com/in/haridev1004/"
    },
    // {
    //   platform: "facebook",
    //   icon: "/images/icon/facebook-icon.svg",
    //   link: "https://facebook.com"
    // }
  ]
};


const educationData = {
  education: [
    {
      title: "Master of Computer Applications",
      description: "KumaraGuru College of Technology — 2021 to 2023 | GPA: 7.3"
    }
  ],
  skills: [
    {
      title: "Backend & Platform Engineering",
      description: "Building secure, maintainable backend platforms with well-defined domain boundaries, API contracts, and production-ready service ownership.",
      technologies: ["Java", "Spring Boot", "Microservices", "REST APIs", "SQL", "Git"]
    },
    {
      title: "System Design & Architecture",
      description: "Translating product requirements into scalable designs, balancing latency, reliability, data consistency, observability, and operational complexity.",
      technologies: ["High-Level Design", "Low-Level Design", "API Design", "Caching", "Database Design", "Scalability"]
    },
    {
      title: "Distributed & Event-Driven Systems",
      description: "Designing asynchronous workflows and resilient integrations that decouple services and support reliable, real-time data movement.",
      technologies: ["Apache Kafka", "RabbitMQ", "WebSocket", "MQTT", "Idempotency", "Retries & DLQs"]
    },
    {
      title: "Cloud Reliability & Delivery",
      description: "Shipping dependable services through repeatable delivery practices, containerization, production troubleshooting, and infrastructure-aware engineering.",
      technologies: ["AWS EC2", "Docker", "Jenkins", "CI/CD", "Monitoring", "Incident Debugging"]
    }
  ]
}

const contactLinks = {
  socialLinks: [
    // {
    //   title: "Dribble",
    //   href: "/"
    // },
    // {
    //   title: "Facebook",
    //   href: "/"
    // },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/haridev1004/"
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "hariharan.ravichandran1004@gmail.com",
      link: "mailto:hariharan.ravichandran1004@gmail.com"
    },
    {
      type: "phone",
      label: "+91 9384418654",
      link: "tel:+919384418654"
    }
  ]
}



export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
