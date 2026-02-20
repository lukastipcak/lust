'use client'

import { Badge } from '@/shared/elements/badge'
import { StickyHeader } from '@/shared/components/StickyHeader'
import { TechChip } from '@/shared/components/TechChip'
import { AnimatedSection } from '@/shared/components/AnimatedSection'
import { InteractiveCard } from '@/shared/components/InteractiveCard'
import { Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { AspectRatio } from '@/shared/elements/aspect-ratio'

interface Project {
    name: string
    description: string
    tech: string[]
    github?: string
    media?: string // URL to image/video/svg
    mediaAlt?: string
}

const projects: Project[] = []

const practice: Project[] = [
    {
        name: 'AdminCore HUB',
        description:
            'Modulární full-stack admin platforma postavená na MERN stacku. Navržena jako škálovatelný základ pro firemní nástroje (správa úkolů, správa uživatelů, rezervační systémy, CRM moduly). Obsahuje JWT autentizaci, chráněné routy, centralizovanou správu stavu aplikace a architekturu postavenou na REST API.',
        tech: [
            // Frontend
            'React',
            'TypeScript',
            'Redux',
            'React Router',
            'React Hook Form',
            'Yup',
            'React Query',
            'Axios',
            'Material-UI',

            // Backend
            'Node.js',
            'Express',
            'Mongoose',
            'JWT',
            'bcryptjs',

            // Database
            'MongoDB',
        ],
        github: 'https://github.com/tolukahub/adminApp',
    },
    {
        name: 'Webová stránka - zemní a výkopové práce',
        description:
            'Webová stránka pro firmu zabývající se zemními a výkopovými pracemi. Postaveno na Next.js a Tailwind CSS s důrazem na SEO optimalizaci. Napojeno na Strapi, aby mohl klient sám nahrávat fotografie a aktualizovat obsah. Obsahuje poptávkový formulář propojený s Resend pro odesílání e-mailů.',
        tech: ['Next.js', 'Tailwind CSS', 'Strapi', 'Resend', 'React'],
        github: 'https://github.com/lukastipcak/zemni-prace-web',
    },
]

const ProjectCard = ({ project }: { project: Project }) => (
    <InteractiveCard className="py-6 border-b border-border">
        {/* Media placeholder */}
        <div className="mb-4 rounded-md border border-border bg-muted/30 overflow-hidden">
            <AspectRatio ratio={16 / 9}>
                {project.media ? (
                    <img src={project.media} alt={project.mediaAlt || project.name} className="w-full h-full object-cover" />
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
            <motion.p className="mt-4 mb-0" whileHover={{ x: 4 }} transition={{ duration: 0.15 }}>
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
)

const Projects = () => {
    return (
        <>
            {/* Projekty section */}
            <StickyHeader level="h2">
                <span className="text-accent-color">#</span> Projekty
            </StickyHeader>

            <AnimatedSection delay={0.1}>
                <p className="text-lg my-6">Komerční projekty, na kterých jsem pracoval.</p>
            </AnimatedSection>

            {projects.length === 0 ? (
                <div className="border rounded-lg p-6 text-sm text-muted-foreground bg-muted/40">
                    Připravuji detailní prezentaci komerčních projektů. Sekce bude brzy aktualizována.
                </div>
            ) : (
                projects.map((project, index) => (
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
                ))
            )}

            {/* Practice section */}
            <div className="mt-12">
                <StickyHeader level="h2">
                    <span className="text-accent-color">#</span> Practice
                </StickyHeader>

                <AnimatedSection delay={0.1}>
                    <p className="text-lg my-6">Osobní projekty a open source experimenty. Volně dostupné na GitHubu.</p>
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
    )
}

export default Projects
