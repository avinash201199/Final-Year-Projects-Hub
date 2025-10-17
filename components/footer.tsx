import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Final Year Projects Hub</h3>
            <p className="text-sm text-muted-foreground mb-4">
              A community platform for students to showcase their innovative final year projects.
            </p>
            <div className="inline-flex items-center gap-2 rounded-md bg-accent/60 text-accent-foreground px-3 py-1 text-xs">
              <span>Open Source</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-colors">
                  Contribute
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/favourites" className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-colors">
                  My Favourites
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/avinash201199"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-accent/60 transition-colors focus-visible:ring-2 focus-visible:ring-ring/50"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/AvinashSingh_20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-accent/60 transition-colors focus-visible:ring-2 focus-visible:ring-ring/50"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/avinash-singh-bb0b8a371/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-accent/60 transition-colors focus-visible:ring-2 focus-visible:ring-ring/50"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Final Year Projects Hub. Built by Avinash Singh.</p>
        </div>
      </div>
    </footer>
  )
}
