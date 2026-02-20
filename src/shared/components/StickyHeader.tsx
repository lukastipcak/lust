import { ReactNode, forwardRef } from 'react'

type StickyHeaderProps = {
    children: ReactNode
    level: 'h2' | 'h3'
    className?: string
}

export const StickyHeader = forwardRef<HTMLHeadingElement, StickyHeaderProps>(({ children, level, className = '' }, ref) => {
    const config = {
        h2: {
            top: 'top-[52px] lg:top-0',
            zIndex: 'z-20',
            Tag: 'h2' as const,
        },
        h3: {
            top: 'top-[108px] lg:top-[56px]',
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
