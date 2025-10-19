"use client"

import { useCallback, useEffect, useMemo, useState } from "react"

const STORAGE_KEY = "favourites"

type Id = number

export function useFavourites() {
  const [ids, setIds] = useState<Id[]>([])
  const [hydrated, setHydrated] = useState(false)

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null
      if (raw) {
        const parsed = JSON.parse(raw) as Id[]
        if (Array.isArray(parsed)) {
          setIds(parsed)
        }
      }
    } catch (e) {
      // ignore parse errors
    } finally {
      setHydrated(true)
    }
  }, [])

  // Persist to localStorage when ids change (after hydrate)
  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
    } catch (e) {
      // ignore write errors
    }
  }, [ids, hydrated])

  const isFavourite = useCallback((id: Id) => ids.includes(id), [ids])

  const add = useCallback((id: Id) => {
    setIds((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }, [])

  const remove = useCallback((id: Id) => {
    setIds((prev) => prev.filter((x) => x !== id))
  }, [])

  const toggle = useCallback((id: Id) => {
    setIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }, [])

  const setAll = useCallback((next: Id[]) => {
    setIds(Array.isArray(next) ? next : [])
  }, [])

  const value = useMemo(
    () => ({ ids, hydrated, isFavourite, add, remove, toggle, setAll }),
    [ids, hydrated, isFavourite, add, remove, toggle, setAll],
  )

  return value
}
