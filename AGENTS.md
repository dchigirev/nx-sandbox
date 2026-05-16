# AGENTS.md

## Project overview

Browser-based game: **extraction strategy** with **tower defense** elements.

Players manage loadouts and squads out-of-match (meta loop), then drop into sessions where they build defenses and execute extraction objectives. The project lives in an **NX monorepo**.

---

## Monorepo structure

```
apps/
  web-shell/       # Module Federation host — entry point, routing shell
  web/             # MF remote — currently the main web experience
  webOne/          # MF remote
  webTwo/          # MF remote
  mobile/          # Ionic/Capacitor mobile client
  api/             # NestJS backend
libs/
  shared/
    core-ui/       # Framework-agnostic primitives
    web-ui/        # Angular UI components (forms, selects, etc.)
    mobile-ui/     # Ionic UI components
    shared-models/ # Domain models shared across apps
  one/
    one-entities/  # Domain entities (slice "one")
    one-models/
    one-features/
    one-data-access/
packages/
  theme/           # Tailwind CSS theme tokens
```

---

## Planned app split (two-app architecture)

### App 1 — Shell / Lobby (`web-shell` + remotes)
Handles everything **outside a match**:
- Main menu, settings, player profile
- Inventory and loadout management (extraction meta loop)
- Matchmaking / squad formation
- Tech: Angular 21 + NgRx + Tailwind

### App 2 — Game (`game` MF remote, to be created)
Handles everything **inside a match**:
- Game loop, canvas rendering (Phaser / PixiJS / BabylonJS / raw WebGL)
- Tower placement, wave logic, extraction objectives
- Angular is **not used** inside the game viewport — direct canvas/WebGL
- WebWorkers for pathfinding and physics
- Lazy-loaded as a Module Federation remote; mounted only when a match starts
- Deployed and cached independently (game assets can be 50+ MB)

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend framework | Angular 21 (standalone components) |
| State management | NgRx store + effects + component-store |
| Module Federation | `@angular-architects/native-federation` + `@module-federation/enhanced` |
| Styling | Tailwind CSS v4, SCSS |
| Mobile | Ionic 8 + Capacitor 7 |
| Backend | NestJS 11 |
| Build | NX 22, Webpack (shell), Vite (libs) |
| Testing | Vitest (unit), Playwright (e2e) |

---

## Key commands

```bash
# Serve the shell + all remotes in dev
nx run-many -t serve --projects=web-shell,web,webOne,webTwo

# Serve a single app
nx serve web-shell

# Build everything
nx run-many -t build

# Run unit tests
nx run-many -t test

# Run e2e
nx run web-shell-e2e:e2e

# Lint
nx run-many -t lint

# Generate Angular component
nx g @nx/angular:component <name> --project=<project>

# Generate NX library
nx g @nx/angular:library <name> --directory=libs/<scope>
```

---

## Conventions

- **Lib tagging**: scope (`shared`, `one`, `two`) + type (`feature`, `ui`, `data-access`, `model`, `entity`)
- **Feature libs** own routing and smart components; **UI libs** export only presentational components
- **Shared models** (`libs/shared/shared-models`) are the source of truth for cross-app domain types
- Game-related code goes into a dedicated `game` scope once the game app is created: `libs/game/`
- Angular components use the standalone API (no NgModules)
- Styles: Tailwind utility classes first; component SCSS only for layout/animation that Tailwind can't express
