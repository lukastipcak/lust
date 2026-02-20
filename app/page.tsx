'use client'

import Link from 'next/link'
import { StickyHeader } from '@/shared/components/StickyHeader'
import { AnimatedSection } from '@/shared/components/AnimatedSection'
import { InteractiveCard } from '@/shared/components/InteractiveCard'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            <AnimatedSection delay={0}>
                <section className="flex flex-col sm:flex-row gap-10 items-start mb-20">
                    <motion.div
                        className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden shadow-sm border border-border"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Image
                            src="/profile.webp"
                            alt="Profilová fotografie"
                            fill
                            priority
                            sizes="(max-width: 640px) 112px, 144px"
                            className="object-cover transform transition-transform duration-500 hover:scale-110"
                        />
                    </motion.div>

                    <div className="flex-1">
                        <h1 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-balance">
                            Software developer se zaměřením na <span className="text-accent-color italic">Frontend</span>.
                        </h1>

                        <div className="space-y-6 text-lg leading-relaxed text-balance">
                            <p>
                                Ahoj, jsem{' '}
                                <span className="text-accent-color font-semibold underline underline-offset-4 decoration-accent-color/30">
                                    Lukáš
                                </span>
                                . IT dělám hlavně proto, že mě baví tvořit věci, které jsou hned vidět a lidé je mohou okamžitě
                                používat.
                            </p>

                            <div className="relative pl-6 border-l-2 border-accent-color/30 py-1">
                                <p className="text-muted-foreground italic">
                                    Frontend pro mě není jen o estetice. Je to hlavně o té{' '}
                                    <span className="text-foreground font-medium">„neviditelné“ práci pod kapotou</span> – o
                                    hledání způsobů, jak aplikaci zrychlit, optimalizovat vykreslování a postavit logiku, která
                                    zvládne i ty nejsložitější úkoly s lehkostí.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Link
                                href="/o-mne"
                                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-lg text-sm font-semibold transition-all hover:bg-foreground/90 active:scale-95 shadow-md"
                            >
                                <span>Více o mně</span>
                                <motion.span className="text-accent-color" initial={{ x: 0 }} whileHover={{ x: 3 }}>
                                    →
                                </motion.span>
                            </Link>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
                <section>
                    <StickyHeader level="h2">
                        <span className="text-accent-color">#</span> Co mě aktuálně zajímá
                    </StickyHeader>

                    <ul className="list-none p-0 mt-4">
                        {[
                            {
                                slug: 'virtualizace-dom',
                                title: 'Virtualizace DOM v Reactu',
                                year: '2026',
                            },
                        ].map((post, i) => (
                            <motion.li
                                key={post.slug}
                                className="py-3 border-b border-border m-0"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                            >
                                <InteractiveCard>
                                    <div className="flex items-center justify-between">
                                        <Link href={`/blog/${post.slug}`} className="no-underline hover:underline">
                                            <span className="text-foreground font-medium">{post.title}</span>
                                        </Link>

                                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                                            {post.year}
                                        </span>
                                    </div>
                                </InteractiveCard>
                            </motion.li>
                        ))}
                    </ul>

                    <motion.p className="mt-4" whileHover={{ x: 4 }} transition={{ duration: 0.15 }}>
                        <Link href="/blog">Zobrazit všechny články</Link>
                    </motion.p>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
                <section className="mt-12">
                    <StickyHeader level="h2">
                        <span className="text-accent-color">#</span> Vybrané projekty
                    </StickyHeader>

                    <ul className="list-none p-0 mt-4">
                        {[
                            {
                                name: 'AdminCore HUB',
                                desc: 'Modulární administrační platforma navržená pro škálovatelné business nástroje',
                            },
                            {
                                name: 'Webová stránka pro zemní a výkopové práce',
                                desc: 'SEO optimalizovaný web s CMS napojením na Strapi a poptávkovým formulářem',
                            },
                        ].map((project, i) => (
                            <motion.li
                                key={project.name}
                                className="py-3 border-b border-border m-0"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                            >
                                <InteractiveCard>
                                    <Link href="/projekty" className="no-underline hover:underline">
                                        <span className="text-foreground font-medium">{project.name}</span>
                                    </Link>

                                    <p className="text-muted-foreground text-sm mt-1">{project.desc}</p>
                                </InteractiveCard>
                            </motion.li>
                        ))}
                    </ul>

                    <motion.p className="mt-4" whileHover={{ x: 4 }} transition={{ duration: 0.15 }}>
                        <Link href="/projekty">Zobrazit všechny projekty</Link>
                    </motion.p>
                </section>
            </AnimatedSection>
        </>
    )
}
