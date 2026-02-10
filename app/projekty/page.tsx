"use client";

import { Badge } from "@/components/ui/badge";
import { StickyHeader } from "@/components/StickyHeader";
import { TechChip } from "@/components/TechChip";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InteractiveCard } from "@/components/InteractiveCard";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "react-form-validator",
    description:
      "Lehká knihovna pro validaci formulářů v Reactu. Zero dependencies, TypeScript first, plná podpora pro async validace.",
    tech: ["TypeScript", "React"],
    github: "https://github.com",
    type: "open-source",
  },
  {
    name: "portfolio-template",
    description:
      "Minimalistická šablona portfolia pro vývojáře. Zaměřená na obsah a čitelnost.",
    tech: ["Next.js", "MDX", "Tailwind CSS"],
    github: "https://github.com",
    type: "open-source",
  },
  {
    name: "use-virtualized-list",
    description:
      "React hook pro efektivní renderování velkých seznamů. Inspirováno react-window, ale s modernějším API.",
    tech: ["TypeScript", "React"],
    github: "https://github.com",
    type: "open-source",
  },
  {
    name: "Fakturační systém",
    description:
      "Full-stack aplikace pro správu faktur a napojení na bankovní API. Automatická kategorizace transakcí.",
    tech: ["React", "Node.js", "PostgreSQL", "Prisma"],
    github: null,
    type: "komerční",
  },
  {
    name: "CRM systém",
    description:
      "Komplexní systém pro správu kontraktů, automatizaci workflow a generování reportů pro daňovou kancelář.",
    tech: ["Next.js", "tRPC", "PostgreSQL"],
    github: null,
    type: "komerční",
  },
];

export default function Projects() {
  return (
    <>
      {/* Main section header - sticks at top */}
      <StickyHeader level="h2">
        <span className="text-accent-color">#</span> Projekty
      </StickyHeader>
      
      <AnimatedSection delay={0.1}>
        <p className="text-lg my-6">
          Osobní projekty a open source.
        </p>
      </AnimatedSection>

      {/* Each project has a sub-header that sticks below the main header */}
      {projects.map((project, index) => (
        <AnimatedSection key={index} delay={0.15 + index * 0.08}>
          <section className="mb-2">
            <StickyHeader level="h3">
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2 font-semibold">
                  {project.github ? (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline hover:text-accent-color flex items-center gap-2 text-foreground"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.15 }}
                    >
                      {project.name}
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  ) : (
                    project.name
                  )}
                </span>
                <Badge
                  variant={project.type === "open-source" ? "default" : "secondary"}
                  className="shrink-0 font-normal text-xs"
                >
                  {project.type}
                </Badge>
              </div>
            </StickyHeader>
            
            <InteractiveCard className="py-6 border-b border-border">
              <p className="mb-4 text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <TechChip key={t} name={t} variant="outline" />
                ))}
              </div>
              {project.github && (
                <motion.p 
                  className="mt-4 mb-0"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Zobrazit na GitHubu
                  </a>
                </motion.p>
              )}
            </InteractiveCard>
          </section>
        </AnimatedSection>
      ))}
    </>
  );
}
