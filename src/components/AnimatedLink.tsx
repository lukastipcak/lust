'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedLinkProps {
    children: ReactNode
    href?: string
    className?: string
    external?: boolean
}

export const AnimatedLink = ({ children, className = '', external = false, href = '/' }: AnimatedLinkProps) => {
    const content = (
        <span className="relative inline-block">
            {children}
            <motion.span
                className="absolute bottom-0 left-0 w-full h-px bg-accent-color origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
            />
        </span>
    )

    if (external && href) {
        return (
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`no-underline text-foreground hover:text-accent-color transition-colors ${className}`}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.15 }}
            >
                {content}
            </motion.a>
        )
    }

    return (
        <motion.div className="inline-block" whileHover={{ x: 2 }} transition={{ duration: 0.15 }}>
            <Link href={href} className={`no-underline text-foreground hover:text-accent-color transition-colors ${className}`}>
                {content}
            </Link>
        </motion.div>
    )
}
