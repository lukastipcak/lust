// hooks/useTheme.ts
import { useState, useEffect, useLayoutEffect } from 'react'

export const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [textColor, setTextColor] = useState('green')
    const [isLoaded, setIsLoaded] = useState(false)

    // Načti uložené nastavení při mountu
    useLayoutEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        const storedTextColor = localStorage.getItem('textColor')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        // Nastav dark mode
        const shouldBeDark = storedTheme === 'dark' || (!storedTheme && prefersDark)
        setIsDarkMode(shouldBeDark)
        document.documentElement.classList.toggle('dark', shouldBeDark)

        // Nastav barvu
        if (storedTextColor) {
            setTextColor(storedTextColor)
            document.documentElement.setAttribute('data-palette', storedTextColor)
        }

        setIsLoaded(true)
    }, [])

    // Ulož změny do localStorage
    const toggleDarkMode = (mode: boolean) => {
        setIsDarkMode(mode)
        document.documentElement.classList.toggle('dark', mode)
        localStorage.setItem('theme', mode ? 'dark' : 'light')
    }

    const changeTextColor = (color: string) => {
        setTextColor(color)
        document.documentElement.setAttribute('data-palette', color)
        localStorage.setItem('textColor', color)
    }

    return {
        isDarkMode,
        textColor,
        toggleDarkMode,
        changeTextColor,
        isLoaded,
    }
}
