'use client'

import { Suspense } from 'react'
import { StickyHeader } from '@/shared/components/StickyHeader'
import { Skeleton } from '@/shared/elements/skeleton'
import { AspectRatio } from '@/shared/elements/aspect-ratio'
import { PROJECTS_CONTENT } from '@/components/projects/constants/constant'
import { ProjectList } from '@/components/projects/views/ProjectList'

const ListSkeleton = () => (
    <div className="space-y-6">
        {[1].map((i) => (
            <div key={i} className="border-b border-border pb-6 min-h-[300px]">
                <div className="mb-4 rounded-md border border-border bg-muted/30 overflow-hidden">
                    <AspectRatio ratio={16 / 9}>
                        <Skeleton className="w-full h-full" />
                    </AspectRatio>
                </div>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3 mb-4" />
                <div className="flex gap-2">
                    {[1, 2, 3, 4].map((j) => (
                        <Skeleton key={j} className="h-6 w-20 rounded-full" />
                    ))}
                </div>
            </div>
        ))}
    </div>
)

export default function ProjectsPage() {
    const { commercial, practice } = PROJECTS_CONTENT

    return (
        <>
            <StickyHeader level="h2">
                <span className="text-accent-color">#</span> {commercial.title}
            </StickyHeader>
            <p className="text-lg my-6">{commercial.description}</p>

            <Suspense fallback={<ListSkeleton />}>
                <ProjectList projects={commercial.items} badgeText={commercial.badge} />
            </Suspense>

            <div className="mt-12">
                <StickyHeader level="h2">
                    <span className="text-accent-color">#</span> {practice.title}
                </StickyHeader>
                <p className="text-lg my-6">{practice.description}</p>

                <Suspense fallback={<ListSkeleton />}>
                    <ProjectList projects={practice.items} badgeText={practice.badge} />
                </Suspense>
            </div>
        </>
    )
}
