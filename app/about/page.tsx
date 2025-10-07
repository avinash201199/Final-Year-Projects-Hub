import { GraduationCap, Target, Users, Rocket, Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background animate-fade-in animate-delay-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance animate-fade-in animate-delay-100">About Final Year Projects Hub</h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-in animate-delay-200">
            A student community platform dedicated to showcasing innovative final year projects and fostering
            collaboration among aspiring developers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-6 rounded-lg border border-border bg-card animate-fade-in animate-delay-100">
              <Target className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide a platform where students can showcase their final year projects, inspire others, and build a
                portfolio that stands out to potential employers.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card animate-fade-in animate-delay-200">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-2xl font-semibold mb-3">Community Driven</h2>
              <p className="text-muted-foreground leading-relaxed">
                Built by students, for students. We believe in the power of community and collaboration to drive
                innovation and learning.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card animate-fade-in animate-delay-300">
              <GraduationCap className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-2xl font-semibold mb-3">Learn & Grow</h2>
              <p className="text-muted-foreground leading-relaxed">
                Explore diverse projects across various domains, learn from others&apos; work, and get inspired to
                create something amazing.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card animate-fade-in animate-delay-300">
              <Rocket className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-2xl font-semibold mb-3">Launch Your Career</h2>
              <p className="text-muted-foreground leading-relaxed">
                Showcase your skills to potential employers and collaborators. Your project could be the key to landing
                your dream job.
              </p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none animate-fade-in animate-delay-200">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3 animate-fade-in animate-delay-100">
                <span className="text-primary mt-1">•</span>
                <span>A curated collection of innovative student projects across multiple domains</span>
              </li>
              <li className="flex items-start gap-3 animate-fade-in animate-delay-200">
                <span className="text-primary mt-1">•</span>
                <span>Easy-to-use search and filter functionality to discover relevant projects</span>
              </li>
              <li className="flex items-start gap-3 animate-fade-in animate-delay-300">
                <span className="text-primary mt-1">•</span>
                <span>Detailed project pages with tech stacks, GitHub links, and contributor information</span>
              </li>
              <li className="flex items-start gap-3 animate-fade-in animate-delay-300">
                <span className="text-primary mt-1">•</span>
                <span>Simple submission process for students to showcase their work</span>
              </li>
              <li className="flex items-start gap-3 animate-fade-in animate-delay-300">
                <span className="text-primary mt-1">•</span>
                <span>A supportive community that celebrates innovation and creativity</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-12 animate-fade-in animate-delay-200">Meet the Creator</h2>
            <div className="not-prose bg-card border border-border rounded-lg p-8 mb-8 animate-fade-in animate-delay-300">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <Image
                    src="/profile/avinash-singh.jpg"
                    alt="Avinash Singh"
                    width={200}
                    height={200}
                    className="rounded-lg border-2 border-primary"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Avinash Singh</h3>
                  <p className="text-primary mb-4">Software Engineer & Open Source Enthusiast</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm a passionate developer and educator dedicated to empowering students through technology. With a
                    strong background in full-stack development and a deep interest in open-source contributions, I
                    created Final Year Projects Hub to give students a space to showcase their innovative work and
                    inspire the next generation of developers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I believe every student project deserves recognition, and that sharing knowledge is the key to
                    collective growth. Through this platform, my goal is to bridge the gap between academic projects and
                    real-world applications, helping students build portfolios that truly stand out.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/avinash201199"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="text-sm">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/avinash-singh-bb0b8a371/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a
                      href="https://x.com/AvinashSingh_20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="text-sm">X (Twitter)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-4 animate-fade-in animate-delay-300">
              Whether you&apos;re a student looking to showcase your work, an educator seeking inspiration for your
              curriculum, or a recruiter searching for talented developers, Final Year Projects Hub is here to connect
              you with the best student innovations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
