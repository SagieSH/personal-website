# CLAUDE.md

Sagie's personal website: Vite + React + TypeScript, deployed to GitHub Pages at https://sagiesh.github.io/personal-website/.

## Commands

Run everything through [Task](https://taskfile.dev) (`task --list`), not `npm`/`npx` directly. Add new recurring commands to `Taskfile.yml`. If `task` is missing, use `npx -y @go-task/cli <task>`.

`task check` is the gate: it runs the same checks as CI. Fix lint failures rather than disabling the rules; they encode the project's conventions.

## Things that aren't obvious

- Pushing to `main` deploys to production.
- The site is served from `/personal-website/` (`base` in `vite.config.ts`). Never use root-absolute asset paths like `/img.png`.
- Page sections are registered in `src/sections/index.ts`; the nav, hero cards and page body all render from that list.
- Styling is Tailwind CSS v4 utilities in `className`; no CSS Modules, no `style` prop (both are lint errors). `src/index.css` holds only the Tailwind import, color tokens (`@theme`) and element-level base styles. Tailwind's default palette is disabled, so colors come only from those tokens (`bg-page`, `text-muted`, `border-line`, ...). See the `tailwind-v4` skill in `.claude/skills/`.
