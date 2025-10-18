"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SearchFilterProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  categories: string[]
}

export function SearchFilter({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
}: SearchFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <button
          onClick={() =>
            window.dispatchEvent(
              new CustomEvent("open-spotlight", { detail: { query: searchQuery, category: selectedCategory } })
            )
          }
          className="w-full text-left pl-10 pr-4 py-3 rounded-xl border border-border bg-gradient-to-r from-transparent to-popover/10 hover:from-popover/5 hover:to-popover/20 transition-shadow shadow-sm hover:shadow-md flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <Search className="w-4 h-4 text-muted-foreground" />
            {searchQuery ? (
              <span className="text-foreground">{searchQuery}</span>
            ) : (
              <span className="text-muted-foreground">Search projects by title or keywords...</span>
            )}
          </div>
          <div className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded">⌘K</div>
        </button>
      </div>

      <Select
        value={selectedCategory}
        onValueChange={(val) => {
          setSelectedCategory(val)
          // open spotlight and filter by category
          window.dispatchEvent(new CustomEvent("open-spotlight", { detail: { query: searchQuery, category: val } }))
        }}
      >
        <SelectTrigger className="w-full sm:w-[200px]">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
