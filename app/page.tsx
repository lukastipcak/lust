"use client";

import Link from "next/link";
import { StickyHeader } from "@/components/StickyHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InteractiveCard } from "@/components/InteractiveCard";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Hero / Intro */}
      <AnimatedSection delay={0}>
        <section className="flex flex-col sm:flex-row gap-8 items-start mb-16">
          {/* Photo placeholder with hover effect */}
          <motion.div 
            className="w-28 h-28 sm:w-36 sm:h-36 bg-muted flex items-center justify-center text-muted-foreground text-xs shrink-0 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Vaše fotka
          </motion.div>
          
          <div>
            <h1 className="mb-4">
              Ahoj, jsem <span className="text-accent-color">Lukáš</span>.
            </h1>
            <p className="text-lg mb-4">
              Jsem software developer. Tvořím{" "}
              <Link href="/projekty">open source projekty</Link> a píšu o{" "}
              <Link href="/blog">webovém vývoji</Link>.
            </p>
            <p className="text-muted-foreground">
              Aktuálně se věnuji React ekosystému, výkonu aplikací a DX.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Latest Posts */}
      <AnimatedSection delay={0.15}>
        <section>
          <StickyHeader level="h2">
            <span className="text-accent-color">#</span> Poslední články
          </StickyHeader>
          <ul className="list-none p-0 mt-4">
            {[
              { slug: "virtualizace-dom", title: "Virtualizace DOM s React Window", year: "2024" },
              { slug: "defer-render", title: "Defer Render Component Pattern", year: "2024" },
            ].map((post, i) => (
              <motion.li 
                key={post.slug}
                className="py-3 border-b border-border m-0"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <InteractiveCard>
                  <Link href={`/blog/${post.slug}`} className="no-underline hover:underline">
                    <span className="text-foreground">{post.title}</span>
                  </Link>
                  <span className="text-muted-foreground text-sm ml-2">— {post.year}</span>
                </InteractiveCard>
              </motion.li>
            ))}
          </ul>
          <motion.p 
            className="mt-4"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.15 }}
          >
            <Link href="/blog">Všechny články →</Link>
          </motion.p>
        </section>
      </AnimatedSection>

      {/* Featured Projects */}
      <AnimatedSection delay={0.25}>
        <section className="mt-12">
          <StickyHeader level="h2">
            <span className="text-accent-color">#</span> Vybrané projekty
          </StickyHeader>
          <ul className="list-none p-0 mt-4">
            {[
              { name: "react-form-validator", desc: "Lehká validační knihovna pro React formuláře" },
              { name: "portfolio-template", desc: "Minimalistická šablona pro vývojářské portfolio" },
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
                    <span className="text-foreground">{project.name}</span>
                  </Link>
                  <span className="text-muted-foreground text-sm ml-2">— {project.desc}</span>
                </InteractiveCard>
              </motion.li>
            ))}
          </ul>
          <motion.p 
            className="mt-4"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.15 }}
          >
            <Link href="/projekty">Všechny projekty →</Link>
          </motion.p>
        </section>
      </AnimatedSection>
    </>
  );
}
