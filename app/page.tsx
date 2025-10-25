"use client"

import { useState, useMemo } from "react"
import { ProjectCard } from "@/components/project-card"
import { SearchFilter } from "@/components/search-filter"
import projectsData from "@/data/projects.json"
import { Sparkles } from "lucide-react"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = useMemo(() => {
    const cats = new Set(projectsData.map((project) => project.category))
    return Array.from(cats).sort()
  }, [])

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const featuredProjects = useMemo(() => {
    return projectsData.filter((project) => project.featured)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-fade-in">
            Discover Innovative <span className="text-muted-foreground">Student Projects</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground mb-8 animate-fade-in leading-relaxed">
            Explore an exclusive collection of cutting-edge final year projects crafted by brilliant minds. 
            Discover innovation, gain inspiration, and showcase your groundbreaking work to the world.
          </p>
          <a
            href="#all-projects"
            className="inline-block bg-primary text-primary-foreground font-semibold px-10 py-4 rounded-lg hover:bg-primary/90 transition-all hover:-translate-y-1"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('all-projects')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              })
            }}
          >
            Explore Projects
          </a>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="border-b border-border bg-card py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects */}
  <section id="all-projects" className="bg-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">All Projects</h2>

          <SearchFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />

          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-gray-500">No projects found matching your criteria.</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-500 mb-6">
                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="animate-fade-in opacity-0"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Animations CSS */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeInUp 0.8s forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.9);
          }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}
