import type { Metadata } from 'next'
import { Providers } from './providers'
import { Layout } from '@/shared/layouts/Layout'
import './globals.css'

export const metadata: Metadata = {
    title: 'Lukáš Štipčák - Software Developer',
    description:
        'Software developer specializující se na frontend a webové technologie. Zde najdete můj blog, projekty a další informace o mně.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="cs" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <Providers>
                    <Layout>{children}</Layout>
                </Providers>
            </body>
        </html>
    )
}
