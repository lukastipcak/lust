import { StickyHeader } from "@/components/StickyHeader";
import { TechChip } from "@/components/TechChip";
import { Github, Linkedin, Mail } from "lucide-react";

const technologies = {
  "Jazyky": ["TypeScript", "JavaScript", "Python", "SQL"],
  "Frontend": ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  "Backend": ["Node.js", "Express", "Prisma", "tRPC"],
  "Databáze": ["PostgreSQL", "Redis", "MongoDB"],
  "Nástroje": ["Git", "Docker", "Vite", "Vitest", "Playwright"],
};

export default function About() {
  return (
    <>
      <StickyHeader level="h2">
        <span className="text-accent-color">#</span> O mně
      </StickyHeader>

      {/* Personal Intro */}
      <section className="mb-12 mt-6">
        <p className="text-lg leading-relaxed">
          Ahoj, jsem <span className="text-accent-color font-semibold">Lukáš</span>! 
          Vítej na mém kousku webu, kde sdílím své projekty, články o vývoji a 
          cokoliv dalšího, co mě baví. Aktuálně pracuji jako software developer 
          se zaměřením na <span className="text-accent-color">React</span>, {" "}
          <span className="text-accent-color">TypeScript</span> a {" "}
          <span className="text-accent-color">Node.js</span>.
        </p>
        <p className="text-lg leading-relaxed">
          Jsem taky hrdý táta dvou malých skvělých dětí. Když zrovna neprogramuju nebo si nehraju s dětmi, 
          najdete mě na túře někde v přírodě nebo na florbalovém hřišti.
        </p>
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
              className="flex items-center gap-3 text-foreground hover:text-accent-color transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>stipcakl@seznam.cz</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-accent-color transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn (profesní zkušenosti)</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-accent-color transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
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
          <p className="text-sm text-muted-foreground mb-4">
            Aktualizováno {new Date().toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <ul className="space-y-2 list-none p-0">
            <li className="flex items-start gap-2 m-0">
              <span className="text-accent-color mt-0.5">→</span>
              <span>Pracuji na full-time jako software developer</span>
            </li>
            <li className="flex items-start gap-2 m-0">
              <span className="text-accent-color mt-0.5">→</span>
              <span>Jsem táta dvou malých skvělých dětí.</span>
            </li>
            <li className="flex items-start gap-2 m-0">
              <span className="text-accent-color mt-0.5">→</span>
              <span>Rád se věnuji turistice a florbalu</span>
            </li>
            <li className="flex items-start gap-2 m-0">
              <span className="text-accent-color mt-0.5">→</span>
              <span>Když je příležitost, rád se zúčastním charitativního běhu pro dobrou věc</span>
            </li>
            <li className="flex items-start gap-2 m-0">
              <span className="text-accent-color mt-0.5">→</span>
              <span>Vylepšuji tento web</span>
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
            Technologie a nástroje, se kterými pracuji nebo mám zkušenosti. 
            Pro detailní profesní zkušenosti se podívej na můj{" "}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn profil
            </a>.
          </p>
          <div className="space-y-6">
            {Object.entries(technologies).map(([category, techs]) => (
              <div key={category}>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 mt-0">
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
