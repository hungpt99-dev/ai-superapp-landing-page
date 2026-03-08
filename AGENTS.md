## Purpose

This file defines how AI coding agents should work when contributing to the landing page of this repository.

It contains rules for starting tasks and general coding guidelines specific to the landing page codebase.

---

# Starting a Task

When beginning any task, the AI agent must follow these steps:

1. Read all relevant documentation in the repository.
2. Understand the context and requirements of the task.
3. Identify the files that need to be modified or created.
4. Review related code to understand existing patterns and structure.
5. Plan the code changes before writing any code.

Do not start coding until these steps are completed.

---

# Tech Stack

The landing page is built with the following technologies:

* **Framework**: React 18
* **Build Tool**: Vite
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **Routing**: React Router DOM
* **Icons**: Lucide React

---

# Coding Principles

* Write clear, readable, and maintainable code.
* Prefer simple solutions over complex ones.
* Avoid duplicating logic — extract shared logic into components or utilities.
* Use descriptive names for variables, functions, and components.
* Keep components small and focused on a single responsibility.
* Prefer functional components and React hooks over class components.

---

# Code Consistency

* Follow the coding style already used in the project.
* Maintain consistency with existing naming conventions.
* Use `PascalCase` for components, `camelCase` for variables and functions.
* Keep new code aligned with the existing folder and module structure.
* Use TypeScript types and interfaces — avoid `any`.

---

# Folder Structure

Follow this structure when adding new code:

```
landing-page/
  src/
    components/       Reusable section and UI components
    pages/            Full page components routed via React Router
    index.css         Global styles
    main.tsx          App entry point
    App.tsx           Root component with routing
  index.html          HTML entry point
```

---

# File Changes

* Only modify files necessary for the task.
* Avoid large or unnecessary changes to unrelated code.
* Do not restructure the project unless explicitly required.

---

# Component Guidelines

* Each component file should export a single default component.
* Extract repeated JSX patterns into separate components.
* Use props interfaces with explicit TypeScript types.
* Avoid inline styles — use Tailwind CSS utility classes.
* Keep section components self-contained and independently renderable.

---

# Styling

* Use Tailwind CSS utility classes exclusively — do not write custom CSS unless unavoidable.
* Follow the responsive design patterns already established in the codebase.
* Maintain visual consistency with existing sections in terms of spacing, typography, and colour.
* Use `sm:`, `md:`, `lg:` breakpoints consistently with the rest of the page.

---

# Routing

* All page-level routes are managed in `App.tsx` via React Router DOM.
* Add new routes in `App.tsx` when creating new full pages.
* For documentation pages, follow the existing `DocsLayout` + nested route pattern in `pages/docs/`.

---

# Error Handling

* Handle any async operations (e.g. form submissions) with try/catch.
* Display meaningful feedback to users on failure.
* Avoid crashing the page on non-critical errors.

---

# Security

* Never expose API keys, tokens, or secrets in frontend code.
* Do not commit `.env` files.
* Sanitise any user-generated content before rendering.

---

# Accessibility

* Use semantic HTML elements (`nav`, `main`, `section`, `button`, etc.).
* Include `alt` text on all images.
* Ensure interactive elements are keyboard-navigable.
* Use ARIA attributes when semantic HTML is insufficient.

---

# Code Quality

* Write modular and reusable components.
* Avoid unnecessary third-party dependencies.
* Ensure code remains easy to maintain and extend.
* Run the build before submitting changes (`npm run build`).

---

# Comments

* Use comments when they help explain complex logic or non-obvious decisions.
* Avoid redundant or obvious comments.

---

# Testing Awareness

* Ensure new code does not break existing functionality.
* Manually verify new sections render correctly at all major breakpoints.
* Check that routing changes do not break existing navigation links.
