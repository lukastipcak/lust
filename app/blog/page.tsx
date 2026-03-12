'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { posts } from '@/lib/posts'
import { StickyHeader } from '@/shared/components/StickyHeader'
import { AnimatedSection } from '@/shared/components/AnimatedSection'
import { InteractiveCard } from '@/shared/components/InteractiveCard'

export default function BlogPage() {
    return (
        <>
            <StickyHeader level="h2">
                <span className="text-accent-color">#</span> Blog
            </StickyHeader>

            <AnimatedSection delay={0.1}>
                <div className="max-w-2xl">
                    <p className="text-lg my-6 text-muted-foreground leading-relaxed text-pretty">
                        Píšu o věcech, na které při <span className="text-foreground">vývoji narazím</span> a přijdou mi zajímavé.
                        Většinou je to <span className="text-foreground font-medium">React</span> nebo{' '}
                        <span className="text-foreground font-medium">Next.js</span>, ale občas vytáhnu i úplně jiné téma z IT,
                        které mi prostě dalo smysl nasdílet.
                    </p>
                </div>
            </AnimatedSection>

            <div className="space-y-12 mt-12">
                {posts.map((post, index) => (
                    <AnimatedSection key={post.slug} delay={0.15 + index * 0.08}>
                        <article className="group relative">
                            {/* Nadpis s interaktivním posunem */}
                            <StickyHeader level="h3">
                                <motion.div whileHover={{ x: 6 }} transition={{ duration: 0.2 }}>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="no-underline hover:text-accent-color text-foreground font-bold text-2xl transition-colors"
                                    >
                                        {post.title}
                                    </Link>
                                </motion.div>
                            </StickyHeader>

                            <InteractiveCard className="py-4 border-b border-border/50">
                                {/* Horní metadata řada */}
                                <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground/60 mb-3">
                                    <time dateTime={post.dateISO}>{post.date}</time>
                                    <span>•</span>
                                    <span>{post.readingTime || '5'} min čtení</span>
                                </div>

                                {/* Hlavní lákadlo (Hook) */}
                                <p className="text-base text-muted-foreground leading-relaxed mb-4 max-w-2xl">{post.excerpt}</p>

                                {/* Akce */}
                                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.15 }}>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-sm font-medium text-accent-color no-underline gap-1"
                                    >
                                        Otevřít článek
                                        <span className="text-xs">→</span>
                                    </Link>
                                </motion.div>
                            </InteractiveCard>
                        </article>
                    </AnimatedSection>
                ))}
            </div>
        </>
    )
}
