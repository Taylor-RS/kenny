# AGENTS.md - Project Guidelines

## Project Overview
Simple Portuguese portfolio website for Keany Pessula using pure HTML/CSS/JavaScript (no build tools).

## Commands
- **Run**: Open `index.html` in a browser (no build step required)
- **Lint/Test**: No automated testing configured

## Architecture
- Single-page application with smooth scrolling navigation
- All styles embedded in `<style>` tag in index.html (external styles.css appears unused/duplicate)
- Vanilla JavaScript for interactions (sidebar, popup, dark mode, scroll reveal)

## Code Style
- **Language**: Portuguese for content, English for code
- **CSS**: Inline styles in index.html; shorthand properties preferred; color scheme: #003366 (blue), #ffcc00 (yellow), #111 (dark)
- **Naming**: kebab-case for IDs (#openMenu, #darkToggle); camelCase for JS variables
- **Fonts**: Poppins (Google Fonts) + Font Awesome icons
- **Responsive**: Uses viewport meta tag; grid/flexbox for layouts
- **Animations**: CSS keyframes for fadeIn, float, slide; IntersectionObserver for scroll reveals

## Notes
- Profile and gallery images have empty src attributes - need to be populated
- Form has no backend submission handler
- Dark mode toggle changes body class but limited theme support in styles.css
