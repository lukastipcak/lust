'use client'

import { useTheme as useNextTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const useTheme = () => {
    const { resolvedTheme, setTheme } = useNextTheme()
    const [textColor, setTextColor] = useState('green')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const stored = localStorage.getItem('textColor') ?? 'green'
        setTextColor(stored)
        document.documentElement.setAttribute('data-palette', stored)
    }, [])

    const toggleDarkMode = (mode: boolean) => {
        setTheme(mode ? 'dark' : 'light')
    }

    const changeTextColor = (color: string) => {
        setTextColor(color)
        document.documentElement.setAttribute('data-palette', color)
        localStorage.setItem('textColor', color)
    }

    return {
        isDarkMode: resolvedTheme === 'dark',
        textColor,
        toggleDarkMode,
        changeTextColor,
        isLoaded: mounted,
    }
}

