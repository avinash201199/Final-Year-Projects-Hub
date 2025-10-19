"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { GraduationCap } from "lucide-react"
import { ThemeToggle } from './theme-toggle'
import { Search } from 'lucide-react'

export function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contribute", label: "Contribute" },
    { href: "/favourites", label: "My Favourites" },
    // { href: "/submit", label: "Submit Project" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
            <span className="text-xl font-bold whitespace-nowrap">Final Year Projects Hub</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 justify-end flex-1 max-w-[900px]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium rounded-md px-3 py-2 transition-colors hover:bg-accent hover:text-accent-foreground ${
                  pathname === item.href ? "bg-accent/60 text-accent-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              aria-label="Open search"
              onClick={() => window.dispatchEvent(new CustomEvent('open-spotlight'))}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-lg bg-card border border-border shadow-sm hover:shadow-md transition-all ml-auto"
              style={{ minWidth: 240 }}
            >
              <Search className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Search projects</span>
            </button>

            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile menu button */}
          {/* <div className="md:hidden">
            <Link
              href="/submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Submit
            </Link>
          </div> */}
        </div>

        {/* Mobile navigation */}
        <nav className="md:hidden flex items-center gap-2 pb-4 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap text-sm font-medium rounded-md px-3 py-2 transition-colors hover:bg-accent hover:text-accent-foreground ${
                pathname === item.href ? "bg-accent/60 text-accent-foreground" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            aria-label="Open search"
            onClick={() => window.dispatchEvent(new Event('open-spotlight'))}
            className="inline-flex items-center gap-2 px-2 py-1 rounded-md hover:bg-muted/10"
          >
            <Search className="w-4 h-4" />
          </button>

          <div>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}