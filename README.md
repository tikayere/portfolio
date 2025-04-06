# Portfolio Website

A modern, responsive portfolio built with **Next.js (App Router)**, **Shadcn UI**, and **Framer Motion**. This is a generic portfolio website that is generic enough. I needed to make one to showcase my skills and list projects I will be working on to boost my portfolio, of course.

## Features

- **Home Page**: Hero section with a featured projects grid.
- **About Page**: Bio and skills showcase with animated transitions.
- **Projects Page**: Filterable project grid with detailed views for each project.
- **Contact Page**: Functional contact form with server-side handling.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Dark/Light Mode**: Toggleable theme with persistent user preference.
- **Animations**: Smooth transitions and hover effects powered by Framer Motion.
- **SEO Ready**: Dynamic metadata for each page.
- **Extensible**: Data-driven content via `lib/data.ts` for easy updates.

## Tech Stack

- **Framework**: Next.js (App Router) with TypeScript
- **UI Library**: Shadcn UI (Tailwind CSS-based components)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: Next.js API Routes
- **Deployment**: Ready for Vercel (or any Node.js host)

## Project Structure

```
portfolio/
├── public/              # Static assets
│   ├── images/         # Project images (e.g., portfolio.jpg)
│   └── favicon.ico
├── app/                # App Router pages
│   ├── layout.tsx      # Root layout with Navbar, Footer, ThemeToggle
│   ├── page.tsx        # Home page
│   ├── about/          # About page
│   ├── projects/       # Projects page
│   │   └── [id]/       # Dynamic project detail page
│   ├── contact/        # Contact page
│   └── api/            # API routes
│       └── contact/    # Contact form handler
├── components/         # Reusable components
│   ├── ui/            # Shadcn UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   └── ThemeToggle.tsx
├── lib/               # Utilities and data
│   └── data.ts        # Projects and skills data
├── types/             # TypeScript types
│   └── index.ts       # Project type definition
├── styles/            # Global CSS
│   └── globals.css
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind configuration
├── tsconfig.json      # TypeScript configuration
└── package.json
```

## Installation

1. **Clone the Repository**:
```bash
git clone https://github.com/tikayere/portfolio.git
cd portfolio
```

2. **Install Dependencies**:
```bash
pnpm add
```

3. **Run the Development Server**:
```bash
pnpm run dev
```
Open `http://localhost:3000` in your browser.

## Usage

- **Home**: View the hero section and featured projects at `/`.
- **About**: Learn about me and my skills at `/about`.
- **Projects**: Browse all projects at `/projects` or view details at `/projects/[id]`.
- **Contact**: Send a message via `/contact` (requires email setup for full functionality).

## Customization

1. **Update Personal Details**:
   - Edit `lib/data.ts` to add your projects, skills, and images.
   - Replace placeholder content (e.g., `[Your Name]`) in components.

2. **Add Images**:
   - Place project images in `public/images/` (e.g., `portfolio.jpg`).
   - Update `lib/data.ts` with corresponding paths.

3. **Configure Contact Form**:
   - Edit `app/api/contact/route.ts` to integrate an email service (e.g., Nodemailer):
```bash
npm install nodemailer
```
   - Add environment variables in `.env.local`:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

4. **Deploy**:
   - Deploy to Vercel:
```bash
vercel
```
   - Or build and run locally:
```bash
npm run build
npm start
```

## Project Data

Projects are stored in `lib/data.ts` with the following type:

```tsx
export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  category: string;
  image?: string;
  github?: string;
  techStack?: string[];
  details?: string;
  features?: string[];
}
```

Example:
```tsx
{
  id: 1,
  title: "Portfolio Website",
  description: "A personal portfolio built with Next.js.",
  link: "https://example.com/portfolio",
  category: "Web",
  image: "/images/portfolio.jpg",
  github: "https://github.com/yourusername/portfolio",
  techStack: ["Next.js", "TypeScript", "Shadcn UI"],
  details: "<p>This is my portfolio.</p>",
  features: ["Responsive", "Animated"],
}
```

## Contributing

Feel free to fork this repository and submit pull requests with improvements or suggestions!

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

## Acknowledgments

- Built with inspiration from the Next.js and Shadcn UI communities.
- Thanks to Framer Motion for awesome animations.

---

### Customization Notes
- **Replace `yourusername`**: Update GitHub links and the clone URL with your actual GitHub username.
- **Add Your Name**: Replace `[Your Name]` placeholders (e.g., in metadata or page content).
- **Deployment Link**: Add a live URL after deploying (e.g., `https://yourportfolio.vercel.app`).
- **License File**: If you want to include a license, create a `LICENSE` file in the root with the MIT License text.

