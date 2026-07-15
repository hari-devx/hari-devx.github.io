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
      title: "Backend Architecture",
      description: "Designing maintainable services with clear contracts, resilience, and operational ownership.",
      technologies: ["Java", "Spring Boot", "Microservices", "REST APIs"]
    },
    {
      title: "Event-Driven Systems",
      description: "Building responsive integrations and real-time workflows for connected platforms.",
      technologies: ["Apache Kafka", "RabbitMQ", "WebSocket", "MQTT"]
    },
    {
      title: "Cloud & Delivery",
      description: "Shipping reliable workloads through repeatable infrastructure and delivery practices.",
      technologies: ["AWS EC2", "Docker", "Jenkins", "Git", "Bitbucket"]
    },
    {
      title: "Engineering Foundations",
      description: "Applying sound problem-solving, debugging, and system-level reasoning to production work.",
      technologies: ["Data Structures & Algorithms"]
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
