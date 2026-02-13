import { StickyHeader } from "@/components/StickyHeader";
import { TechChip } from "@/components/TechChip";
import { Github, Linkedin, Mail } from "lucide-react";

const technologies = {
  "Frontend": ["React", "Next.js", "TypeScript", "Material-UI", "Tailwind CSS", "GraphQL"],
  "Backend": ["Node.js", "Express", "Prisma", "MongoDB"],
  "Databáze": ["PostgreSQL", "MongoDB", "Supabase"],
  "Testování & Nástroje": ["Cypress", "Jest", "Vitest", "Storybook", "Git", "Docker"],
  "CMS": ["Strapi"]
};

export default function About() {
  return (
    <>
      <StickyHeader level="h2">
        <span className="text-accent-color">#</span> O mně
      </StickyHeader>

      {/* Personal Intro */}
      <section className="mb-12 mt-6">
        <div className="space-y-6 text-lg leading-relaxed text-balance">
          <p>
            Ahoj, jsem <span className="text-accent-color font-semibold">Lukáš</span>! 
            Vítej na mém webu. V digitálním světě se pohybuji už přes 5 let a mým cílem 
            vždy bylo stavět věci, které dávají smysl a lidem se dobře používají. 
            Aktuálně mě nejvíc baví práce s <span className="text-accent-color">Reactem</span> a 
            celým ekosystémem kolem moderního webového vývoje.
          </p>
          
          <p>
            K programování mě přivedla zvědavost, jak věci fungují pod kapotou. 
            Dnes mě na tom nejvíc baví ten moment, kdy se hromada řádků kódu promění 
            v užitečný nástroj. Zakládám si na tom, aby kód, který po mně zůstane, 
            byl čitelný a udržitelný i pro ostatní.
          </p>

          <p>
            Život ale není jenom o kódu. Jsem hrdý **táta dvou malých dětí**, které mě každý den 
            učí trpělivosti a nadhledu. Když potřebuji úplně vypnout od technologií, 
            nejraději mizím do přírody na **pořádnou túru** nebo se jdu vybít na **florbalové hřiště**. 
            Rovnováha mezi prací hlavou a pohybem je pro mě naprosto zásadní.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-12">
        <StickyHeader level="h3">
          Kontakt
        </StickyHeader>
        <div className="py-6">
          <p className="mb-6">
            Napiš mi email, ozvi se na LinkedInu, nebo se podívej na můj kód na GitHubu.
          </p>
          <div className="space-y-3">
            <a
              href="mailto:stipcakl@seznam.cz"
              className="flex items-center gap-3 text-foreground hover:text-accent-color transition-colors w-fit"
            >
              <Mail className="w-5 h-5" />
              <span>stipcakl@seznam.cz</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-accent-color transition-colors w-fit"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn (profesní profil)</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-accent-color transition-colors w-fit"
            >
              <Github className="w-5 h-5" />
              <span>GitHub (moje projekty)</span>
            </a>
          </div>
        </div>
      </section>

      {/* What I'm Doing Now */}
      <section className="mb-12">
        <StickyHeader level="h3">
          Co teď dělám
        </StickyHeader>
        <div className="py-6">
          <p className="text-sm text-muted-foreground mb-4 italic">
            Aktualizováno {new Date().toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <ul className="space-y-3 list-none p-0">
            <li className="flex items-start gap-3 m-0">
              <span className="text-accent-color font-bold">→</span>
              <span>Pracuji na plný úvazek jako Software developer v oblasti webových aplikací</span>
            </li>
            <li className="flex items-start gap-3 m-0">
              <span className="text-accent-color font-bold">→</span>
              <span>Trávím čas s dětmi a učím je objevovat svět</span>
            </li>
            <li className="flex items-start gap-3 m-0">
              <span className="text-accent-color font-bold">→</span>
              <span>Snažím se být co nejvíc venku, v lese nebo na horách</span>
            </li>
            <li className="flex items-start gap-3 m-0">
              <span className="text-accent-color font-bold">→</span>
              <span>Rekreačně hraju florbal a udržuju se v kondici</span>
            </li>
            <li className="flex items-start gap-3 m-0">
              <span className="text-accent-color font-bold">→</span>
              <span>Postupně vylepšuji tento web</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Tech I Work With */}
      <section className="mb-12">
        <StickyHeader level="h3">
          Technologie
        </StickyHeader>
        <div className="py-6">
          <p className="text-muted-foreground mb-6">
            Nástroje a stack, se kterými mám nejvíc zkušeností a které rád používám.
          </p>
          <div className="space-y-6">
            {Object.entries(technologies).map(([category, techs]) => (
              <div key={category}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70 mb-3 mt-0">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <TechChip key={tech} name={tech} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}