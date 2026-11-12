# CLAUDE.md

Personal website for Sagie, built with Vite + React 19 + TypeScript. It's a static single-page site deployed to GitHub Pages at https://sagiesh.github.io/personal-website/.

## Commands: use the Taskfile

**Always run project commands through [Task](https://taskfile.dev) (`task <name>`), not raw `npm`/`npx`.** `Taskfile.yml` is the source of truth for how to run things. If you need a new recurring command, add it to the Taskfile rather than running it ad hoc.

| Command          | What it does                              |
| ---------------- | ----------------------------------------- |
| `task`           | List all tasks                            |
| `task install`   | `npm install` (skipped if up to date)     |
| `task dev`       | Start the Vite dev server                 |
| `task lint`      | Lint with oxlint                          |
| `task typecheck` | `tsc -b` type-check only                  |
| `task build`     | Type-check and build to `dist/`           |
| `task preview`   | Build, then serve `dist/` locally         |
| `task check`     | Lint + build — run before committing      |
| `task clean`     | Remove `dist/`                            |

If `task` isn't installed, install it (`npm i -g @go-task/cli`, `brew install go-task`, or `sh -c "$(curl -sL https://taskfile.dev/install.sh)" -- -d -b ~/.local/bin`). As a last resort `npx -y @go-task/cli <name>` works without installing.

## Layout

- `src/App.tsx`: the whole page. Sections (currently **Life** and **Projects**) come from the `sections` array at the top; the header nav, hero cards and section blocks all render from it. To add a section, add an entry there.
- `src/index.css`: all styles. Colors are CSS variables on `:root` with a `prefers-color-scheme: dark` override, so use the variables (`--bg`, `--surface`, `--text`, `--muted`, `--border`, `--accent`) instead of hard-coded colors.
- `src/main.tsx`: React entry point.
- `vite.config.ts`: `base` is `/personal-website/` because the site is served from a subpath. Asset URLs must respect this (use imports or `import.meta.env.BASE_URL`, not root-absolute `/foo.png`).
- `.github/workflows/deploy.yml`: builds and deploys to GitHub Pages on every push to `main`.

## Conventions

- No router: sections are on one page and linked with `#id` anchors. Add a router only if a real multi-page need comes up.
- No CSS framework: plain CSS in `index.css`.
- Layout must work at phone width (16px side gutters, no horizontal scroll).
- Lint must pass with no warnings. oxlint's `react(purity)` rule flags impure calls such as `new Date()` during render, so hoist them to module scope.
- Run `task check` before committing. Pushing to `main` deploys to production.
