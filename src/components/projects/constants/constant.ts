import { Project, ProjectsContent } from '../types'

export const PROJECTS: ProjectsContent = {
    commercial: {
        title: 'Projekty',
        description: 'Komerční projekty na kterých jsem pracoval.',
        badge: 'komerční',
        items: [] as Project[],
    },
    practice: {
        title: 'Practice',
        description: 'Osobní projekty, open source experimenty a poznatky z vývoje.',
        badge: 'open-source',
        items: [
            {
                slug: 'admin-core-hub',
                name: 'AdminCore HUB',
                year: '2021',
                shortDescription: 'Modulární administrační platforma navržená pro škálovatelné business nástroje',
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
                slug: 'zemni-prace-web',
                name: 'Webová stránka - zemní a výkopové práce',
                year: '2025',
                preview: 'https://zemni-prace-web.vercel.app/',
                shortDescription: 'SEO optimalizovaný web s CMS napojením na Strapi a poptávkovým formulářem',
                description:
                    'Webová stránka pro firmu zabývající se zemními a výkopovými pracemi. Postaveno na Next.js a Tailwind CSS s důrazem na SEO optimalizaci. Napojeno na Strapi, aby mohl klient sám nahrávat fotografie a aktualizovat obsah. Obsahuje poptávkový formulář propojený s Resend pro odesílání e-mailů.',
                tech: ['Next.js', 'Tailwind CSS', 'Strapi', 'Resend', 'React'],
                github: 'https://github.com/lukastipcak/zemni-prace-web',
            },
        ] as Project[],
    },
} as const
