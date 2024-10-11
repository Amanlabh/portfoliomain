import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aman Labh",
  initials: "AL",
  url: "https://amanlabh.me",
  location: "Punjab, India",
  locationLink: "https://www.google.com/maps/place/Lovely+Professional+University/@31.255992,75.7025686,17z/data=!3m1!4b1!4m6!3m5!1s0x391a5f5e9c489cf3:0x4049a5409d53c300!8m2!3d31.255992!4d75.7051435!16s%2Fm%2F02wbfhd?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D",
  description:
    "Co-Founder Kachnibharni, Full Stack Developer , Part-time Freelancer . I love building things on Internet. Very active on Linkedin & Github. Read my blogs, turn on some music and  stay tuned with me.",
  summary:
    "Btech CSE Pre-final year student , Exploring open source  Projects. Learning Blockchain Technology and Cross-Platform Development with react native. and [competed in over 10+ hackathons for fun](/#hackathons). Currently Building [Sexbomb.in](#link) & [Kachnibharni.com](https://www.linkedin.com/in/aman-labh-95a205216/) , Contributing Hacktober-Fest-2024 ",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "React-Native",
    "Next.js",
    "Typescript",
    "Node.js",
    "MongoDB",
    "Appwrite",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Linux",
    "Odoo",
    "Payload CMS",
    "Wordpress",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aman@kachnibharni.com",
    tel: "+919835345179",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Amanlabh",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aman-labh-95a205216/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/hackaman4",
        icon: Icons.x,

        navbar: true,
      },
      Chat: {
        name: "Chat",
        url:"https://wa.me/9835345179?text=Hey , Aman!" ,
        icon: Icons.whatsapp,

        navbar: true,
      },
      
     // Youtube: {
       // name: "Youtube",
      //  url: "https://dub.sh/dillion-youtube",
      //  icon: Icons.youtube,
      //  navbar: true,
    //  },
      email: {
        name: "Send Email",
        url: "mailto:aman@kachnibharni.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "kachniBharni",
      href: "https://kachni.com",
      badges: [],
      location: "INDIA",
      title: "Co-Founder , Software Engineer ",
      logoUrl: "/splunk.png",
      start: "November 2023",
      end: "Present",
      description:
        "Developing a prototype Android and IOS app with React-Native and Appwrite.",
    },
    
    {
      company: "WebcoinLabs",
      href: "https://webcoinlabs.com",
      badges: [],
      location: "Remote",
      title: "Web-Developer",
      logoUrl: "/atomic.png",
      start: "september 2022",
      end: "Present",
      description:
        "Enhancing Frontend with Nextjs.",
    },
    {
      company: "Sexbomb.in",
      badges: [],
      href: "https://sexbomb.in",
      location: "Remote",
      title: "Fullstack Web-Developer",
      logoUrl: "/shopify.png",
      start: "August 2024",
      end: "Present",
      description:
        "Building Fullstack E-commerce with NEXTjs , Implemented a custom CMS with odoo to manage Admin side portal & to ease  product and system managment, Integrated Razorpay Payment Gateway , Working with shiprocket for Product Delhivery  "},
    {
      company: "JP-Morgan Online job simulation",
      href: "https://jpmorgan.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "June 2024",
      end: "July 2024",
      description:
        "Interface with a stock price data feed Use JPMorgan Chase & Co. frameworks and tools Display data visually for traders Bonus task: Open source contribution",
    },
   
   
  ],
  education: [
    {
      school: "LPU",
      href: "https://lovelyprofessionaluniversity.com",
      degree: "Btech CSE",
      logoUrl: "/buildspace.jpg",
      start: "2022",
      end: "2026",
    },
    
    
    
  ],
  projects: [
    {
      title: "Assignmate.works",
      href: "https://Assignmate.works",
      dates: "september 2023 - December 2023",
      active: true,
      description:
        "With the release of the [Assignment Assistance](https://assignmate.works/), I decided to build a SaaS which allows users to help students with their assignment. ",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Razorpay",
        "Prisma",
        "TailwindCSS",
   
      ],
      links: [
        {
          type: "Website",
          href: "https://assignmate.works/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://youtu.be/bzAF9RGHJU8?si=AR6CKlDknqCsGZ",
    },
    {
      title: "Webcoinlabs UI",
      href: "https://webcoinlabs",
      dates: "June 2024 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        
        "TailwindCSS",
       
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://webcoinlabs",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.m",
    },
   
  ],
  hackathons: [
    {
      title: "Appwrite Hacktober Fest Global Hackathon",
      dates: "1st October - 31st October 2024",
      location: "Remote",
      description:
        "Developed  Social media Application For Aritst Like Linkedin to Connect and create thier own Community , Manage Workshops and to show case thier artform.",
      image:
      "https://avatars.githubusercontent.com/u/25003669?s=280&v=4",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hacktober Fest",
      dates: "Present",
      location: "Banglore , India",
      description:
        "",
      image:
        "https://pbs.twimg.com/profile_images/1831003149072535554/leInyk8A_400x400.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "Sepetmber 2024",
      location: "LPU, Punjab",
      description:
        "Developed a AI Driven mobile application for Farmers to predict disease and provide pestisides  to the crop with help of AI.",
      image:
        "https://static.wixstatic.com/media/b49d96_c2029acf7fa8411e8122eb976a1e7aeb~mv2.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  
    {
      title: "Aleo WorkShop",
      dates: "July 15th, 2024",
      location: "Attended Remote , Live Event  Dubai",
      description:
        "A standard game of Tic-Tac-Toe in Leo.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*oxVZIooRHQI4v8PauCpOOg.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Amanlabh/Aleo-Tiktactoe",
        },
      ],
    },
    {
      title: "ICP Blockchain Hackathon",
      dates: "December 23rd - 24th, 2023",
      location: "India",
      description:
        "Developed a DAPP like Digi-locker where user can upload their Govt. issued id proofs and School certificates.",
      icon: "public",
      image:
        "https://cdn3d.iconscout.com/3d/premium/thumb/dfinity-3d-icon-download-in-png-blend-fbx-gltf-file-formats--bitcoin-logo-coin-cryptocurrency-symbol-crypto-currency-coins-vol1-pack-science-technology-icons-7947847.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Amanlabh/Dcert",
        },
      ],
    },
    {
      title: "Web 2.0",
      dates: " October 12th - 13th, 2023",
      location: "India",
      description:
        "Developed a E-learning Platform for students with one to one interaction with mentor and AI chat assistance.",
      image:
        "https://t3.ftcdn.net/jpg/00/49/24/40/360_F_49244036_2YJTiEMPjT2teFLIOcf40Dws13fRtgcl.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Amanlabh/breakfast",
        },
      ],
    },
    {
      title: "Eth India - Blockchain Hackathon",
      dates: "October 1st - 2nd, 2023",
      location: "IIT Delhi , India",
      description:
        "Developed a blockchain Crowdfunding DAPP ",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Amanlabh/B3Wallet",
        },
      ],
    },
    {
      title: "Hack the Box",
      dates: "January 20th - 21st, 2022",
      location: "India",
      description:
        "Cyber Security Hackathon where we Practice using tools like Metasploit, Nmap, and Wireshark. - Cryptography: Understand basic cryptographic principles and tools",
      image:
        "https://static-00.iconduck.com/assets.00/hack-the-box-icon-2048x2048-vce7bnzq.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
    
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://hackthebox.com/",
        },
      ],
    },
   
    
  ],
} as const;
