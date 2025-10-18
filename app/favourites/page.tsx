"use client"

import { useMemo } from "react"
import projectsData from "@/data/projects.json"
import { ProjectCard } from "@/components/project-card"
import { useFavourites } from "@/hooks/use-favourites"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FavouritesPage() {
  const { ids, remove, hydrated } = useFavourites()

  const favProjects = useMemo(() => {
    if (!hydrated) return [] as typeof projectsData
    const set = new Set(ids)
    return projectsData.filter((p) => set.has(p.id))
  }, [ids, hydrated])

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">My Favourites</h1>
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Back to Home</Link>
        </div>

        {!hydrated ? (
          <div className="text-center py-16 text-muted-foreground">Loading your favourites…</div>
        ) : favProjects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-6">No favourite projects yet.</p>
            <Button asChild>
              <Link href="/">Browse Projects</Link>
            </Button>
          </div>
        ) : (
          <>
            <p className="text-sm text-muted-foreground mb-6">
              You have {favProjects.length} favourite project{favProjects.length !== 1 ? "s" : ""}.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favProjects.map((project) => (
                <div key={project.id} className="group animate-fade-in">
                  <ProjectCard project={project} />
                  <div className="mt-3 flex justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => remove(project.id)}
                    >
                      Remove from favourites
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  )
}
