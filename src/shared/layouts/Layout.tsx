'use client'

import { MobileHeader } from '@/shared/sections/MobileHeader'
import { Sidebar } from '@/shared/sections/Sidebar'

interface LayoutProps {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col lg:h-screen lg:overflow-hidden">
            {/* Mobile Header */}
            <MobileHeader />

            {/* Desktop */}
            <div className="hidden lg:flex lg:flex-1 lg:min-h-0 lg:max-w-5xl lg:mx-auto lg:w-full">
                {/* Sidebar — sticky */}
                <Sidebar />

                {/* Content column */}
                <div className="flex flex-col flex-1 min-h-0 border-l border-border">
                    <main className="flex-1 overflow-y-auto">
                        <div className="px-8 py-16">{children}</div>
                    </main>

                    <footer className="shrink-0 border-t border-border px-8 py-4">
                        <p className="text-sm text-muted-foreground m-0">© {new Date().getFullYear()} Lukáš Štipčák</p>
                    </footer>
                </div>
            </div>

            {/* Mobile - body scroll, footer not fixed */}
            <main className="flex-1 lg:hidden px-6 py-12">{children}</main>

            <footer className="lg:hidden border-t border-border px-6 py-4">
                <p className="text-sm text-muted-foreground m-0">© {new Date().getFullYear()} Lukáš Štipčák</p>
            </footer>
        </div>
    )
}
