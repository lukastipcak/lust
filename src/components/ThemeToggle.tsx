'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/features/theme/model/useTheme'
import { Skeleton } from './ui/skeleton'

export const ThemeToggle = () => {
    const { isDarkMode, toggleDarkMode, isLoaded } = useTheme()

    if (!isLoaded) return <Skeleton className="w-7 h-7 rounded-full" />

    return (
        <button
            onClick={() => toggleDarkMode(!isDarkMode)}
            className="nav-link p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
        >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
    )
}
