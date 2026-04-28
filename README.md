# Vaishnavi Deshpande — Portfolio

A clean, component-based portfolio built with **React + Vite + Tailwind CSS**.

## ✨ Features
- 🌗 Manual dark / light theme toggle (persisted in localStorage)
- 🎯 Scroll-spy active nav links
- 🎞 Fade-in animations on scroll (IntersectionObserver)
- 📱 Fully responsive — mobile hamburger menu
- 🗂 Single source of truth — all content in `src/data/portfolio.js`
- 🧩 Component-based — every section is its own file

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx        # Sticky nav with scroll-spy + theme toggle
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx    # Timeline layout
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── ui/
│   │   ├── ThemeToggle.jsx   # Sun / moon icon button
│   │   ├── Tag.jsx           # Reusable coloured pill
│   │   ├── SectionLabel.jsx  # Small uppercase label
│   │   └── FadeIn.jsx        # Scroll-triggered fade wrapper
│   └── index.js              # Barrel exports
├── context/
│   └── ThemeContext.jsx      # Dark/light mode state + toggle
├── data/
│   └── portfolio.js          # ← Edit all your content here
├── hooks/
│   ├── useScrollSpy.js       # Active section detection
│   └── useInView.js          # Intersection observer for animations
├── App.jsx
├── main.jsx
└── index.css                 # Tailwind + CSS custom properties
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✏️ Updating Content

All portfolio content lives in **`src/data/portfolio.js`**.
Edit that file to update:
- Nav links
- Stats
- Skills & categories
- Work experience
- Education
- Projects (add GitHub/live links)
- Testimonials

## 🎨 Theming

Colors are defined in `tailwind.config.js` under `theme.extend.colors`.
Light/dark CSS variables are in `src/index.css` under `:root` and `.dark`.

## 🌐 Deployment

### GitHub Pages
```bash
npm run build
# Push the dist/ folder to gh-pages branch
```

### Netlify
Drag and drop the `dist/` folder at netlify.com/drop

### Vercel
```bash
npm i -g vercel
vercel
```
