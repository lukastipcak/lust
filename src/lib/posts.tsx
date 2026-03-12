import { ReactNode } from 'react'

export const SITE_URL = 'https://lukastipcak.cz'
export const SITE_AUTHOR = 'Lukáš Štipčák'

export type Post = {
    slug: string
    title: string
    description: string
    hook: string
    excerpt: string
    date: string
    dateISO: string
    year: string
    readingTime: number
    keywords: string[]
    content?: ReactNode
}

export const posts: Post[] = [
    {
        slug: 'chrome-individual-request-throttling',
        title: 'Konec Slow 3G: Chrome už umí škrtit requesty jednotlivě',
        description:
            'Testovat loading state bez toho, abyste si zpomalili celý prohlížeč, byla roky utopie. Nový Chrome to konečně mění.',
        hook: 'Vsadím se, že vás taky nebaví čekat věčnost, než se načte celý web, jen abyste otestovali jeden spinner.',
        excerpt:
            'Simulovat pomalé API v prohlížeči bylo vždycky buď všechno, nebo nic. Zapnout Network Throttling znamenalo zabít celý web. Chrome 134 ale přichází s funkcí, která tohle konečně opravuje.',
        date: '14. března 2026',
        dateISO: '2026-03-14',
        year: '2026',
        readingTime: 3,
        keywords: ['Chrome DevTools', 'Network Throttling', 'Web Performance', 'Debugging', 'API'],
        content: (
            <>
                <p>
                    Každý, kdo staví webové aplikace, ten scénář zná. Potřebujete otestovat, jak se zachová UI, když se API
                    „zakucká“ nebo když platební brána odpovídá tři vteřiny. Do teď jsme v Chrome DevTools měli v podstatě jedinou
                    možnost: v záložce Network přepnout na profil <strong>Slow 3G</strong>.
                </p>

                <p>
                    Problém je, že Slow 3G je tupý nástroj. Zpomalí totiž úplně všechno. Čekáte, než se znovu stáhnou fonty, než
                    probublá Reactí bundle a než se načtou obrázky. Vývojový cyklus, který má trvat sekundy, se rázem natáhne na
                    minuty. Je to frustrující a upřímně mě vždycky zajímalo, proč tak základní věc jako škrcení konkrétního
                    endpointu v prohlížeči chybí.
                </p>

                <p>
                    S příchodem{' '}
                    <a
                        href="https://developer.chrome.com/release-notes/134?hl=en#network"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-1.5 py-0.5 rounded bg-muted font-mono text-sm font-medium text-foreground border border-border hover:border-accent-color/50 transition-colors no-underline"
                    >
                        Chrome 134
                    </a>{' '}
                    tahle bolest končí. Vývojáři konečně přidali možnost nastavit latenci pro každý síťový požadavek zvlášť. A co
                    je na tom nejlepší – funguje to úplně všude. Je jedno, jestli ladíte localhost, nebo sedíte na ostrém webu
                    klienta a snažíte se zjistit, proč se mu při pomalém internetu rozpadá košík.
                </p>

                {/* Vizualizace: Starý vs Nový přístup */}
                <svg
                    viewBox="0 0 680 220"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto my-8 rounded-xl overflow-visible"
                    aria-label="Srovnání starého a nového network throttlingu"
                >
                    <rect width="680" height="220" rx="12" fill="#0f172a" />

                    <g transform="translate(40, 40)">
                        <text x="0" y="0" fontFamily="monospace" fontSize="12" fill="#64748b" fontWeight="600">
                            STARÝ PŘÍSTUP (Slow 3G)
                        </text>
                        <rect x="0" y="15" width="280" height="60" rx="8" fill="#ef444415" stroke="#ef4444" strokeWidth="1" />
                        <text x="140" y="45" fontFamily="monospace" fontSize="11" fill="#ef4444" textAnchor="middle">
                            Zpomalí celý tab (JS, CSS, API, Fonty)
                        </text>
                    </g>

                    <g transform="translate(360, 40)">
                        <text x="0" y="0" fontFamily="monospace" fontSize="12" fill="#64748b" fontWeight="600">
                            NOVÝ PŘÍSTUP (Chrome 134+)
                        </text>
                        <rect x="0" y="15" width="280" height="60" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                        <text x="140" y="50" fontFamily="monospace" fontSize="11" fill="#94a3b8" textAnchor="middle">
                            Zbytek webu běží bleskově
                        </text>

                        <rect x="50" y="100" width="180" height="40" rx="6" fill="#34d39915" stroke="#34d399" strokeWidth="1" />
                        <text x="140" y="125" fontFamily="monospace" fontSize="11" fill="#34d399" textAnchor="middle">
                            Škrcený pouze /api/checkout
                        </text>
                    </g>
                </svg>

                <h2>Jak to funguje v praxi</h2>

                <p>
                    Celé kouzlo najdete v panelu <strong>Network overrides</strong>. Stačí v Network tabu kliknout pravým
                    tlačítkem na jakýkoliv request a uvidíte novou možnost <strong>Throttling individual request</strong>. Chrome
                    vám dovolí zadat přesnou hodnotu zpoždění v milisekundách.
                </p>

                <p>
                    Největší síla je v kombinaci s patterny. Můžete nechat celý web běžet na maximální rychlost a zpomalit jen
                    volání na produkční databázi, platební bránu nebo externí auth službu. Už žádné nekonečné čekání na refresh
                    stránky jen proto, že jste chtěli vidět jeden Loading Spinner.
                </p>

                <p>
                    Je to přesně ten typ vylepšení, které není na první pohled revoluční, ale jakmile ho jednou zkusíte, už se k
                    plošnému zpomalování nevrátíte. Pokud řešíte věci jako Optimistic UI nebo ladíte race conditions při ukládání
                    dat, tohle je teď váš nejlepší kamarád. Funguje to spolehlivě na libovolné doméně, takže debugging produkčních
                    „edge case“ problémů je rázem o level jinde.
                </p>

                <h2>Zdroje</h2>
                <ul>
                    <li>
                        <a
                            href="https://developer.chrome.com/blog/throttle-individual-network-requests?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Throttle individual network requests — Chrome for Developers
                        </a>
                    </li>
                </ul>
            </>
        ),
    },
    {
        slug: 'geo-generative-engine-optimization',
        title: 'GEO: Proč nestačí být na prvním místě v Google',
        description: 'GEO optimalizuje obsah pro citace v AI jako ChatGPT. Liší se od SEO cílem i měřením.',
        hook: 'Byl jsem první na Googlu, a přesto moje návštěvnost začala klesat.',
        excerpt:
            'Byl jsem první na Googlu, a přesto moje návštěvnost začala klesat. Lidé už neklikají na odkazy, chtějí odpověď hned od ChatGPT. Pokud vás AI necituje, pro internet jako byste přestali existovat.',
        date: '12. března 2026',
        dateISO: '2026-03-12',
        year: '2026',
        readingTime: 7,
        keywords: ['GEO', 'generative engine optimization', 'SEO vs GEO', 'AI Overview', 'ChatGPT citace', 'Next.js JSON-LD'],
        content: (
            <>
                <p>
                    Byl jsem první na Googlu. Návštěvnost šla dolů. Chvíli mi trvalo pochopit, co se děje. Pak mi to došlo. Lidi
                    přestali klikat. Nezadávají URL, neotvírají záložky, nelistují výsledky. Prostě se zeptají ChatGPT nebo
                    Perplexity a dostanou odpověď rovnou. Bez mého webu. Bez mého článku. Bez kliknutí.
                </p>

                <p>
                    Tenhle posun má jméno: Generative Engine Optimization, zkráceně GEO. A pokud se pohybujete ve vývoji nebo
                    tvoříte jakýkoliv obsah online, dřív nebo později na tohle narazíte taky.
                </p>

                <h2>Co to vlastně GEO je</h2>

                <p>
                    Základní myšlenka je jednoduchá. Místo toho, abyste optimalizovali obsah pro algoritmus, který řadí stránky
                    podle relevance, optimalizujete ho pro model, který z více zdrojů skládá jednu odpověď. ChatGPT, Google AI
                    Overviews, Perplexity, Gemini, všechny tyhle nástroje váš obsah buď použijí jako zdroj, nebo ne. A pokud ne,
                    jste pro část uživatelů prakticky neviditelní.
                </p>

                <p>
                    Pojem GEO se poprvé objevil v akademickém výzkumu v roce 2023. Od té doby ho různé zdroje označují taky jako
                    AEO (Answer Engine Optimization), AIO nebo LLMO. Zkratky se mění, princip zůstává. Jde o to, aby vás AI
                    zmínila.
                </p>

                <h2>Kde se GEO liší od SEO</h2>

                <p>
                    SEO znám dobře. Roky jsem řešil klíčová slova, zpětné odkazy, Core Web Vitals a strukturu URL. A všechno to
                    dává smysl, pořád. Jenže SEO má jasný cíl: dostat se vysoko v SERPu, aby na vás někdo klikl. Měříte pozice,
                    CTR, organickou návštěvnost. Celá logika stojí na tom, že uživatel vidí výsledky a vybírá.
                </p>

                <p>
                    GEO funguje jinak. Uživatel výsledky nevidí. Dostane hotovou odpověď. Cílem tedy není klik, ale citace. Aby AI
                    váš obsah použila jako jeden ze zdrojů a ideálně na vás odkázala. Úspěch se měří tzv. share of voice v AI
                    odpovědích, což je zatím dost nová metrika a nástroje pro to teprve vznikají. Semrush AIO, Otterly.ai nebo
                    AthenaHQ jsou první vlaštovky.
                </p>

                {/* Vizualizace: SEO vs GEO cesta uživatele */}
                <svg
                    viewBox="0 0 680 200"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: '100%', height: 'auto', margin: '2rem 0', borderRadius: '12px', overflow: 'visible' }}
                    aria-label="Srovnání cesty uživatele v SEO a GEO"
                    role="img"
                >
                    <rect width="680" height="200" rx="12" fill="#0f172a" />

                    {/* SEO flow */}
                    <text x="34" y="36" fontFamily="monospace" fontSize="11" fill="#64748b" fontWeight="600" letterSpacing="1">
                        SEO
                    </text>
                    <rect x="24" y="48" width="100" height="36" rx="6" fill="#1e293b" />
                    <text x="74" y="71" fontFamily="monospace" fontSize="11" fill="#94a3b8" textAnchor="middle">
                        Dotaz
                    </text>
                    <text x="130" y="68" fontFamily="monospace" fontSize="16" fill="#334155">
                        →
                    </text>
                    <rect x="148" y="48" width="130" height="36" rx="6" fill="#1e293b" />
                    <text x="213" y="71" fontFamily="monospace" fontSize="11" fill="#94a3b8" textAnchor="middle">
                        Seznam výsledků
                    </text>
                    <text x="284" y="68" fontFamily="monospace" fontSize="16" fill="#334155">
                        →
                    </text>
                    <rect x="302" y="48" width="90" height="36" rx="6" fill="#1e293b" />
                    <text x="347" y="71" fontFamily="monospace" fontSize="11" fill="#94a3b8" textAnchor="middle">
                        Klik
                    </text>
                    <text x="398" y="68" fontFamily="monospace" fontSize="16" fill="#334155">
                        →
                    </text>
                    <rect x="416" y="48" width="90" height="36" rx="6" fill="#1e293b" />
                    <text x="461" y="71" fontFamily="monospace" fontSize="11" fill="#60a5fa" textAnchor="middle">
                        Váš web
                    </text>

                    {/* GEO flow */}
                    <text x="34" y="116" fontFamily="monospace" fontSize="11" fill="#64748b" fontWeight="600" letterSpacing="1">
                        GEO
                    </text>
                    <rect x="24" y="128" width="100" height="36" rx="6" fill="#1e293b" />
                    <text x="74" y="151" fontFamily="monospace" fontSize="11" fill="#94a3b8" textAnchor="middle">
                        Dotaz
                    </text>
                    <text x="130" y="148" fontFamily="monospace" fontSize="16" fill="#334155">
                        →
                    </text>
                    <rect x="148" y="128" width="130" height="36" rx="6" fill="#1e293b" />
                    <text x="213" y="151" fontFamily="monospace" fontSize="11" fill="#94a3b8" textAnchor="middle">
                        AI odpověď
                    </text>
                    <text x="284" y="148" fontFamily="monospace" fontSize="16" fill="#334155">
                        →
                    </text>
                    <rect x="302" y="128" width="100" height="36" rx="6" fill="#fbbf2415" stroke="#fbbf24" strokeWidth="1" />
                    <text x="352" y="151" fontFamily="monospace" fontSize="11" fill="#fbbf24" textAnchor="middle">
                        Citace
                    </text>
                    <text x="408" y="148" fontFamily="monospace" fontSize="16" fill="#334155">
                        →
                    </text>
                    <rect x="426" y="128" width="100" height="36" rx="6" fill="#34d39915" stroke="#34d399" strokeWidth="1" />
                    <text x="476" y="146" fontFamily="monospace" fontSize="10" fill="#34d399" textAnchor="middle">
                        Brand
                    </text>
                    <text x="476" y="158" fontFamily="monospace" fontSize="10" fill="#34d399" textAnchor="middle">
                        search
                    </text>

                    <text x="340" y="192" fontFamily="monospace" fontSize="10" fill="#475569" textAnchor="middle">
                        Překryv zdrojů Google a AI klesl z 70 % na 20 %
                    </text>
                </svg>

                <p>
                    Jeden konkrétní příklad rozdílu: při SEO se soustředíte na svůj web. Při GEO musíte být přítomní všude, odkud
                    AI čerpá. Reddit, LinkedIn, YouTube, odborné publikace, podcasty. Váš web je jen jeden kus skládačky. Výzkum
                    ukazuje, že překryv mezi top výsledky Google a zdroji citovanými v AI odpovědích klesl z 70 % na méně než 20
                    %. To je zásadní číslo.
                </p>

                <h2>Proč to nelze ignorovat</h2>

                <p>
                    Dnes více než 50 % vyhledávání na Googlu zobrazuje AI Overview, odpověď ještě předtím, než uživatel vidí
                    jakýkoliv organický výsledek. ChatGPT překročil 800 milionů týdenních uživatelů. Provoz z AI chatbotů na
                    e-commerce weby vzrostl mezi lety 2024 a 2025 o více než 500 %. Ve stejném období organická návštěvnost z
                    tradičního vyhledávání klesla průměrně o 21 %. Gartner předpovídá, že tradiční vyhledávání jako celek oslabí o
                    25 % do konce roku 2026.
                </p>

                <svg
                    viewBox="0 0 680 260"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: '100%', height: 'auto', margin: '2rem 0', borderRadius: '12px' }}
                    aria-label="Statistiky růstu AI provozu a poklesu organické návštěvnosti"
                    role="img"
                >
                    <rect width="680" height="260" rx="12" fill="#0f172a" />
                    <text x="34" y="32" fontFamily="monospace" fontSize="10" fill="#64748b" fontWeight="600" letterSpacing="1">
                        ČÍSLA KTERÁ MLUVÍ ZA SEBE
                    </text>

                    {/* Bar 1 */}
                    <text x="34" y="56" fontFamily="monospace" fontSize="11" fill="#94a3b8">
                        50 % vyhledávání zobrazuje AI Overview
                    </text>
                    <text x="646" y="56" fontFamily="monospace" fontSize="11" fill="#60a5fa" textAnchor="end" fontWeight="600">
                        50 %
                    </text>
                    <rect x="34" y="64" width="600" height="16" rx="3" fill="#1e293b" />
                    <rect x="34" y="64" width="300" height="16" rx="3" fill="#60a5fa" />

                    {/* Bar 2 */}
                    <text x="34" y="110" fontFamily="monospace" fontSize="11" fill="#94a3b8">
                        Provoz z AI chatbotů (2024 na 2025)
                    </text>
                    <text x="646" y="110" fontFamily="monospace" fontSize="11" fill="#fbbf24" textAnchor="end" fontWeight="600">
                        +500 %
                    </text>
                    <rect x="34" y="118" width="600" height="16" rx="3" fill="#1e293b" />
                    <rect x="34" y="118" width="600" height="16" rx="3" fill="#fbbf24" />

                    {/* Bar 3 */}
                    <text x="34" y="164" fontFamily="monospace" fontSize="11" fill="#94a3b8">
                        Pokles organické návštěvnosti
                    </text>
                    <text x="646" y="164" fontFamily="monospace" fontSize="11" fill="#f87171" textAnchor="end" fontWeight="600">
                        −21 %
                    </text>
                    <rect x="34" y="172" width="600" height="16" rx="3" fill="#1e293b" />
                    <rect x="34" y="172" width="126" height="16" rx="3" fill="#f87171" />

                    {/* Bar 4 */}
                    <text x="34" y="218" fontFamily="monospace" fontSize="11" fill="#94a3b8">
                        Lepší konverze z AI provozu vs. organik
                    </text>
                    <text x="646" y="218" fontFamily="monospace" fontSize="11" fill="#34d399" textAnchor="end" fontWeight="600">
                        +40 %
                    </text>
                    <rect x="34" y="226" width="600" height="16" rx="3" fill="#1e293b" />
                    <rect x="34" y="226" width="240" height="16" rx="3" fill="#34d399" />
                </svg>

                <p>
                    Zároveň platí, že uživatelé přicházející přes AI jsou jiní návštěvníci. Jsou dál v rozhodovacím procesu,
                    protože AI jim část cesty už udělala. Podle dostupných dat konvertují o 40 % lépe než uživatelé z organického
                    vyhledávání. Menší návštěvnost, vyšší kvalita.
                </p>

                <h2>Jak AI vybírá, co citovat</h2>

                <p>
                    Technicky to funguje zhruba takto. Generativní engine vezme dotaz, rozloží ho na dílčí otázky a prohledá web
                    pomocí RAG, tedy Retrieval-Augmented Generation. Stáhne relevantní pasáže, zkombinuje je do odpovědi a přidá
                    reference. Nekopíruje, přepisuje. Váš obsah tedy musí být snadno crawlovatelný, strukturovaný a fakticky
                    konkrétní, aby ho model vůbec vzal v potaz.
                </p>

                {/* Vizualizace: RAG pipeline */}
                <svg
                    viewBox="0 0 680 120"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: '100%', height: 'auto', margin: '2rem 0', borderRadius: '12px' }}
                    aria-label="Jak funguje RAG: Dotaz, Retrieval, Synthesis, Citation"
                    role="img"
                >
                    <rect width="680" height="120" rx="12" fill="#0f172a" />
                    <text
                        x="340"
                        y="24"
                        fontFamily="monospace"
                        fontSize="10"
                        fill="#64748b"
                        textAnchor="middle"
                        letterSpacing="1"
                    >
                        JAK FUNGUJE RAG
                    </text>

                    {[
                        { x: 40, label: '1. Dotaz', sub: 'rozložení na\nsub-queries', color: '#60a5fa' },
                        { x: 200, label: '2. Retrieval', sub: 'crawl webu,\nstažení pasáží', color: '#a78bfa' },
                        { x: 360, label: '3. Synthesis', sub: 'kombinace zdrojů,\npřepsání', color: '#fbbf24' },
                        { x: 520, label: '4. Citation', sub: 'reference na\nváš web', color: '#34d399' },
                    ].map((step) => (
                        <g key={step.x}>
                            <rect
                                x={step.x}
                                y="36"
                                width="120"
                                height="68"
                                rx="8"
                                fill={`${step.color}15`}
                                stroke={step.color}
                                strokeWidth="1"
                            />
                            <text
                                x={step.x + 60}
                                y="56"
                                fontFamily="monospace"
                                fontSize="11"
                                fill={step.color}
                                textAnchor="middle"
                                fontWeight="600"
                            >
                                {step.label}
                            </text>
                            {step.sub.split('\n').map((line, i) => (
                                <text
                                    key={i}
                                    x={step.x + 60}
                                    y={72 + i * 14}
                                    fontFamily="monospace"
                                    fontSize="10"
                                    fill="#64748b"
                                    textAnchor="middle"
                                >
                                    {line}
                                </text>
                            ))}
                        </g>
                    ))}
                    {[160, 320, 480].map((x) => (
                        <text key={x} x={x + 14} y="74" fontFamily="monospace" fontSize="14" fill="#334155">
                            →
                        </text>
                    ))}
                </svg>

                <p>
                    Co konkrétně funguje: jasná hierarchie nadpisů pomáhá modelu pochopit vztahy mezi tématy. Obsah s dobrou H1 až
                    H3 strukturou má podle výzkumů 2,8x vyšší šanci na citaci. Dál fungují konkrétní čísla a statistiky, vágní
                    tvrzení AI prostě ignoruje. Čerstvost obsahu hraje velkou roli, přes 80 % AI provozu míří na stránky
                    aktualizované v posledních dvou letech.
                </p>

                <p>
                    Jeden detail, který hodně lidí přehlíží: explicitní citace zdrojů přímo v textu. Místo hypertextového odkazu
                    napište do věty třeba „podle studie Writesonic z roku 2025". AI to přečte a předá dál. A pište pro přirozené
                    otázky, ne pro klíčová slova. Průměrný AI dotaz má 23 slov, oproti čtyřem u tradičního vyhledávání. Lidi
                    popisují celou situaci, ne jen fragment.
                </p>

                <h2>Co to znamená v Next.js projektu</h2>

                <p>
                    Pokud stavíte web v Next.js, základní kroky nejsou složité. Nejdůležitější je JSON-LD schema markup na každém
                    článku. Generativní enginy ho čtou a pomáhá jim pochopit kontext obsahu. V App Routeru to vypadá takto:
                </p>

                <pre>
                    {`export default function BlogPost({ post }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": "Vaše jméno"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* obsah článku */}
    </>
  )
}`}
                </pre>

                <p>
                    Stejně důležitá je rychlost načítání. Generativní enginy mají timeout pro scrapování a stránka, která se
                    nenačte včas, se jednoduše nedostane do embedding queue. Next.js s edge cachingem na Vercelu nebo vlastní CDN
                    tohle řeší dobře. A jedna věc, kterou je snadné přehlédnout: zkontrolujte{' '}
                    <a href="/robots.txt" target="_blank" rel="noopener noreferrer">
                        <code>robots.txt</code>
                    </a>
                    . Ujistěte se, že není omylem zablokovaný přístup pro <code>GPTBot</code>, <code>ClaudeBot</code> nebo{' '}
                    <code>PerplexityBot</code>. Viděl jsem weby, které to měly špatně nastavené měsíce.
                </p>

                <h2>Kam to směřuje</h2>

                <p>
                    ChatGPT dnes ovládá přes 79 % trhu AI chatbotů, ale Perplexity, Gemini a regionální hráči rostou rychle.
                    Stejně jako má smysl optimalizovat pro Google i Bing zvlášť, bude brzy potřeba myslet na každý engine
                    samostatně. K tomu přibývá multimodální vyhledávání. AI odpovědi přestanou být jen text a obrázky, videa i
                    hlasové výstupy se stanou součástí odpovědí. Nové plochy pro viditelnost.
                </p>

                <p>
                    A jedno důležité upozornění k měření: tradiční GA4 tohle nezachytí. Konverze, která začala zmínkou v ChatGPT a
                    skončila přímým příchodem na web o týden později, vypadá v analytice jako direct traffic. Budete ji přehlížet,
                    dokud si to vědomě nenastavíte.
                </p>

                <p>
                    GEO SEO nenahrazuje. 99 % citací v Google AI Overviews stále pochází z organického top 10. Bez solidního SEO
                    základu GEO prostě nefunguje. Jde o vrstvu navíc, ne o restart od nuly.
                </p>

                <p>
                    Pro vývojáře a lidi, kteří tvoří technický obsah, je v tom vlastně dobrá zpráva. Strukturovaný, konkrétní,
                    dobře argumentovaný obsah je přesně to, co AI preferuje. Ne clickbait, ne keyword stuffing. Pokud píšete jasně
                    a strukturovaně, už GEO děláte. Zbývá to technicky podpořit.
                </p>

                <h2>Zdroje</h2>

                <ul>
                    <li>
                        <a
                            href="https://www.wordstream.com/blog/generative-engine-optimization"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GEO vs. SEO: Key Differences — WordStream (2026)
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.seerinteractive.com/insights/what-is-generative-engine-optimization-geo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            What Is GEO &amp; How Does It Impact SEO? — Seer Interactive (2026)
                        </a>
                    </li>
                    <li>
                        <a href="https://writesonic.com/blog/geo-vs-seo" target="_blank" rel="noopener noreferrer">
                            GEO vs SEO — Writesonic (2025)
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.incremys.com/en/resources/blog/geo-statistics"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GEO Statistics 2026 — Incremys
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://geoptie.com/blog/generative-engine-optimization"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GEO: The Definitive Guide 2026 — Geoptie
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://strapi.io/blog/generative-engine-optimization-vs-traditional-seo-guide"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GEO vs Traditional SEO — Strapi Blog
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.destinationcrm.com/Articles/Editorial/Magazine-Features/GEO-Is-Superseding-SEO-173700.aspx"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GEO Is Superseding SEO — Destination CRM (2026)
                        </a>
                    </li>
                    <li>
                        <a href="https://llmrefs.com/generative-engine-optimization" target="_blank" rel="noopener noreferrer">
                            LLMrefs: GEO Guide 2026
                        </a>
                    </li>
                </ul>
            </>
        ),
    },
    {
        slug: 'react-dom-virtualization-performance',
        title: 'Když React nestíhá: Proč potřebujete virtualizaci DOMu',
        description:
            'Váš React kód je možná rychlý, ale prohlížeč přesto nestíhá dýchat. Ukážu vám, jak virtualizace zachrání plynulost vašeho webu při práci s velkými daty.',
        hook: 'Váš React kód je rychlý, ale prohlížeč přesto nestíhá dýchat.',
        excerpt:
            'Váš React kód je rychlý, ale prohlížeč přesto nestíhá dýchat. Problémem není JavaScript, ale 5 000 uzlů v DOMu, které tam vůbec nemusí být. Ukážu vám, jak 10 řádků kódu zachrání plynulost vašeho webu.',
        date: '17. února 2026',
        dateISO: '2026-02-17',
        year: '2026',
        readingTime: 3,
        keywords: ['react virtualizace', 'react-window', 'tanstack virtual', 'DOM výkon', 'renderování velký dataset'],
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
]

export const getPost = (slug: string): Post | undefined => {
    return posts.find((p) => p.slug === slug)
}

export const getLatestPosts = (n = 3): Post[] => {
    return posts.slice(0, n)
}

export const getAllSlugs = () => {
    return posts.map((p) => ({ slug: p.slug }))
}
