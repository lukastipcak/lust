"use client";

import { Badge } from "@/components/ui/badge";
import { StickyHeader } from "@/components/StickyHeader";
import { TechChip } from "@/components/TechChip";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InteractiveCard } from "@/components/InteractiveCard";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  media?: string; // URL to image/video/svg
  mediaAlt?: string;
}

const projects: Project[] = [
  {
    name: "Fakturační systém",
    description:
      "Full-stack aplikace pro správu faktur a napojení na bankovní API. Automatická kategorizace transakcí.",
    tech: ["React", "Node.js", "PostgreSQL", "Prisma"],
  },
  {
    name: "CRM systém",
    description:
      "Komplexní systém pro správu kontraktů, automatizaci workflow a generování reportů pro daňovou kancelář.",
    tech: ["Next.js", "tRPC", "PostgreSQL"],
  },
];

const practice: Project[] = [
  {
    name: "react-form-validator",
    description:
      "Lehká knihovna pro validaci formulářů v Reactu. Zero dependencies, TypeScript first, plná podpora pro async validace.",
    tech: ["TypeScript", "React"],
    github: "https://github.com",
  },
  {
    name: "portfolio-template",
    description:
      "Minimalistická šablona portfolia pro vývojáře. Inspirovaná taniarascia.com, zaměřená na obsah a čitelnost.",
    tech: ["Next.js", "MDX", "Tailwind CSS"],
    github: "https://github.com",
  },
  {
    name: "use-virtualized-list",
    description:
      "React hook pro efektivní renderování velkých seznamů. Inspirováno react-window, ale s modernějším API.",
    tech: ["TypeScript", "React"],
    github: "https://github.com",
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <InteractiveCard className="py-6 border-b border-border">
    {/* Media placeholder */}
    <div className="mb-4 rounded-md border border-border bg-muted/30 overflow-hidden">
      <AspectRatio ratio={16 / 9}>
        {project.media ? (
          <img
            src={project.media}
            alt={project.mediaAlt || project.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-40"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </div>
        )}
      </AspectRatio>
    </div>

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
);

const Projects = () => {
  return (
    <>
      {/* Projekty section */}
      <StickyHeader level="h2">
        <span className="text-accent-color">#</span> Projekty
      </StickyHeader>

      <AnimatedSection delay={0.1}>
        <p className="text-lg my-6">
          Komerční projekty, na kterých jsem pracoval.
        </p>
      </AnimatedSection>

      {projects.map((project, index) => (
        <AnimatedSection key={project.name} delay={0.15 + index * 0.08}>
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
                <Badge variant="secondary" className="shrink-0 font-normal text-xs">
                  komerční
                </Badge>
              </div>
            </StickyHeader>
            <ProjectCard project={project} />
          </section>
        </AnimatedSection>
      ))}

      {/* Practice section */}
      <div className="mt-12">
        <StickyHeader level="h2">
          <span className="text-accent-color">#</span> Practice
        </StickyHeader>

        <AnimatedSection delay={0.1}>
          <p className="text-lg my-6">
            Osobní projekty a open source experimenty. Volně dostupné na GitHubu.
          </p>
        </AnimatedSection>

        {practice.map((project, index) => (
          <AnimatedSection key={project.name} delay={0.15 + index * 0.08}>
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
                  <Badge variant="default" className="shrink-0 font-normal text-xs">
                    open-source
                  </Badge>
                </div>
              </StickyHeader>
              <ProjectCard project={project} />
            </section>
          </AnimatedSection>
        ))}
      </div>
    </>
  );
};

export default Projects;