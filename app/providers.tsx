'use client'

import { Toaster } from '@/shared/elements/toaster'
import { Toaster as Sonner } from '@/shared/elements/sonner'
import { TooltipProvider } from '@/shared/elements/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

const queryClient = new QueryClient()

interface ProvidersProps {
    children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
                <TooltipProvider>
                    <Toaster />
                    <Sonner />
                    {children}
                </TooltipProvider>
            </ThemeProvider>
        </QueryClientProvider>
    )
}
