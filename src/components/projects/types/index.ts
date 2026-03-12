export type Project = {
    slug: string
    name: string
    shortDescription: string
    description: string
    tech: string[]
    year: string
    github?: string
    preview?: string
    media?: string
    mediaAlt?: string
}

export type ProjectSection = {
    title: string
    description: string
    badge: string
    items: Project[]
}

export type ProjectsContent = {
    commercial: ProjectSection
    practice: ProjectSection
}
