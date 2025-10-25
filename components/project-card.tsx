"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useFavourites } from "@/hooks/use-favourites"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    category: string
    techStack: string[]
    github: string
    image: string
    contributors: string[]
    featured?: boolean
    live?: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { isFavourite, toggle, hydrated } = useFavourites()
  const fav = hydrated ? isFavourite(project.id) : false

  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      {project.featured && (
        <Badge className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground">Featured</Badge>
      )}

      {/* Favourite toggle */}
      <button
        type="button"
        aria-label={fav ? "Remove from favourites" : "Add to favourites"}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          toggle(project.id)
        }}
        className={`absolute top-4 left-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/90 shadow transition-all duration-200 hover:scale-110 focus-visible:ring-ring/50 focus-visible:ring-2 ${
          fav ? 'text-red-500' : 'text-muted-foreground hover:text-red-400'
        }`}
      >
        <Heart
          className={`h-5 w-5 transition-all duration-200 ${
            fav ? 'fill-red-500 text-red-500' : ''
          }`}
        />
      </button>

      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} - ${project.category} project using ${project.techStack.slice(0, 2).join(', ')}`}
          fill
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <div className="mb-2">
          <Badge variant="secondary" className="text-xs">
            {project.category}
          </Badge>
        </div>

        <h3 className="text-xl font-semibold mb-2 text-balance">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild className="flex-1">
            <Link href={`/project/${project.id}`}>
              View Details
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          {project.live && (
            <Link href={project.live} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <ExternalLink className="h-4 w-4" /> Live
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
