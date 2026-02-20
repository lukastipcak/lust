export type Project = {
    name: string
    description: string
    tech: string[]
    github?: string
    media?: string
    mediaAlt?: string
}

export const PROJECTS_CONTENT = {
    commercial: {
        title: 'Projekty',
        description: 'Komerční projekty, na kterých jsem pracoval.',
        badge: 'komerční',
        items: [] as Project[],
    },
    practice: {
        title: 'Practice',
        description: 'Osobní projekty a open source experimenty. Volně dostupné na GitHubu.',
        badge: 'open-source',
        items: [
            {
                name: 'AdminCore HUB',
                description:
                    'Modulární full-stack admin platforma postavená na MERN stacku. Navržena jako škálovatelný základ pro firemní nástroje (správa úkolů, správa uživatelů, rezervační systémy, CRM moduly). Obsahuje JWT autentizaci, chráněné routy, centralizovanou správu stavu aplikace a architekturu postavenou na REST API.',
                tech: [
                    // Frontend
                    'React',
                    'TypeScript',
                    'Redux',
                    'React Router',
                    'React Hook Form',
                    'Yup',
                    'React Query',
                    'Axios',
                    'Material-UI',

                    // Backend
                    'Node.js',
                    'Express',
                    'Mongoose',
                    'JWT',
                    'bcryptjs',

                    // Database
                    'MongoDB',
                ],
                github: 'https://github.com/tolukahub/adminApp',
            },
            {
                name: 'Webová stránka - zemní a výkopové práce',
                description:
                    'Webová stránka pro firmu zabývající se zemními a výkopovými pracemi. Postaveno na Next.js a Tailwind CSS s důrazem na SEO optimalizaci. Napojeno na Strapi, aby mohl klient sám nahrávat fotografie a aktualizovat obsah. Obsahuje poptávkový formulář propojený s Resend pro odesílání e-mailů.',
                tech: ['Next.js', 'Tailwind CSS', 'Strapi', 'Resend', 'React'],
                github: 'https://github.com/lukastipcak/zemni-prace-web',
            },
        ] as Project[],
    },
} as const
