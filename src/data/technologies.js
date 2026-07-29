import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaFigma,
  FaGitAlt,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa"
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiJest,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiKotlin,
} from "react-icons/si"
import { TbShieldCheck, TbAtom } from "react-icons/tb"

export const stackData = [
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL", icon: FaDatabase, color: "#4479A1" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Zustand", icon: TbAtom, color: "#614a30" },
      { name: "Zod", icon: TbShieldCheck, color: "#3068B7" },
    ],
  },
    {
    category: "Ferramentas",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native", icon: FaReact, color: "#61DAFB" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    ],
  },
]

export const flatTechnologies = stackData.flatMap(group => group.items)
