# 👩💻 Khushbu Raut - Personal Portfolio

A modern, responsive, and visually attractive personal portfolio website built for **Khushbu Raut**, a 3rd-year B.Tech Computer Science & Engineering student and aspiring Data Analyst + Web Developer.

This application is built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**, implementing a sleek dark theme, glassmorphic layout panels, dynamic typewriter headlines, and modular components.

---

## 🚀 Live Demo & Visuals

- **Theme**: Premium dark mode (deep slate / dark grey background).
- **Aesthetic**: Glassmorphism cards with smooth border glows, custom scrollbars, and ambient glowing backdrops.
- **Accents**: Neon Cyan (representing Web Dev) and Emerald Green (representing Data Analytics).
- **Responsive**: Optimised layout grids for Mobile, Tablet, Laptop, and Ultra-Wide Desktops.

---

## 🛠️ Technology Stack

* **Frontend**: React (Functional Components, hooks)
* **Build System**: Vite (highly optimized hot-module reloading and tree-shaking)
* **Styling**: Tailwind CSS v3 (Custom themes, gradients, and float animations)
* **Icons**: Lucide React (vector-based, high-performance icon sets)

---

## 📁 Folder Structure

```text
Khushbu Raut Portfolio/
├── public/
│   └── favicon.svg         # Tab browser icon
├── src/
│   ├── components/         # Reusable UI sections
│   │   ├── Navbar.jsx      # Glassmorphic responsive top navigation
│   │   ├── Hero.jsx        # Landing hero with typewriter animations and ambient blobs
│   │   ├── About.jsx       # Bio overview, quick academic stats, and B.Tech timeline
│   │   ├── Skills.jsx      # Dynamic categorized technical skill cards
│   │   ├── Projects.jsx    # Projects filtering workspace (Web Dev, Data, AI)
│   │   ├── Experience.jsx  # Internship details card
│   │   ├── Achievements.jsx# LeetCode statistics display, certifications list
│   │   ├── Contact.jsx     # Interactive contact form and social networks
│   │   └── Footer.jsx      # Page attribution credit
│   ├── data/
│   │   └── portfolioData.js# CENTRALIZED DATA FILE (Edit details here!)
│   ├── App.jsx             # Main orchestrator wrapping all sections
│   ├── index.css           # Global tailwind rules, scrolls, and glass overlays
│   └── main.jsx            # Application entry mount point
├── package.json            # Scripts, dependencies, and packages
├── postcss.config.js       # Preprocessing configurations
├── tailwind.config.js      # Custom theme palettes, animations, and typography
├── vite.config.js          # Vite configurations
└── README.md               # User guide (This document)
```

---

## ⚙️ Installation & Running Locally

Follow these quick commands to load and spin up the developer server in VS Code:

### 1. Prerequisite
Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed. You can check this by running:
```bash
node -v
npm -v
```

### 2. Install Project Dependencies
Run this command in the project root directory:
```bash
npm install
```

### 3. Start Development Server
Boot up the fast reloading hot server:
```bash
npm run dev
```
Once started, copy the local URL (usually `http://localhost:5173`) and open it in your browser.

### 4. Build for Production
To compile and bundle the files into static assets:
```bash
npm run build
```
This generates a highly compressed, production-ready `dist` folder.

---

## 🎨 How to Customize Your Portfolio

You **do not** need to write or edit complex JSX code to update your profile. All content is managed in a single file: `src/data/portfolioData.js`.

Open [src/data/portfolioData.js](file:///c:/Users/khushbu/OneDrive/Desktop/Khushbu%20Raut%20Portfolio/src/data/portfolioData.js) and make your modifications:

### 1. Update Contact Information & Socials
```javascript
personalInfo: {
  name: "Khushbu Raut",
  headline: "Aspiring Data Analyst | Web Developer",
  email: "khushburaut@example.com",             // Change to your actual email
  linkedin: "https://linkedin.com/in/yourname",  // Replace placeholder URL
  github: "https://github.com/khushburaut",
  leetcode: "https://leetcode.com/u/Khushburaut/",
}
```

### 2. Edit LeetCode & Certifications
To update your LeetCode metrics and certification titles:
- In the `achievements.coding.stats` section, edit `solved: "100+"` to your current solved count.
- In `achievements.items`, modify titles, descriptions, and badges to match your credentials.

### 3. Add or Modify Projects
Simply copy an object inside the `projects` array and edit the parameters:
```javascript
{
  id: 5,
  title: "Your New Project Title",
  category: "Web Development", // Or "Data Analytics"
  isAI: true,                  // Adds a beautiful glow 'AI-Powered' tag
  description: "Short details...",
  features: ["Bullet feature 1", "Bullet feature 2"],
  technologies: ["React", "SQL", "Python"],
  github: "https://github.com/...",
  demo: "https://...",
  imageUrl: "Unsplash image address or local asset path"
}
```

### 4. Setup Contact Form to Receive Real Emails (Formspree)
The contact form is styled and validated in `src/components/Contact.jsx`. To receive submissions directly in your email:
1. Create a free account at [Formspree](https://formspree.io/).
2. Create a new form and copy the endpoint URL (e.g., `https://formspree.io/f/xzypqyzy`).
3. In `src/components/Contact.jsx`, find the form tag and replace the submit logic, or simply adjust the action target to your endpoint.

---

## ⚡ Deployment to Vercel

Vercel is the most efficient platform to host Vite React applications for free. Follow these steps:

### Option A: Deployment via Vercel CLI (Super Fast)
1. In your project terminal, install the Vercel CLI tool:
   ```bash
   npm install -g vercel
   ```
2. Run the deployment wizard:
   ```bash
   vercel
   ```
3. Log in when prompted, set the project name (e.g. `khushbu-raut-portfolio`), and choose **Yes** to all default configuration suggestions. Vercel will automatically detect **Vite** and configure the build settings.
4. Once completed, run the final production release:
   ```bash
   vercel --prod
   ```

### Option B: Deployment via GitHub (Recommended for automatic updates)
1. Push your local workspace directory to a new **GitHub Repository**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of developer portfolio"
   # Create a repo on github.com and link it:
   git remote add origin https://github.com/khushburaut/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com/) and click **"Add New"** > **"Project"**.
3. Import your newly created repository.
4. Keep all Build and Output Settings as default (Vercel auto-configures Vite).
5. Click **"Deploy"**. Any changes you push to your GitHub `main` branch will automatically trigger a rebuild and deploy!
