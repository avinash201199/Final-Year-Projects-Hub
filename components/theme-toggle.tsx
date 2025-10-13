"use client"

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { Toggle } from './ui/toggle'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const current = resolvedTheme || theme || 'light'

  return (
    <div className="flex items-center gap-2">
      <Toggle
        aria-label="Toggle dark mode"
        role="button"
        pressed={current === 'dark'}
        onPressedChange={(v) => setTheme(v ? 'dark' : 'light')}
        title="Toggle dark mode"
      >
        {current === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </Toggle>
    </div>
  )
}
