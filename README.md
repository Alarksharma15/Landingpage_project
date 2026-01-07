# Lumina SEO Landing Page

![Project Banner](https://img.shields.io/badge/Status-Production%20Ready-success) ![License](https://img.shields.io/badge/License-MIT-blue) ![Next.js](https://img.shields.io/badge/Next.js-15.0-black) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-cyan)

A high-performance, visually stunning landing page for **Lumina SEO**, a next-generation SaaS analytics platform. Built with a focus on "Premium Dark" aesthetics, fluid animations, and modern web technologies.

## ✨ Key Features

*   **Premium Dark Aesthetic**: cohesive color palette with deep purples, glassmorphism, and noise textures.
*   **Fluid Animations**: Powered by **Framer Motion** for scroll reveals, 3D tilts, and hover effects.
*   **Smooth Scrolling**: **Lenis** integration for a buttery-smooth inertial scroll experience.
*   **Interactive Components**:
    *   **Magnetic Buttons**: Buttons that pull towards your cursor using spring physics.
    *   **Spotlight Cards**: Bento grid items with mouse-tracking gradient borders.
    *   **Infinite Marquee**: "Trusted By" section with seamless scrolling logos.
    *   **Deep Dive Analytics**: High-fidelity data visualization mockups (Backlink analysis, Keyword tables).
*   **Modern Tech Stack**: Built on Next.js 15 (App Router) and Tailwind CSS v4.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Scrolling**: [Lenis](https://lenis.studio/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Fonts**: `Outfit` (Display), `Inter` (Body), `JetBrains Mono` (Code)

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Alarksharma15/Landingpage_project.git
    cd Landingpage_project
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router root
│   ├── globals.css       # Tailwind v4 configuration & base styles
│   └── layout.tsx        # Root layout with SmoothScroller
├── components/
│   ├── sections/         # Page sections (Hero, Bento, FAQ, etc.)
│   ├── ui/               # Reusable UI primitives (GlassContainer, Buttons)
│   └── utils/            # Utilities (SmoothScroller)
└── lib/                  # Helper functions (cn, etc.)
```

## 🎨 Design Systems

The project uses a custom Tailwind v4 theme configuration defined in `globals.css`:
*   **Colors**: Custom `primary` (Deep Violet) and `secondary` (Electric Blue) palette.
*   **Utilities**: Custom `.glass-card`, `.text-gradient`, and `.bg-noise` classes.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
