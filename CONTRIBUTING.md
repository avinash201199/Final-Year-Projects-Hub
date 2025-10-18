<div align="center">

# 🤝 Contributing to Final Year Projects Hub

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-10b981?style=for-the-badge)](https://github.com/avinash201199/final-year-projects-hub/pulls)
[![Contributors](https://img.shields.io/github/contributors/avinash201199/final-year-projects-hub?style=for-the-badge&color=8b5cf6)](https://github.com/avinash201199/final-year-projects-hub/graphs/contributors)

**Thank you for considering contributing to Final Year Projects Hub!**

We welcome contributions from developers of all skill levels. This guide will help you get started.

</div>

---

## 📑 Table of Contents

- [🎯 Ways to Contribute](#-ways-to-contribute)
- [⚙️ Technical Requirements](#️-technical-requirements)
- [🚀 Development Setup](#-development-setup)
- [🏗️ Project Architecture](#️-project-architecture)
- [📝 Adding Your Project](#-adding-your-project)
- [🐛 Bug Reports](#-bug-reports)
- [✨ Feature Requests](#-feature-requests)
- [💻 Code Contributions](#-code-contributions)
- [🔧 Troubleshooting Common Issues](#-troubleshooting-common-issues)
- [📋 Pull Request Guidelines](#-pull-request-guidelines)
- [🎨 Code Style Guide](#-code-style-guide)
- [🧪 Testing Guidelines](#-testing-guidelines)
- [📚 Documentation](#-documentation)

---

## 🎯 Ways to Contribute

There are many ways you can contribute to this project:

| Contribution Type | Description | Skill Level |
|-------------------|-------------|-------------|
| 📁 **Add Your Project** | Share your final year project | Beginner |
| 🐛 **Report Bugs** | Help identify issues | Beginner |
| 💡 **Suggest Features** | Propose new ideas | Beginner |
| 📖 **Improve Documentation** | Enhance guides and docs | Beginner |
| 🎨 **Design Improvements** | UI/UX enhancements | Intermediate |
| 💻 **Code Contributions** | Bug fixes, new features | Intermediate-Advanced |
| 🧪 **Write Tests** | Add test coverage | Intermediate-Advanced |
| ♿ **Accessibility** | Improve a11y compliance | Intermediate |
| 🌐 **Translations** | Add i18n support | Intermediate |

---

## ⚙️ Technical Requirements

### Minimum Requirements

```json
{
  "node": ">=18.17.0",
  "npm": ">=9.0.0",
  "packageManager": "npm | yarn | pnpm"
}
```

### Recommended Setup

- **Node.js**: `18.x` or `20.x` (LTS versions)
- **Package Manager**: `pnpm` (fastest) or `npm`
- **Code Editor**: VS Code with recommended extensions
- **Git**: Latest version

### Framework Versions

This project uses the latest stable versions:

| Package | Version | Notes |
|---------|---------|-------|
| **Next.js** | `15.2.4` | App Router (not Pages Router) |
| **React** | `18.3.1` | Client & Server Components |
| **TypeScript** | `^5.x` | Strict mode enabled |
| **Tailwind CSS** | `4.1.9` | Latest with new features |
| **Radix UI** | `~1.x` | Accessible component primitives |

> ⚠️ **Important**: This project was initially scaffolded with v0 and uses Next.js 15 (App Router). If you encounter compatibility issues with older tutorials or examples targeting Next.js 14 or Pages Router, please refer to the [official migration guide](https://nextjs.org/docs/app/building-your-application/upgrading).

---

## 🚀 Development Setup

### Step 1: Prerequisites Check

Verify your environment:

```bash
# Check Node.js version (should be 18.x or higher)
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

### Step 2: Fork & Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/final-year-projects-hub.git
cd final-year-projects-hub

# Add upstream remote
git remote add upstream https://github.com/avinash201199/final-year-projects-hub.git

# Verify remotes
git remote -v
```

### Step 3: Install Dependencies

```bash
# Using npm (recommended)
npm install

# Using yarn
yarn install

# Using pnpm (fastest)
pnpm install
```

### Step 4: Environment Setup

Create a `.env.local` file (if needed for future features):

```bash
# Currently no env variables required
# This file is for future configuration
```

### Step 5: Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app running.

### Step 6: Verify Setup

Check that everything works:

- ✅ App loads without errors
- ✅ Projects display correctly
- ✅ Search and filtering work
- ✅ Dark mode toggle works
- ✅ No console errors

---

## 🏗️ Project Architecture

### Directory Structure

```
final-year-projects-hub/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles & CSS variables
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── contribute/          # Contribution guide page
│   └── project/[id]/        # Dynamic project detail pages
│
├── components/              # React components
│   ├── header.tsx           # Site header with navigation
│   ├── footer.tsx           # Site footer
│   ├── project-card.tsx     # Project card component
│   ├── search-filter.tsx    # Search & filter UI
│   ├── spotlight.tsx        # Global search modal
│   ├── theme-provider.tsx   # Dark mode provider
│   ├── theme-toggle.tsx     # Theme switcher button
│   └── ui/                  # shadcn/ui components
│
├── data/
│   └── projects.json        # Project data storage
│
├── public/
│   ├── projects/            # Project screenshots
│   └── profile/             # Contributor avatars
│
├── lib/
│   └── utils.ts             # Utility functions
│
├── styles/
│   └── globals.css          # Additional global styles
│
└── hooks/                   # Custom React hooks
```

### Key Technologies

#### Frontend Framework
- **Next.js 15** with App Router (Server & Client Components)
- **React 18** with Concurrent Features
- **TypeScript** for type safety

#### Styling
- **Tailwind CSS 4.x** (utility-first CSS)
- **CSS Variables** for theming
- **shadcn/ui** components built on Radix UI

#### State Management
- React hooks (`useState`, `useMemo`, `useEffect`)
- URL state for search/filters
- Local storage for theme preference

#### Data Flow
```
projects.json → Server Component → Client Component → UI
```

---

## 📝 Adding Your Project

### Before You Start

1. **Create an Issue First**: [Open an issue](https://github.com/avinash201199/final-year-projects-hub/issues/new) with your project details
2. **Wait for Approval**: A maintainer will review and approve
3. **Then Proceed**: Only after approval, follow the steps below

### Detailed Steps

#### 1. Prepare Your Project Assets

**Screenshot Requirements:**
- **Dimensions**: 1200x630px (16:9 ratio) recommended
- **Format**: JPG, PNG, or WebP
- **Size**: Max 500KB (compress if needed)
- **Quality**: High-resolution, clear UI
- **Content**: Show main features, avoid generic stock images

**Tools for Compression:**
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)
- [ImageOptim](https://imageoptim.com/)

#### 2. Add Your Screenshot

```bash
# Add to public/projects/
cp /path/to/your-screenshot.jpg public/projects/my-project-name.jpg
```

**Naming Convention:**
- Use lowercase
- Replace spaces with hyphens
- Be descriptive but concise
- Example: `ai-code-review.jpg`, `weather-app.png`

#### 3. Update projects.json

Open `data/projects.json` and add your project entry:

```json
{
  "id": 999,
  "title": "Your Amazing Project",
  "description": "Brief one-line description (max 120 characters)",
  "category": "Web Development",
  "techStack": ["React", "Node.js", "MongoDB", "Docker"],
  "github": "https://github.com/username/repo",
  "live": "https://your-demo.com",
  "image": "/projects/your-project.jpg",
  "contributors": ["Your Name", "Teammate Name"],
  "featured": false,
  "fullDescription": "Detailed multi-line description explaining what your project does, the problem it solves, key features, and technical highlights. This appears on the project detail page."
}
```

**Field Specifications:**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | number | ✅ | Use next available number |
| `title` | string | ✅ | Max 80 characters |
| `description` | string | ✅ | Max 120 characters |
| `category` | string | ✅ | Must match existing categories |
| `techStack` | array | ✅ | 3-8 technologies recommended |
| `github` | string | ✅ | Valid GitHub URL |
| `live` | string | ⚠️ | URL or empty string "" |
| `image` | string | ✅ | Path: `/projects/filename.jpg` |
| `contributors` | array | ✅ | 1-5 names |
| `featured` | boolean | ✅ | Always `false` for new projects |
| `fullDescription` | string | ✅ | 200-500 words |

**Valid Categories:**
- Machine Learning
- Web Development
- Mobile Development
- IoT
- Data Science
- Blockchain
- Cybersecurity
- Game Development
- AR/VR
- Cloud Computing

#### 4. Test Your Changes

```bash
# Start dev server
npm run dev

# Check these:
# ✓ Your project appears on homepage
# ✓ Clicking opens detail page
# ✓ Image loads correctly
# ✓ All links work
# ✓ Search finds your project
# ✓ Filter by category works
```

#### 5. Validate JSON

Ensure `projects.json` is valid:

```bash
# Check JSON syntax
cat data/projects.json | jq . > /dev/null && echo "Valid JSON" || echo "Invalid JSON"

# Or use online validator
# https://jsonlint.com/
```

#### 6. Commit & Push

```bash
# Create a feature branch
git checkout -b add-project-your-name

# Stage changes
git add data/projects.json public/projects/your-image.jpg

# Commit with descriptive message
git commit -m "Add: [Your Project Name] - Brief description

- Added project screenshot
- Updated projects.json with project details
- Tested locally

Closes #ISSUE_NUMBER"

# Push to your fork
git push origin add-project-your-name
```

#### 7. Create Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill the PR template:
   ```markdown
   ## Description
   Adding my final year project: [Project Name]

   ## Type of Change
   - [x] Add new project
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation

   ## Checklist
   - [x] Followed project JSON structure
   - [x] Added optimized screenshot (<500KB)
   - [x] Tested locally
   - [x] Checked for typos
   - [x] Linked related issue: Closes #123

   ## Screenshots
   [Attach preview of your project card]
   ```

4. Wait for review (usually 1-3 days)
5. Address any feedback
6. Celebrate when merged! 🎉

---

## 🐛 Bug Reports

Found a bug? Help us fix it!

### Before Reporting

1. **Search Existing Issues**: Check if already reported
2. **Update Dependencies**: Run `npm install` to get latest
3. **Clear Cache**: Try `rm -rf .next` then restart dev server
4. **Reproduce**: Ensure it's reproducible

### Bug Report Template

```markdown
**Describe the Bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment**
- OS: [e.g., macOS 14, Windows 11, Ubuntu 22.04]
- Browser: [e.g., Chrome 120, Firefox 121, Safari 17]
- Node Version: [e.g., 18.17.0]
- Package Manager: [e.g., npm 9.8.0]

**Additional Context**
Any other relevant information.
```

[Report a Bug →](https://github.com/avinash201199/final-year-projects-hub/issues/new?template=bug_report.md)

---

## ✨ Feature Requests

Have an idea? We'd love to hear it!

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives you've considered**
Other solutions you've thought about.

**Additional context**
Mockups, examples, or references.

**Implementation Complexity**
- [ ] Simple (few lines of code)
- [ ] Medium (new component/page)
- [ ] Complex (architectural changes)

**Would you like to implement this?**
- [ ] Yes, I can work on this
- [ ] No, just suggesting
```

[Request a Feature →](https://github.com/avinash201199/final-year-projects-hub/issues/new?template=feature_request.md)

---

## 💻 Code Contributions

### Types of Contributions

#### 🎨 UI/UX Improvements
- Design enhancements
- Accessibility improvements
- Responsive design fixes
- Animation and transitions

#### 🔧 Feature Development
- New pages or components
- Enhanced search/filtering
- Performance optimizations
- PWA features

#### 🐛 Bug Fixes
- Fix reported issues
- Edge case handling
- Cross-browser compatibility
- Mobile responsiveness

#### 📚 Documentation
- Improve README
- Add code comments
- Create guides
- Update this file

### Development Workflow

```bash
# 1. Sync with upstream
git checkout main
git pull upstream main

# 2. Create feature branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description

# 3. Make changes
# Edit files, add features, fix bugs

# 4. Test thoroughly
npm run dev
# Test all affected functionality

# 5. Check for errors
npm run build
npm run lint

# 6. Commit with clear message
git add .
git commit -m "feat: Add new search filter

- Implemented category-based filtering
- Added keyboard shortcuts (Cmd+K)
- Updated UI for better UX

Closes #123"

# 7. Push to your fork
git push origin feature/your-feature-name

# 8. Create Pull Request
# Go to GitHub and create PR
```

### Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style (formatting, no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**

```bash
# Good ✅
git commit -m "feat(search): Add fuzzy search with keyboard shortcuts"
git commit -m "fix(ui): Resolve dark mode contrast issue on cards"
git commit -m "docs: Update contribution guidelines"

# Bad ❌
git commit -m "fixed stuff"
git commit -m "updates"
git commit -m "changes"
```

---

## 🔧 Troubleshooting Common Issues

### Issue 1: Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue 2: Next.js Version Conflicts

**Symptom**: Errors mentioning Next.js 14 APIs or deprecated features

**Solution**:
```bash
# This project uses Next.js 15 (App Router)
# Check your version
npm list next

# Should show: next@15.2.4
# If different, update:
npm install next@latest react@latest react-dom@latest
```

### Issue 3: Tailwind CSS Not Working

```bash
# Check Tailwind version (should be 4.x)
npm list tailwindcss

# Restart dev server
npm run dev

# If issue persists, clear Next cache
rm -rf .next
npm run dev
```

### Issue 4: TypeScript Errors

```bash
# Check TypeScript version
npm list typescript

# Should be 5.x
# Generate fresh types
rm -rf .next
npm run dev
```

### Issue 5: Image Not Loading

**Check:**
1. File path is correct: `/projects/your-image.jpg`
2. File exists in `public/projects/`
3. File size < 500KB
4. File format is JPG, PNG, or WebP
5. No special characters in filename

### Issue 6: Build Fails

```bash
# Check for JSON syntax errors
cat data/projects.json | jq .

# Check for TypeScript errors
npx tsc --noEmit

# Run build locally
npm run build
```

### Issue 7: Port Already in Use

```bash
# Kill process on port 3000
# macOS/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
npm run dev -- -p 3001
```

### Getting Help

If you're stuck:

1. **Check Existing Issues**: Someone might have had the same problem
2. **Ask in Discussions**: [GitHub Discussions](https://github.com/avinash201199/final-year-projects-hub/discussions)
3. **Create an Issue**: Provide details about your environment and error

---

## 📋 Pull Request Guidelines

### Before Submitting

- [ ] Code follows project style guide
- [ ] All tests pass (when applicable)
- [ ] No console errors or warnings
- [ ] Tested on Chrome, Firefox, and Safari
- [ ] Tested on mobile viewport
- [ ] Dark mode works correctly
- [ ] Images are optimized
- [ ] JSON is valid (if modified)
- [ ] TypeScript has no errors
- [ ] Build succeeds locally

### PR Checklist

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] 📁 Project addition
- [ ] 🐛 Bug fix
- [ ] ✨ New feature
- [ ] 📖 Documentation update
- [ ] 🎨 UI/UX improvement
- [ ] ♿ Accessibility improvement
- [ ] ⚡ Performance improvement

## Related Issues
Closes #(issue number)

## Testing
How has this been tested?

## Screenshots (if applicable)
Before | After

## Checklist
- [ ] Tested locally
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] Dark mode works
- [ ] Follows code style
- [ ] Updated documentation (if needed)
```

### Review Process

1. **Automated Checks**: CI/CD runs automatically
2. **Code Review**: Maintainer reviews within 1-3 days
3. **Feedback**: Address any comments or requests
4. **Approval**: PR approved by maintainer
5. **Merge**: Changes merged to main branch
6. **Deploy**: Automatically deployed to production

### PR Etiquette

✅ **DO:**
- Keep PRs focused and small
- Respond to feedback promptly
- Be patient and respectful
- Test thoroughly before submitting
- Update your PR if main changes

❌ **DON'T:**
- Submit multiple unrelated changes
- Make changes after approval
- Close and reopen the same PR
- Spam with comments
- Take feedback personally

---

## 🎨 Code Style Guide

### TypeScript/React

```typescript
// ✅ Good: Use function components with TypeScript
interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return <div>{project.title}</div>
}

// ❌ Bad: Avoid default exports (except for pages)
export default function ProjectCard(props) {
  return <div>{props.project.title}</div>
}
```

### Naming Conventions

```typescript
// Components: PascalCase
ProjectCard.tsx
SearchFilter.tsx

// Utilities: camelCase
formatDate.ts
calculateScore.ts

// Constants: UPPER_SNAKE_CASE
export const MAX_PROJECTS = 100
export const DEFAULT_CATEGORY = "all"

// Types/Interfaces: PascalCase
interface Project { }
type ProjectCategory = string
```

### File Organization

```typescript
// Import order:
// 1. React/Next
// 2. External libraries
// 3. Internal components
// 4. Utils/hooks
// 5. Types
// 6. Styles

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { formatDate } from "@/lib/utils"
import type { Project } from "@/types"
```

### Component Structure

```typescript
// 1. Imports
// 2. Types/Interfaces
// 3. Component
// 4. Styles (if any)

import { useState } from "react"

interface Props {
  title: string
}

export function MyComponent({ title }: Props) {
  // 1. Hooks
  const [state, setState] = useState("")

  // 2. Computed values
  const computed = useMemo(() => {}, [])

  // 3. Event handlers
  const handleClick = () => {}

  // 4. Effects
  useEffect(() => {}, [])

  // 5. Render
  return <div>{title}</div>
}
```

### Tailwind CSS

```tsx
// ✅ Good: Use semantic class ordering
<div className="flex items-center justify-between w-full h-16 px-4 bg-background text-foreground border-b border-border">

// ✅ Good: Use theme variables
<div className="bg-card text-card-foreground">

// ❌ Bad: Hardcoded colors
<div className="bg-white text-black dark:bg-slate-900 dark:text-white">

// ✅ Good: Responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// ✅ Good: Extract repeated classes to components
```

### Comments

```typescript
// ✅ Good: Explain WHY, not WHAT
// Debounce search to prevent excessive API calls
const debouncedSearch = useMemo(() => debounce(search, 300), [])

// ❌ Bad: Obvious comments
// Set state to true
setState(true)

// ✅ Good: Document complex logic
/**
 * Calculates project relevance score based on:
 * - Title match (3 points)
 * - Description match (2 points)
 * - Tech stack match (1 point)
 */
function calculateRelevance(project: Project, query: string): number {
  // Implementation
}
```

---

## 🧪 Testing Guidelines

### Manual Testing Checklist

Before submitting a PR, test these scenarios:

#### Functionality
- [ ] Homepage loads without errors
- [ ] Projects display correctly
- [ ] Search works (try various queries)
- [ ] Category filtering works
- [ ] Project detail pages load
- [ ] All links navigate correctly
- [ ] Images load properly

#### Responsiveness
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Mobile landscape

#### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

#### Accessibility
- [ ] Keyboard navigation works
- [ ] Tab order is logical
- [ ] Focus indicators visible
- [ ] Images have alt text
- [ ] Sufficient color contrast

#### Theme
- [ ] Light mode displays correctly
- [ ] Dark mode displays correctly
- [ ] Theme toggle works
- [ ] Theme persists on reload

### Future: Automated Testing

We plan to add:
- Unit tests with Jest
- Component tests with React Testing Library
- E2E tests with Playwright
- Visual regression tests

---

## 📚 Documentation

### Improving Documentation

Documentation is as important as code! Help us by:

- **Fixing Typos**: Even small fixes matter
- **Clarifying Instructions**: Make things clearer
- **Adding Examples**: Show don't tell
- **Updating Guides**: Keep docs current
- **Adding Diagrams**: Visual aids help
- **Translating**: Help non-English speakers

### Documentation Standards

```markdown
# Use clear hierarchical headings

## Add descriptive section titles

### Include code examples

```bash
# Always add comments to bash commands
npm install  # Install dependencies
```

**Use formatting for emphasis**

> Use blockquotes for important notes

- Use bullet points for lists
- Keep points concise
- Be consistent

| Use | Tables |
|-----|--------|
| For | Structured data |
```

---

## 🌟 Recognition

### Contributors Wall of Fame

All contributors are automatically added to:
- [Contributors graph](https://github.com/avinash201199/final-year-projects-hub/graphs/contributors)
- Project README
- Release notes (for significant contributions)

### Contribution Levels

| Level | Contributions | Recognition |
|-------|---------------|-------------|
| 🌱 **Seedling** | 1-3 PRs | Contributor badge |
| 🌿 **Growing** | 4-10 PRs | Special mention in README |
| 🌳 **Established** | 11-25 PRs | Maintainer consideration |
| 🏆 **Core** | 25+ PRs | Core contributor status |

---

## 📞 Get Help

<div align="center">

### Need Assistance?

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/avinash201199/final-year-projects-hub/issues)
[![Discussions](https://img.shields.io/badge/GitHub-Discussions-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/avinash201199/final-year-projects-hub/discussions)
[![Email](https://img.shields.io/badge/Email-letscode%40lets--code.co.in-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:letscode@lets-code.co.in)

**Response Time**: Usually within 24-48 hours

</div>

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

<div align="center">

### Thank You! 🙏

**Your contributions make this project better for everyone.**

[![Contributors](https://contrib.rocks/image?repo=avinash201199/final-year-projects-hub)](https://github.com/avinash201199/final-year-projects-hub/graphs/contributors)

**Happy Contributing!** 🚀

</div>
