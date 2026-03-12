import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllSlugs, getPost, SITE_AUTHOR, SITE_URL } from '@/lib/posts'

type PageProps = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
    return getAllSlugs()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const post = getPost(slug)
    if (!post) return {}

    const url = `${SITE_URL}/blog/${slug}`

    return {
        title: post.title,
        description: post.description,
        keywords: post.keywords,
        authors: [{ name: SITE_AUTHOR, url: SITE_URL }],
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url,
            publishedTime: post.dateISO,
            locale: 'cs_CZ',
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
        },
        alternates: { canonical: url },
    }
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params
    const post = getPost(slug)

    if (!post) {
        return (
            <>
                <h1>Článek nenalezen</h1>
                <p>
                    <Link href="/blog">← Zpět na blog</Link>
                </p>
            </>
        )
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        keywords: post.keywords.join(', '),
        datePublished: post.dateISO,
        dateModified: post.dateISO,
        inLanguage: 'cs',
        url: `${SITE_URL}/blog/${slug}`,
        author: { '@type': 'Person', name: SITE_AUTHOR, url: SITE_URL },
        publisher: { '@type': 'Person', name: SITE_AUTHOR, url: SITE_URL },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${slug}` },
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <article>
                <header className="mb-10">
                    <p className="text-muted-foreground mb-2">
                        <Link href="/blog" className="no-underline hover:underline">
                            ← Zpět na blog
                        </Link>
                    </p>
                    <h1 className="mb-2">{post.title}</h1>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <time dateTime={post.dateISO}>{post.date}</time>
                        <span>·</span>
                        <span>{post.readingTime} min čtení</span>
                    </div>
                </header>

                <div className="prose">{post.content}</div>
            </article>
        </>
    )
}
