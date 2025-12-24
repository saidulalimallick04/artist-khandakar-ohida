# Ohida's Canvas - A Portfolio for Khandakar Ohida

This is a personal portfolio website for the visual artist and filmmaker, Khandakar Ohida. Built with a modern tech stack, it showcases her work, journey, and artistic practice in a clean, interactive, and visually engaging single-page application, with a dedicated page for her life journey.

## Features

- **Dynamic Single-Page Layout**: A seamless, scrollable main page with distinct sections for Hero, About, Studio, Work, Press, Education, Hobbies, Events, and Contact information.
- **Interactive "Life Journey" Page**: A dedicated route (`/journey`) that presents the artist's career milestones in a vertical timeline format, complete with sorting controls.
- **Smooth Page Transitions**: Fluid, animated transitions between the main page and the journey page, enhancing the user experience.
- **Engaging Animations**: Subtle scroll-triggered animations and hover effects that bring the content to life.
- **Filterable Content**: The "Work" and "Events" sections feature real-time search functionality to easily filter through projects and engagements.
- **Image Lightbox**: A full-screen, animated lightbox viewer for a closer look at artworks and press features.
- **Responsive Design**: A fully responsive and mobile-first design, ensuring a great experience on all devices, complete with a slide-out mobile menu.
- **Theme Toggle**: A dark/light mode switcher that respects user preference and saves the choice.
- **Centralized Data Management**: All text and image content is managed in a central `src/lib/data.ts` file for easy updates.

## Technical Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN/UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18 or later) and `npm` installed on your computer.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/saidulalimallick04/artist-khandakar-ohida
    cd artist-khandakar-ohida
    ```

2.  **Install dependencies:**
    This command will install all the necessary packages defined in `package.json`.
    ```bash
    npm install
    ```

3.  **Run the development server:**
    This will start the application in development mode.
    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Project Structure

The project is organized with a page-centric approach for components and data to ensure clean, maintainable code.

```
.
├── public/               # Static assets (images, fonts, etc.)
├── src/
│   ├── app/                # Next.js App Router: main application routes (pages)
│   │   ├── journey/        # Contains the /journey page route
│   │   │   └── page.tsx
│   │   ├── studio/         # Contains the /studio page route
│   │   │   └── page.tsx
│   │   ├── layout.tsx      # Root layout for the entire application
│   │   └── page.tsx        # The main homepage route (/)
│   │
│   ├── components/         # Reusable React components
│   │   ├── home/           # Components used only on the homepage (e.g., about.tsx)
│   │   ├── journey/        # Components used on the journey page (e.g., journey-timeline.tsx)
│   │   ├── studio/         # Components used on the studio page (e.g., studio-hero.tsx)
│   │   └── ui/             # Core UI components from ShadCN (e.g., button.tsx, card.tsx)
│   │
│   ├── hooks/              # Custom React hooks
│   │   └── use-mobile.ts   # Hook to detect if the user is on a mobile device
│   │
│   └── lib/                # Library files: data, utilities, and helper functions
│       ├── data/           # Centralized content and data for the site
│       │   ├── home/       # Data for homepage sections (e.g., about.ts, work.ts)
│       │   ├── journey/    # Data for the journey page
│       │   ├── studio/     # Data for the studio page
│       │   └── index.ts    # Barrel file to export all data
│       └── utils.ts        # Utility functions (e.g., cn for classnames)
│
└── ...                   # Other configuration files (tailwind.config.ts, next.config.ts, etc.)
```

## Customization

All the text, images, and data points for the portfolio sections are centralized in their respective folders within `src/lib/data`. To customize the content of the website, you can directly edit the data objects in these files. The application will automatically reflect the changes.

---
---

## 👨‍💻 Author

| Profile | Developer Name | Role | GitHub | LinkedIn | X |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [![Sami](https://github.com/saidulalimallick04.png?size=75)](https://github.com/saidulalimallick04) | Saidul Ali Mallick (Sami) | Backend Developer & AIML Engineer & Team Lead | [@saidulalimallick04](https://github.com/saidulalimallick04) | [@saidulalimallick04](https://linkedin.com/in/saidulalimallick04) | [@saidulmallick04](https://x.com/saidulmallick04) |

> ❤️ I believe in building impact, not just writing code.
> *💚 Backend Sage signing off..*
---
---
