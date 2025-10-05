import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Github, ExternalLink, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import projectsData from "@/data/projects.json"

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }))
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === Number.parseInt(params.id))

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden border border-border">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          {/* Project Details */}
          <div>
            <div className="mb-4">
              <Badge variant="secondary" className="mb-2">
                {project.category}
              </Badge>
              {project.featured && <Badge className="ml-2 bg-primary text-primary-foreground">Featured</Badge>}
            </div>

            <h1 className="text-4xl font-bold mb-4 text-balance">{project.title}</h1>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{project.fullDescription}</p>

            {/* Tech Stack */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Contributors */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Contributors
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.contributors.map((contributor) => (
                  <span key={contributor} className="px-3 py-1 rounded-md bg-card border border-border text-sm">
                    {contributor}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="flex-1">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1 bg-transparent">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Description */}
        <div className="mt-12 max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">About This Project</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
