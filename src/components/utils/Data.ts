import {
  Gamepad2,
  Headphones,
  Image,
  LucideIcon,
  Share2,
  Shirt,
  ShoppingCart,
  Ticket,
} from "lucide-react";

export interface ISectionCardData {
  id: number;
  title: string;
  src: string;
  exp: string;
  snippetCount: number;
  progress: number;
  href?: string;
}

export interface IProjectSectionCardData {
  id: number;
  imageUrl?: string;
  icon?: string;
  title: string;
  techStack: string;
  href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
  {
    id: 1,
    title: "BIT-Connect",
    techStack: "EJS, Bootstrap, NodeJS, ExpresJS, PostgreSQL, AWS, Python",
    imageUrl: "bit-logo-icon.png",
    href: "https://www.bitballarpur.co.in",
  },
  {
    id: 2,
    title: "Realtime Bus Tracking ",
    techStack: "EJS, NodeJS, ExpressJS, Socket.io, PostgreSQL, BootStrap",
    imageUrl: "bus-tracking.png",
    href: "https://bus-tracking-trbx.onrender.com",
  },
  {
    id: 3,
    title: "Aptitude Quiz App",
    techStack: "NodeJs, Express, ReactJs, Material UI, Firebase, PostgreSQL",
    imageUrl: "quiz.jpg",
    href: "https://ai-quiz-app.vercel.app/",
  },
  {
    id: 4,
    title: "Coaching Institue Landing Page",
    techStack: "ReactJS, Tailwind CSS, Firebase",
    imageUrl: "circular-icon.png",
    href: "https://tie-academy.vercel.app/",
  },
];

export const moreProjects = [
  {
    id: 1,
    title: "Startup Blocks",
    techStack: "ReactJS, Tailwind CSS, NodeJs, ExpressJs, PostgreSQL",
    icon: "lottery",
    href: "https://startup-blocks.vercel.app/",
  },
  {
    id: 2,
    title: "GreenYard",
    techStack: "EJS, NodeJS, ExpressJS, Socket.io, PostgreSQL, BootStrap",
    icon: "shirt",
    href: "https://www.greenyard.onrender.com",
  },
  {
    id: 3,
    title: "Nike Clone",
    techStack: "ReactJS, Tailwind CSS",
    icon: "lottery",
    href: "https://web-clones-chi.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Advance SQL Engine",
  //   techStack: "Python, PostgreSQL, Pandas",
  //   icon: "lottery",
  //   href: "https://web-clones-chi.vercel.app/",
  // },

];

export const frontendCard: ISectionCardData[] = [
  {
    id: 1,
    title: "HTML, CSS",
    src: "/tech/frontend/htmlcss.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: "Tailwind",
    src: "/tech/frontend/tailwind.jpg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: "Javascript, Typescript",
    src: "/tech/frontend/jsts.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 85,
  },
  {
    id: 4,
    title: "Reactjs",
    src: "/tech/frontend/reactjs.jpg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  // {
  //   id: 5,
  //   title: "Nextjs 13",
  //   src: "/tech/frontend/nextjs13.jpeg",
  //   exp: "1 day ago",
  //   snippetCount: 1128,
  //   progress: 80,
  // },
];

export const backendCard: ISectionCardData[] = [
  {
    id: 1,
    title: "NodeJs",
    src: "/tech/backend/nodejs.webp",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: "ExpressJs",
    src: "/tech/backend/express.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: "DenoJs",
    src: "/tech/backend/denojs.webp",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 60,
  },
  {
    id: 4,
    title: "Next Auth",
    src: "/tech/backend/nextauth.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 5,
    title: "PHP",
    src: "/tech/backend/php.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
];

export const databaseCard: ISectionCardData[] = [
  {
    id: 1,
    title: "MySQL",
    src: "/tech/database/mysql.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: "MongoDB",
    src: "/tech/database/mongo.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: "Redis",
    src: "/tech/database/redis.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 4,
    title: "PostgreSQL",
    src: "/tech/database/postgres.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
];

export const devopsCards: ISectionCardData[] = [
  {
    id: 1,
    title: "Docker",
    src: "/tech/devops/docker.webp",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: "Kubernetes",
    src: "/tech/devops/k8s.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: "GIT",
    src: "/tech/devops/git.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },

];

export const web3Cards: ISectionCardData[] = [
  {
    id: 1,
    title: "Solidity",
    src: "/tech/web3/solidity.jfif",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: "Hardhat",
    src: "/tech/web3/hardhat.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: "Metamask",
    src: "/tech/web3/metamask.webp",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 4,
    title: "Chainlink",
    src: "/tech/web3/chainlink.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 5,
    title: "OpenZeppelin",
    src: "/tech/web3/openzeppelin.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
];

export const otherCards: ISectionCardData[] = [
  {
    id: 1,
    title: "Rest API",
    src: "/tech/others/rest.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: "SOAP API",
    src: "/tech/others/soap.jpg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 3,
    title: "GraphQl",
    src: "/tech/others/graphql.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 70,
  },
];
