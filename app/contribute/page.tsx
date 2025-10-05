import { GitFork, GitPullRequest, FileJson, CheckCircle, ImageIcon, FileText } from "lucide-react"

export default function ContributePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Contribute Your Project</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Help grow our community by adding your final year project to the hub. Follow these simple steps to
            contribute.
          </p>
        </div>

        {/* Why Contribute Section */}
        <div
          className="mb-12 p-6 rounded-lg border border-border bg-card animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="text-2xl font-bold mb-4">Why Contribute?</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span>Showcase your work to students and educators worldwide</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span>Help future students find inspiration for their projects</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span>Build your portfolio and gain recognition</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span>Contribute to the open-source community</span>
            </li>
          </ul>
        </div>
<div className="mb-6 p-4 bg-card border border-border rounded-lg flex items-center justify-between animate-fade-in">
  <div className="flex items-center gap-2">
    <GitFork className="h-5 w-5 text-primary" />
    <span className="font-medium text-lg">Repository Link:</span>
  </div>
  <a
    href="https://github.com/avinash201199/Final-Year-Projects-Hub"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary font-semibold hover:underline"
  >
    https://github.com/avinash201199/Final-Year-Projects-Hub
  </a>
</div>

        {/* Step-by-Step Guide */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">How to Contribute</h2>

          {/* Step 1 - Create an Issue */}
          <div
            className="p-6 rounded-lg border border-border bg-card animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Create an Issue First</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Before creating a pull request, create an issue to discuss your project addition with the maintainers.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-2">Go to the Issues tab and create a new issue with:</p>
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside ml-2">
                      <li>
                        <strong className="text-foreground">Title:</strong> "Add Project: [Your Project Name]"
                      </li>
                      <li>
                        <strong className="text-foreground">Project Title:</strong> Full name of your project
                      </li>
                      <li>
                        <strong className="text-foreground">Description:</strong> Brief overview (2-3 sentences)
                      </li>
                      <li>
                        <strong className="text-foreground">Category:</strong> Machine Learning, IoT, Web Dev, etc.
                      </li>
                      <li>
                        <strong className="text-foreground">Tech Stack:</strong> List main technologies used
                      </li>
                      <li>
                        <strong className="text-foreground">GitHub Repository:</strong> Link to your project repo
                      </li>
                      <li>
                        <strong className="text-foreground">Contributors:</strong> Names of all team members
                      </li>
                      <li>
                        <strong className="text-foreground">Key Features:</strong> 3-5 main features of your project
                      </li>
                      <li>
                        <strong className="text-foreground">Project Status:</strong> Completed/In Progress
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded">
                    <p className="text-sm font-medium mb-2">Why create an issue first?</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Allows maintainers to review project details before code submission</li>
                      <li>Prevents duplicate project submissions</li>
                      <li>Ensures your project meets quality guidelines</li>
                      <li>Provides a discussion thread for any questions or clarifications</li>
                      <li>Streamlines the PR review process</li>
                    </ul>
                  </div>
                  <div className="bg-background p-4 rounded border border-border">
                    <p className="text-sm font-medium mb-2">Example Issue:</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>
                        <strong className="text-foreground">Title:</strong> Add Project: AI-Powered Code Review System
                      </p>
                      <p>
                        <strong className="text-foreground">Description:</strong> An intelligent code review system that
                        uses machine learning to analyze code quality, detect bugs, and suggest improvements...
                      </p>
                      <p>
                        <strong className="text-foreground">Category:</strong> Machine Learning
                      </p>
                      <p>
                        <strong className="text-foreground">Tech Stack:</strong> Python, TensorFlow, React, Node.js
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className="p-6 rounded-lg border border-border bg-card animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <GitFork className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Fork the Repository</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  After your issue is acknowledged, fork the Final Year Projects Hub repository to your GitHub account.
                </p>
                <div className="bg-background p-4 rounded border border-border font-mono text-sm">
                  <p className="text-muted-foreground mb-2"># Navigate to the repository</p>
                  <p>https://github.com/avinash201199/Final-Year-Projects-Hub</p>
                  <p className="text-muted-foreground mt-2"># Click the "Fork" button in the top right</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div
            className="p-6 rounded-lg border border-border bg-card animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Clone Your Fork</h3>
                <p className="text-muted-foreground mb-3">Clone the forked repository to your local machine.</p>
                <div className="bg-background p-4 rounded border border-border font-mono text-sm">
                  <p>git clone https://github.com/avinash201199/Final-Year-Projects-Hub</p>
                  <p>cd final-year-projects-hub</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div
            className="p-6 rounded-lg border border-border bg-card animate-fade-in"
            style={{ animationDelay: "0.45s" }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Create a New Branch</h3>
                <p className="text-muted-foreground mb-3">Create a new branch for your project addition.</p>
                <div className="bg-background p-4 rounded border border-border font-mono text-sm">
                  <p>git checkout -b add-project-your-project-name</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div
            className="p-6 rounded-lg border border-border bg-card animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                5
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <ImageIcon className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Add Your Project Screenshot</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Add a high-quality screenshot of your project to showcase its interface and features.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-2">Step 5.1: Prepare Your Image</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
                      <li>Take a clear screenshot of your project (preferably the main interface)</li>
                      <li>Recommended dimensions: 1200x800 pixels or similar aspect ratio</li>
                      <li>Supported formats: PNG, JPG, or WebP</li>
                      <li>Keep file size under 500KB for optimal loading</li>
                      <li>Use a descriptive filename (e.g., your-project-name.png)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Step 5.2: Add Image to Repository</p>
                    <div className="bg-background p-4 rounded border border-border font-mono text-sm">
                      <p className="text-muted-foreground mb-2"># Create the projects folder if it doesn't exist</p>
                      <p>mkdir -p public/projects</p>
                      <p className="text-muted-foreground mt-3 mb-2"># Copy your screenshot to the projects folder</p>
                      <p>cp /path/to/your-screenshot.png public/projects/your-project-name.png</p>
                    </div>
                  </div>
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded">
                    <p className="text-sm font-medium mb-2">Image Guidelines:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Use kebab-case for filenames (e.g., ai-code-review.png)</li>
                      <li>Ensure the image clearly shows your project's key features</li>
                      <li>Avoid screenshots with personal or sensitive information</li>
                      <li>The image path in JSON will be: /projects/your-filename.png</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div
            className="p-6 rounded-lg border border-border bg-card animate-fade-in"
            style={{ animationDelay: "0.55s" }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                6
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <FileJson className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Add Your Project to projects.json</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Open <code className="bg-background px-2 py-1 rounded text-sm">data/projects.json</code> and add your
                  project details following this format:
                </p>
                <div className="bg-background p-4 rounded border border-border font-mono text-sm overflow-x-auto">
                  <pre>{`{
  "id": 7,
  "title": "Your Project Title",
  "description": "A brief description of your project (1-2 sentences)",
  "category": "Machine Learning | IoT | Web Dev | Data Science | Blockchain | Mobile Dev",
  "techStack": ["Technology1", "Technology2", "Technology3"],
  "github": "https://github.com/your-username/your-project",
  "image": "/projects/your-project-name.png",
  "contributors": ["Your Name", "Co-contributor Name"],
  "featured": false,
  "fullDescription": "A detailed description of your project, its features, and impact (3-4 sentences)"
}`}</pre>
                </div>
                <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded">
                  <p className="text-sm font-medium mb-2">Important Notes:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Use a unique ID (increment from the last project)</li>
                    <li>Keep descriptions concise and clear</li>
                    <li>Choose the most relevant category</li>
                    <li>List 3-5 main technologies in your tech stack</li>
                    <li>Ensure your GitHub repository is public</li>
                    <li>
                      <strong>Image path must match your uploaded file:</strong> /projects/your-filename.png
                    </li>
                    <li>Set featured to false (admins will feature exceptional projects)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div
            className="p-6 rounded-lg border border-border bg-card animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                7
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Commit Your Changes</h3>
                <p className="text-muted-foreground mb-3">Commit your changes with a clear and descriptive message.</p>
                <div className="bg-background p-4 rounded border border-border font-mono text-sm">
                  <p>git add public/projects/your-project-name.png</p>
                  <p>git add data/projects.json</p>
                  <p>git commit -m "Add [Your Project Name] to projects list"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 8 */}
          <div
            className="p-6 rounded-lg border border-border bg-card animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                8
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Push to Your Fork</h3>
                <p className="text-muted-foreground mb-3">Push your changes to your forked repository.</p>
                <div className="bg-background p-4 rounded border border-border font-mono text-sm">
                  <p>git push origin add-project-your-project-name</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 9 */}
          <div
            className="p-6 rounded-lg border border-border bg-card animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                9
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <GitPullRequest className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Create a Pull Request</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Go to the original repository and create a pull request from your fork.
                </p>
                <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                  <li>Navigate to the original repository on GitHub</li>
                  <li>Click on "Pull Requests" tab</li>
                  <li>Click "New Pull Request"</li>
                  <li>Click "compare across forks"</li>
                  <li>Select your fork and branch</li>
                  <li>Add a clear title: "Add [Your Project Name]"</li>
                  <li>
                    In the PR description, reference your issue: "Closes #[issue-number]" and briefly describe your
                    project
                  </li>
                  <li>Submit the pull request</li>
                </ol>
                <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded">
                  <p className="text-sm font-medium mb-2">PR Description Template:</p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Closes #[issue-number]</p>
                    <p className="mt-2">This PR adds [Project Name] to the projects hub.</p>
                    <p className="mt-2">
                      <strong className="text-foreground">Changes:</strong>
                    </p>
                    <p>- Added project screenshot to public/projects/</p>
                    <p>- Updated projects.json with project details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guidelines Section */}
        <div
          className="mt-12 p-6 rounded-lg border border-border bg-card animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          <h2 className="text-2xl font-bold mb-4">Contribution Guidelines</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              <strong className="text-foreground">Quality:</strong> Ensure your project is complete, well-documented,
              and functional.
            </p>
            <p>
              <strong className="text-foreground">Originality:</strong> Submit only your own work or properly credit
              collaborators.
            </p>
            <p>
              <strong className="text-foreground">Documentation:</strong> Your GitHub repository should have a clear
              README with setup instructions.
            </p>
            <p>
              <strong className="text-foreground">Code of Conduct:</strong> Be respectful and professional in all
              interactions.
            </p>
            <p>
              <strong className="text-foreground">Review Process:</strong> Maintainers will review your PR within 3-5
              business days.
            </p>
          </div>
        </div>

        {/* Need Help Section */}
        <div
          className="mt-8 p-6 rounded-lg border border-primary/20 bg-primary/5 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <h3 className="text-xl font-bold mb-2">Need Help?</h3>
          <p className="text-muted-foreground mb-4">
            If you encounter any issues or have questions about contributing, feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact Us
            </a>
            <a
              href="https://github.com/avinash201199/Final-Year-Projects-Hub/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-2 text-sm font-medium transition-colors hover:bg-accent"
            >
              Open an Issue
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
