import Link from "next/link";

export const dynamic = "force-dynamic";

const blogContent: Record<string, { title: string; date: string; content: React.ReactNode }> = {
  "virtualizace-dom": {
    title: "Virtualizace DOM s React Window",
    date: "15. ledna 2024",
    content: (
      <>
        <p>
          Když pracujete s velkými datasety v Reactu, brzy narazíte na limity
          výkonu. Renderování tisíců řádků v tabulce není problém pro
          JavaScript — problém je pro DOM.
        </p>
        <h2>Problém</h2>
        <p>
          Každý DOM element zabírá paměť a prohlížeč musí počítat layout pro
          všechny viditelné i neviditelné elementy. S 10 000 řádky můžete
          snadno dosáhnout sekundových prodlev.
        </p>
        <h2>Řešení: Virtualizace</h2>
        <p>
          Virtualizace renderuje pouze viditelné položky plus malý buffer.
          Knihovny jako <code>react-window</code> nebo{" "}
          <code>@tanstack/virtual</code> toto řeší elegantně.
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
      <div style={style}>{items[index]}</div>
    )}
  </FixedSizeList>
);`}
        </pre>
        <h2>Kdy virtualizovat?</h2>
        <ul>
          <li>Máte více než 100-200 položek</li>
          <li>Položky mají komplexní strukturu</li>
          <li>Uživatelé si stěžují na pomalost</li>
        </ul>
        <p>
          Virtualizace není silver bullet — přidává komplexitu. Ale pro velká
          data je nezbytná.
        </p>
      </>
    ),
  },
  "defer-render": {
    title: "Defer Render Component Pattern",
    date: "5. ledna 2024",
    content: (
      <>
        <p>
          Občas potřebujete vyrenderovat těžkou komponentu, ale nechcete blokovat
          hlavní vlákno. Defer Render pattern vám s tím pomůže.
        </p>
        <h2>Problém</h2>
        <p>
          Představte si, že máte komplexní dashboard s grafy, tabulkami a dalšími
          těžkými komponentami. Při prvním renderování uživatel vidí zamrzlou
          stránku.
        </p>
        <h2>Řešení: DeferRender komponenta</h2>
        <p>
          Jednoduchá komponenta, která odloží renderování pomocí{" "}
          <code>requestIdleCallback</code> nebo <code>setTimeout</code>.
        </p>
        <pre>
{`function DeferRender({ children }) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const id = requestIdleCallback(() => {
      setShouldRender(true);
    });
    return () => cancelIdleCallback(id);
  }, []);

  if (!shouldRender) {
    return <Skeleton />;
  }

  return children;
}`}
        </pre>
        <h2>Použití</h2>
        <pre>
{`<DeferRender>
  <HeavyChart data={data} />
</DeferRender>`}
        </pre>
        <p>
          Uživatel vidí skeleton okamžitě a těžká komponenta se vyrenderuje,
          až když má prohlížeč volno.
        </p>
      </>
    ),
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = blogContent[slug];

  if (!post) {
    return (
      <>
        <h1>Článek nenalezen</h1>
        <p>
          <Link href="/blog">← Zpět na blog</Link>
        </p>
      </>
    );
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
  );
}
