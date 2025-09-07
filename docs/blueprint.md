# Ohida's Canvas - Project Blueprint

## 1. Core Features

This document outlines the features and technical implementation of the Chromatic Canvas portfolio website for Khandakar Ohida.

### 1.1. Main Page Sections
The single-page homepage is divided into the following sections, accessible via the main header and a floating bottom navigation bar:
- **Hero**: Introduces the artist with a tagline and a prominent profile picture.
- **About**: A brief biography and artist statement.
- **Studio**: A description of the artist's creative space and process.
- **Work**: A filterable gallery of featured projects and artworks.
- **Press**: A collection of press mentions and recognitions.
- **Education**: A timeline of academic and professional qualifications.
- **Hobbies**: A visual grid of personal interests.
- **Events**: A filterable list of past and upcoming exhibitions and talks.
- **Public Profiles**: Links to official profiles on institutional websites.
- **Contact**: A contact form and social media links.

### 1.2. Life Journey Page
- A dedicated, separate page (`/journey`) that presents the artist's career milestones in a vertical timeline format.
- Features a unique, simplified bottom navigation with controls to **Return**, **Toggle Sort Order**, and scroll to the **Top/Bottom**.
- Accessed via a prominent button on the hero section and links in the navigation bars.

### 1.3. Interactive & UX Features
- **Page Transitions**: Implemented smooth, animated transitions between the main page and the journey page. The journey page slides in from the right, and slides back out to the right when returning.
- **Scroll Animations**: Sections and elements animate into view (fade and slide up) as the user scrolls, creating a dynamic browsing experience.
- **Filter & Search**: The "Work" and "Events" sections include a search bar that filters the content in real-time, with search terms highlighted in the results.
- **Image Lightbox**: Clicking on an image in the "Work" or "Press" sections opens it in a full-screen, animated lightbox viewer. The lightbox can be closed with an 'X' button, a "Back" button at the bottom, or by pressing the Escape key.
- **Responsive Design**: The layout is fully responsive, with dedicated mobile-friendly navigation, including a slide-out menu and a horizontal scrolling view for gallery sections.
- **Dark/Light Mode**: A theme toggle allows users to switch between dark and light modes, with the preference saved.

## 2. Technical Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 3. Component Structure

The application is built with a modular component architecture located in `src/components`.

- **Layout Components**: `header.tsx`, `footer.tsx`, `bottom-nav.tsx`, `page-transition.tsx`
- **Page Sections**: `hero.tsx`, `about.tsx`, `work.tsx`, `events.tsx`, etc.
- **UI Elements**: `lightbox.tsx`, `scroll-animator.tsx`, `horizontal-scroll.tsx`, and various UI components from ShadCN in `src/components/ui`.
- **Data**: All text and image content is centralized in `src/lib/data.ts` for easy management.
- **State Management**: Primarily uses React hooks (`useState`, `useEffect`). Page-level state is managed in the respective page components (e.g., `journey/page.tsx`).
- **Navigation**:
  - `header.tsx`: Standard top navigation bar with a hamburger menu on mobile.
  - `bottom-nav.tsx`: Floating navigation bar on the main page.
  - `journey-bottom-nav.tsx`: A specialized navigation bar for the journey page.
