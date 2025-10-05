# 🎓 Final Year Projects Hub

A modern, open-source platform for showcasing and discovering final year student projects. Built with Next.js and designed to help students share their innovative work with the community.

![Final Year Projects Hub](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

- **🔍 Smart Search & Filter** - Find projects by title, description, or filter by category
- **🎨 Modern Dark UI** - Clean, professional design with smooth animations
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **⭐ Featured Projects** - Highlight exceptional projects on the homepage
- **📊 Project Categories** - Organized by Machine Learning, Web Dev, IoT, Data Science, Blockchain, and more
- **🖼️ Project Screenshots** - Visual showcase with uploaded project images
- **📝 Detailed Project Pages** - Complete information including tech stack, contributors, and GitHub links
- **🤝 Easy Contribution** - Simple process for adding your project to the hub
- **📬 Contact Form** - Get in touch with the maintainers
- **ℹ️ About Page** - Learn more about the platform and its mission

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Data Storage:** JSON-based (easily upgradeable to database)

## 📦 Installation

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Setup

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/final-year-projects-hub.git
   cd final-year-projects-hub
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

\`\`\`
final-year-projects-hub/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Homepage with project cards
│   ├── project/[id]/        # Dynamic project details pages
│   ├── submit/              # Project submission page
│   ├── contribute/          # Contribution guidelines
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── header.tsx           # Navigation header
│   ├── footer.tsx           # Footer component
│   ├── project-card.tsx     # Project card component
│   └── search-filter.tsx    # Search and filter UI
├── data/                    # Data files
│   └── projects.json        # Project data
├── public/                  # Static assets
│   └── projects/            # Project screenshots
└── README.md               # This file
\`\`\`

## 🤝 Contributing

We welcome contributions from students and developers! Here's how you can add your project:

### Quick Start

1. **Create an Issue First**
   - Go to the [Issues](https://github.com/yourusername/final-year-projects-hub/issues) page
   - Click "New Issue"
   - Include: project title, description, category, tech stack, and key features
   - Wait for approval before proceeding

2. **Fork the Repository**
   - Click the "Fork" button at the top right of this page

3. **Clone Your Fork**
   \`\`\`bash
   git clone https://github.com/YOUR_USERNAME/final-year-projects-hub.git
   cd final-year-projects-hub
   \`\`\`

4. **Create a New Branch**
   \`\`\`bash
   git checkout -b add-project-your-project-name
   \`\`\`

5. **Add Your Project Screenshot**
   - Add your image to `public/projects/`
   - Name it descriptively (e.g., `my-awesome-project.jpg`)
   - Recommended size: 1200x630px
   - Supported formats: JPG, PNG, WebP

6. **Update projects.json**
   - Open `data/projects.json`
   - Add your project following this format:
   \`\`\`json
   {
     "id": 7,
     "title": "Your Project Title",
     "description": "Brief description (1-2 sentences)",
     "category": "Machine Learning",
     "techStack": ["React", "Node.js", "MongoDB"],
     "github": "https://github.com/yourusername/your-project",
     "image": "/projects/your-project-screenshot.jpg",
     "contributors": ["Your Name", "Co-contributor Name"],
     "featured": false,
     "fullDescription": "Detailed description of your project, its features, and impact."
   }
   \`\`\`

7. **Test Locally**
   \`\`\`bash
   npm run dev
   \`\`\`
   Verify your project appears correctly

8. **Commit and Push**
   \`\`\`bash
   git add .
   git commit -m "Add: [Your Project Name]"
   git push origin add-project-your-project-name
   \`\`\`

9. **Create a Pull Request**
   - Go to your fork on GitHub
   - Click "Compare & pull request"
   - Reference the issue number in your PR description
   - Wait for review

### Contribution Guidelines

- ✅ Projects must be final year or capstone projects
- ✅ Include a working GitHub repository link
- ✅ Provide a clear project description
- ✅ Use high-quality screenshots (min 800x600px)
- ✅ List all contributors
- ✅ Ensure all information is accurate
- ❌ No plagiarized or copied projects
- ❌ No inappropriate or offensive content

For detailed instructions, visit the [Contribute Page](http://localhost:3000/contribute).

## 📊 Available Categories

- Machine Learning
- Web Development
- Mobile Development
- IoT (Internet of Things)
- Data Science
- Blockchain
- Cybersecurity
- Game Development
- AR/VR
- Cloud Computing

## 🎯 Roadmap

- [ ] Add user authentication
- [ ] Implement project voting/likes system
- [ ] Add comment section for projects
- [ ] Integrate with database (PostgreSQL/MongoDB)
- [ ] Add project tags for better filtering
- [ ] Implement dark/light mode toggle
- [ ] Add project analytics dashboard
- [ ] Create API for external integrations
- [ ] Add RSS feed for new projects
- [ ] Implement advanced search with multiple filters

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Maintainers

- **Your Name** - [GitHub](https://github.com/yourusername) | [Email](mailto:your.email@example.com)

## 🙏 Acknowledgments

- Thanks to all contributors who have shared their amazing projects
- Built with [Next.js](https://nextjs.org/) and [shadcn/ui](https://ui.shadcn.com/)
- Inspired by the need to showcase student innovation

## 📧 Contact

Have questions or suggestions? Reach out to us:

- **Email:** contact@finalyearprojectshub.com
- **GitHub Issues:** [Create an issue](https://github.com/yourusername/final-year-projects-hub/issues)
- **Contact Form:** [Visit our contact page](http://localhost:3000/contact)

## 🌟 Show Your Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing your project

---

**Made with ❤️ by students, for students**
