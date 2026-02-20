import Link from 'next/link'

export const dynamic = 'force-dynamic'

const blogContent: Record<string, { title: string; date: string; content: React.ReactNode }> = {
    'virtualizace-dom': {
        title: 'Virtualizace DOM v Reactu',
        date: '17. února 2026',
        content: (
            <>
                <p>
                    Při práci s většími datasety v Reactu se limity výkonu projeví poměrně rychle. Renderování stovek nebo tisíců
                    řádků není problém pro JavaScript samotný. Skutečnou zátěží je DOM.
                </p>

                <h2>Problém</h2>
                <p>
                    Každý DOM element zabírá paměť a prohlížeč musí počítat layout, aplikovat styly a provádět reflow operace pro
                    všechny vykreslené prvky. Už kolem 100 až 200 řádků, zvlášť pokud obsahují složitější komponenty, může být
                    znatelné zpomalení.
                </p>

                <p>
                    Typicky se projeví delší initial render, trhané scrollování nebo opožděné reakce na uživatelskou interakci. S
                    rostoucím počtem prvků roste i cena přepočtu layoutu a repaint operací, což může vést k viditelným prodlevám.
                </p>

                <h2>Řešení: virtualizace</h2>
                <p>
                    Virtualizace znamená, že se renderují pouze položky, které jsou aktuálně viditelné v viewportu, případně malý
                    buffer nad a pod nimi.
                </p>

                <p>
                    V React ekosystému se běžně používají knihovny jako <code>react-window</code> nebo{' '}
                    <code>@tanstack/virtual</code>, které tuto optimalizaci řeší efektivně a s minimální režií.
                </p>

                <pre>
                    {`import { FixedSizeList } from 'react-window';

const List = ({ items }) => (
  <FixedSizeList
    height={400}
    itemCount={items.length}
    itemSize={35}
    width="100%"
  >
    {({ index, style }) => (
      <div style={style}>
        {items[index]}
      </div>
    )}
  </FixedSizeList>
);`}
                </pre>

                <h2>Kdy virtualizovat</h2>
                <ul>
                    <li>Pokud renderujete více než 100 až 200 položek</li>
                    <li>Pokud mají položky složitější strukturu</li>
                    <li>Pokud dochází k lagům při scrollování</li>
                    <li>Pokud je initial render výrazně pomalý</li>
                </ul>

                <p>
                    Virtualizace není univerzální řešení pro každý případ. Přidává určitou komplexitu do implementace. U větších
                    datasetů je ale často nejefektivnějším způsobem, jak udržet aplikaci plynulou a responzivní.
                </p>
            </>
        ),
    },
}

type PageProps = {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return Object.keys(blogContent).map((slug) => ({
        slug,
    }))
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params
    const post = blogContent[slug]

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

    return (
        <article>
            <header className="mb-10">
                <p className="text-muted-foreground mb-2">
                    <Link href="/blog" className="no-underline hover:underline">
                        ← Zpět na blog
                    </Link>
                </p>
                <h1 className="mb-2">{post.title}</h1>
                <time className="text-muted-foreground">{post.date}</time>
            </header>

            <div className="prose">{post.content}</div>
        </article>
    )
}
