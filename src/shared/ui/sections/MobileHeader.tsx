'use client'

import Link from 'next/link'
import { Menu, X, Home, FileText, FolderOpen, User, Github, Linkedin, Mail } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ColorPaletteSelector } from '@/features/theme/view/components/ColorPaletteSelector'
import { ThemeToggle } from '@/components/ThemeToggle'

const navItems = [
    { href: '/', label: 'Domů', icon: Home },
    { href: '/blog', label: 'Blog', icon: FileText },
    { href: '/projekty', label: 'Projekty', icon: FolderOpen },
    { href: '/o-mne', label: 'O mně', icon: User },
]

export const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/'
        return pathname.startsWith(path)
    }

    return (
        <header className="lg:hidden sticky top-0 z-50 bg-background border-b border-border">
            <div className="flex items-center justify-between px-4 py-3">
                <Link href="/" className="nav-link text-lg font-bold">
                    Lukáš Štipčák
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} className="nav-link p-2" aria-label="Toggle menu">
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t border-border bg-background">
                    <nav className="p-4">
                        <ul className="space-y-1 list-none p-0 m-0">
                            {navItems.map((item) => (
                                <li key={item.href} className="m-0 p-0">
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`nav-link flex items-center gap-3 px-3 py-2 text-sm transition-colors ${
                                            isActive(item.href)
                                                ? 'text-accent-color font-medium'
                                                : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        <item.icon className="w-4 h-4" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Theme & Color Controls */}
                    <div className="px-4 py-3 border-t border-border space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground uppercase tracking-wide">Téma</span>
                            <ThemeToggle />
                        </div>
                        <div>
                            <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-2">Barva</span>
                            <ColorPaletteSelector />
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="px-4 py-3 border-t border-border">
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-link text-muted-foreground hover:text-foreground"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-link text-muted-foreground hover:text-foreground"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:stipcakl@seznam.cz"
                                className="nav-link text-muted-foreground hover:text-foreground"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

