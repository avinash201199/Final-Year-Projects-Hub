"use client"

import React, { useEffect, useRef, useState, useMemo } from "react"
import projectsData from "@/data/projects.json"
import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Spotlight() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | "all">("all")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const itemRefs = useRef<Array<HTMLLIElement | null>>([])

  // Open on global custom event; accept detail { query?, category? }
  useEffect(() => {
    function onOpen(e: Event) {
      const ev = e as CustomEvent | Event
      // If detail provided, set query/category
      // @ts-ignore - detail is optional on Event
      const detail = (ev as CustomEvent)?.detail
      if (detail) {
        if (typeof detail.query === "string") setQuery(detail.query)
        if (detail.category) setSelectedCategory(detail.category)
      }
      setOpen(true)
    }
    window.addEventListener("open-spotlight", onOpen as EventListener)
    return () => window.removeEventListener("open-spotlight", onOpen as EventListener)
  }, [])

  // Keyboard shortcut: Cmd/Ctrl + K
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const mod = e.metaKey || e.ctrlKey
      if (mod && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setSelectedIndex(0)
    }
  }, [open])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) {
      // If no query, show top projects for the selected category (or global top if 'all')
      const list = selectedCategory === "all" ? projectsData : projectsData.filter((p) => p.category === selectedCategory)
      return list.slice(0, 8)
    }
    return projectsData
      .map((p) => ({
        p,
        score:
          (p.title.toLowerCase().includes(q) ? 3 : 0) +
          (p.description.toLowerCase().includes(q) ? 2 : 0) +
          (p.techStack.some((t) => t.toLowerCase().includes(q)) ? 1 : 0),
      }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.p)
      .filter((p) => selectedCategory === "all" || p.category === selectedCategory)
      .slice(0, 10)
  }, [query, selectedCategory])

  const categories = useMemo(() => {
    const s = new Set(projectsData.map((p) => p.category))
    return ["all", ...Array.from(s).sort()]
  }, [])

  function openProject(id: string | number) {
    setOpen(false)
    router.push(`/project/${id}`)
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === "Enter") {
      e.preventDefault()
      const sel = results[selectedIndex]
      if (sel) openProject(sel.id)
    }
  }

  // Keep selectedIndex within bounds when results change
  useEffect(() => {
    setSelectedIndex((i) => Math.max(0, Math.min(i, results.length - 1)))
  }, [results])

  // Scroll the selected item into view when keyboard navigation changes
  useEffect(() => {
    const el = itemRefs.current[selectedIndex]
    if (el) {
      el.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" })
    }
  }, [selectedIndex, results])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
        onKeyDown={onKeyDown}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects... (title, description, tech)"
            className="flex-1 bg-transparent outline-none placeholder:opacity-60 text-foreground"
            aria-label="Search projects"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="ml-3 bg-transparent border border-border rounded-md px-2 py-1 text-sm text-muted-foreground"
            aria-label="Filter by category"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === "all" ? "All Categories" : c}
              </option>
            ))}
          </select>

          <button
            className="ml-3 p-2 rounded-md hover:bg-muted/10"
            onClick={() => setOpen(false)}
            aria-label="Close search"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        <div className="max-h-80 overflow-auto">
          {results.length === 0 ? (
            <div className="p-6 text-center text-sm text-muted-foreground">No results</div>
          ) : (
            <ul>
              {results.map((project, idx) => (
                <li
                  key={project.id}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => openProject(project.id)}
                  className={`cursor-pointer px-4 py-3 hover:bg-popover/10 flex gap-3 items-start ${
                    idx === selectedIndex ? "bg-popover/10" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{project.title}</div>
                      <div className="text-xs text-muted-foreground">{project.category}</div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                      {project.techStack.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded-full bg-background/60 border border-border text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="px-4 py-2 border-t border-border text-xs text-muted-foreground flex items-center justify-between">
          <div>Press Enter to open — Esc to close</div>
          <div className="text-muted-foreground">Tip: <kbd className="px-2 py-1 bg-background/50 rounded">⌘/Ctrl + K</kbd></div>
        </div>
      </div>
    </div>
  )
}
