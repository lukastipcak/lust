'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

export const ThemeToggle = () => {
    const { isDarkMode, toggleDarkMode, isLoaded } = useTheme()

    if (!isLoaded) return null

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
