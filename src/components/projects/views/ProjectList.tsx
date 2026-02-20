'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { Badge } from '@/shared/elements/badge'
import { AspectRatio } from '@/shared/elements/aspect-ratio'
import { TechChip } from '@/shared/components/TechChip'
import { AnimatedSection } from '@/shared/components/AnimatedSection'
import { InteractiveCard } from '@/shared/components/InteractiveCard'
import { StickyHeader } from '@/shared/components/StickyHeader'
import { Project } from '../types'

export const ProjectList = ({ projects, badgeText }: { projects: Project[]; badgeText: string }) => {
    if (projects.length === 0) {
        return (
            <div className="border rounded-lg p-6 text-sm text-muted-foreground bg-muted/40">
                Připravuji detailní prezentaci. Sekce bude brzy aktualizována.
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {projects.map((project, index) => (
                <AnimatedSection key={project.name} delay={0.15 + index * 0.08}>
                    <section className="mb-2">
                        <StickyHeader level="h3">
                            <div className="flex items-center justify-between gap-4">
                                <span className="flex items-center gap-2 font-semibold text-foreground">
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
                                    variant={badgeText === 'komerční' ? 'secondary' : 'default'}
                                    className="shrink-0 font-normal text-xs"
                                >
                                    {badgeText}
                                </Badge>
                            </div>
                        </StickyHeader>

                        <InteractiveCard className="py-6 border-b border-border">
                            <div className="mb-4 rounded-md border border-border bg-muted/30 overflow-hidden">
                                <AspectRatio ratio={16 / 9}>
                                    {project.media ? (
                                        <Image
                                            src={project.media}
                                            alt={project.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center opacity-40">
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
                                            </svg>{' '}
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
                        </InteractiveCard>
                    </section>
                </AnimatedSection>
            ))}
        </div>
    )
}
