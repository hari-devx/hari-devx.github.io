import { NextResponse } from "next/server";
import { title } from "process";

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
    "Java",
    "Spring Boot",
    "AWS (EC2, S3, IAM, VPC)",
    "REST APIs",
    "WebSocket / MQTT",
    "CI/CD & Git"
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
