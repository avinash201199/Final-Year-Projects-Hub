"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Upload } from "lucide-react"

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    techStack: "",
    github: "",
    contributors: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        title: "",
        description: "",
        category: "",
        techStack: "",
        github: "",
        contributors: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
          <p className="text-lg text-muted-foreground">
            Your project has been submitted successfully. We&apos;ll review it and add it to our showcase soon.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Submit Your Project</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Share your innovative final year project with the community.
          </p>

          {/* Guidelines Section */}
          <div className="mb-8 p-6 rounded-lg border border-primary/50 bg-primary/5">
            <h2 className="text-xl font-semibold mb-4 text-primary">Guidelines for Submitting Your Project</h2>
            <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
              <li>Ensure your project is hosted on GitHub with a public repository.</li>
              <li>Add a README.md in your repo explaining your project clearly.</li>
              <li>Include screenshots or demo links if available.</li>
              <li>Provide correct category and tech stack tags.</li>
              <li>Submit only original or open-source projects.</li>
              <li>Fill in all form fields accurately before submitting.</li>
            </ol>
          </div>

          {/* Submission Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="title">Project Title *</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter your project title"
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your project in detail"
                rows={5}
                required
              />
            </div>

            <div>
              <Label htmlFor="category">Category *</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Web Dev">Web Development</SelectItem>
                  <SelectItem value="Machine Learning">Machine Learning</SelectItem>
                  <SelectItem value="IoT">Internet of Things</SelectItem>
                  <SelectItem value="Data Science">Data Science</SelectItem>
                  <SelectItem value="Blockchain">Blockchain</SelectItem>
                  <SelectItem value="Mobile Dev">Mobile Development</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="techStack">Tech Stack *</Label>
              <Input
                id="techStack"
                name="techStack"
                value={formData.techStack}
                onChange={handleChange}
                placeholder="e.g., React, Node.js, MongoDB (comma-separated)"
                required
              />
            </div>

            <div>
              <Label htmlFor="github">GitHub Repository Link *</Label>
              <Input
                id="github"
                name="github"
                type="url"
                value={formData.github}
                onChange={handleChange}
                placeholder="https://github.com/username/repo"
                required
              />
            </div>

            <div>
              <Label htmlFor="image">Project Thumbnail/Image</Label>
              <div className="mt-2 flex items-center gap-4">
                <Button type="button" variant="outline" className="w-full bg-transparent">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Image
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Recommended size: 600x400px (JPG, PNG)</p>
            </div>

            <div>
              <Label htmlFor="contributors">Contributor Name(s) *</Label>
              <Input
                id="contributors"
                name="contributors"
                value={formData.contributors}
                onChange={handleChange}
                placeholder="e.g., John Doe, Jane Smith (comma-separated)"
                required
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Submit Project
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
