# CLAUDE.md

Sagie's personal website: Vite + React + TypeScript, deployed to GitHub Pages at https://sagiesh.github.io/personal-website/.

## Commands

Run everything through [Task](https://taskfile.dev) (`task --list`), not `npm`/`npx` directly. Add new recurring commands to `Taskfile.yml`. If `task` is missing, use `npx -y @go-task/cli <task>`.

`task check` is the gate: it runs the same checks as CI. Fix lint failures rather than disabling the rules; they encode the project's conventions.

## Things that aren't obvious

- Pushing to `main` deploys to production.
- The site is served from `/personal-website/` (`base` in `vite.config.ts`). Never use root-absolute asset paths like `/img.png`.
- Page sections are registered in `src/sections/index.ts`; the nav, hero cards and page body all render from that list.
- UI and styling are [Mantine](https://mantine.dev) only. Load the `mantine` skill in `.claude/skills/` before any UI work. Keep CSS files to a minimum: style with Mantine components and style props, put tokens and shared defaults in `src/theme.ts`, and only when props can't express it (hover, transitions), use a `Foo.module.css` next to `Foo.tsx`. `src/index.css` is global element styles only. No `style`/`styles` props. `task lint` enforces all of this (`scripts/checkStyles.mjs`, oxlint, stylelint).
- Tests render through `render` from `src/testUtils.tsx` so components get `MantineProvider`.
