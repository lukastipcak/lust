import { ReactNode, forwardRef } from 'react'

interface StickyHeaderProps {
    children: ReactNode
    level: 'h2' | 'h3'
    className?: string
}

export const StickyHeader = forwardRef<HTMLHeadingElement, StickyHeaderProps>(({ children, level, className = '' }, ref) => {
    // h2 sticks at top, h3 sticks below h2 (after scrolling past it)
    const config = {
        h2: {
            top: 'top-0',
            zIndex: 'z-20',
            Tag: 'h2' as const,
        },
        h3: {
            top: 'top-[56px]', // Height of h2 sticky header
            zIndex: 'z-10',
            Tag: 'h3' as const,
        },
    }

    const { top, zIndex, Tag } = config[level]

    return (
        <Tag
            ref={ref}
            className={`sticky ${top} ${zIndex} bg-background py-4 border-b border-border -mx-8 px-8 mt-0 mb-0 ${className}`}
        >
            {children}
        </Tag>
    )
})

StickyHeader.displayName = 'StickyHeader'
