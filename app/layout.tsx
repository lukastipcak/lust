import type { Metadata } from 'next'
import { Layout } from '@/components/layout/Layout'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
    title: 'Dev Portfolio',
    description: 'Software developer portfolio',
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
