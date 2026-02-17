"use client";

import Link from "next/link";
import { StickyHeader } from "@/components/StickyHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InteractiveCard } from "@/components/InteractiveCard";
import { motion } from "framer-motion";

export const dynamic = "force-dynamic";

const blogPosts = [
  {
    slug: "virtualizace-dom",
    title: "Virtualizace DOM",
    date: "17. února 2026",
    excerpt:
      "Jak efektivně renderovat tisíce řádků v Reactu pomocí virtualizace a knihovny react-window.",
  },
];

export default function Blog() {
  return (
    <>
      {/* Main section header */}
      <StickyHeader level="h2">
        <span className="text-accent-color">#</span> Blog
      </StickyHeader>
      
      <AnimatedSection delay={0.1}>
        <p className="text-lg my-6">
          Sdílím poznatky z vývoje moderních webových aplikací – React, Next.js, architektura a nástroje, které dávají smysl.
        </p>
      </AnimatedSection>

      {/* Each post has a sub-header */}
      {blogPosts.map((post, index) => (
        <AnimatedSection key={post.slug} delay={0.15 + index * 0.08}>
          <section className="mb-2">
            <StickyHeader level="h3">
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="no-underline hover:text-accent-color text-foreground font-semibold"
                >
                  {post.title}
                </Link>
              </motion.div>
            </StickyHeader>
            <InteractiveCard className="py-6 border-b border-border">
              <time className="text-sm text-muted-foreground">{post.date}</time>
              <p className="mt-3 mb-0 text-muted-foreground">{post.excerpt}</p>
              <motion.div
                className="mt-3"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-sm"
                >
                  Číst článek →
                </Link>
              </motion.div>
            </InteractiveCard>
          </section>
        </AnimatedSection>
      ))}
    </>
  );
}
