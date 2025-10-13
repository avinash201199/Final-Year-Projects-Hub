"use client"

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { Toggle } from './ui/toggle'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [current, setCurrent] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    setMounted(true)
    // only run on client
    try {
      setCurrent((theme as any) === 'dark' ? 'dark' : 'light')
    } catch (e) {
      setCurrent('light')
    }
  }, [theme])
  if (!mounted) return null

  return (
    <div className="flex items-center gap-2">
      <Toggle
        aria-label="Toggle dark mode"
        role="button"
        pressed={current === 'dark'}
        onPressedChange={(v) => {
          setTheme(v ? 'dark' : 'light')
          setCurrent(v ? 'dark' : 'light')
        }}
        title="Toggle dark mode"
      >
        {current === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </Toggle>
    </div>
  )
}
