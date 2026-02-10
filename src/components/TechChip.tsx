import { 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPostgresql, 
  SiPrisma, 
  SiDocker, 
  SiGit,
  SiPython,
  SiRedis,
  SiMongodb,
  SiVite,
  SiVitest,
  SiJavascript,
  SiExpress,
  SiFramer,
  SiGraphql,
  SiLinux,
  SiTrpc
} from "react-icons/si";
import { TestTube } from "lucide-react";

const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "PostgreSQL": SiPostgresql,
  "Prisma": SiPrisma,
  "Docker": SiDocker,
  "Git": SiGit,
  "Python": SiPython,
  "Redis": SiRedis,
  "MongoDB": SiMongodb,
  "Vite": SiVite,
  "Vitest": SiVitest,
  "Playwright": TestTube,
  "Express": SiExpress,
  "Framer Motion": SiFramer,
  "GraphQL": SiGraphql,
  "Linux": SiLinux,
  "tRPC": SiTrpc,
  "MDX": SiReact,
  "SQL": SiPostgresql,
};

interface TechChipProps {
  name: string;
  variant?: "default" | "outline";
}

export const TechChip = ({ name, variant = "default" }: TechChipProps) => {
  const Icon = techIcons[name];
  
  return (
    <span 
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full transition-colors ${
        variant === "outline" 
          ? "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30" 
          : "bg-muted text-muted-foreground hover:text-foreground"
      }`}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {name}
    </span>
  );
};
