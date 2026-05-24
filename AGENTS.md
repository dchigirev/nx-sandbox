-# AGENTS.md

## Project overview

Browser-based game: **extraction strategy** with **tower defense** elements.

Players manage loadouts and squads out-of-match (meta loop), then drop into sessions where they build defenses and execute extraction objectives. The project lives in an **NX monorepo**.

---

## Monorepo structure

**All applications must be created inside the `apps/` directory.**

```
apps/
  web-shell/       # Module Federation host — entry point, routing shell
  web/             # MF remote — currently the main web experience
  webOne/          # MF remote
  webTwo/          # MF remote
  hangar/          # MF remote — Preparation phase (phase 1): unit viewer, loadout, rocket loading
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

## App architecture (three-app split)

Match flow: `shell → prep → game → shell (results)`

### `web-shell` — Shell (MF host)
Always loaded. Handles everything outside a match:
- Main menu, start page, settings (graphics, sound, controls), player profile
- Matchmaking / squad formation entry point
- Tech: Angular 21 + NgRx + Tailwind

### `hangar` — Preparation phase (MF remote, `apps/hangar/`, port 4203)
Loaded when a match starts, before the game:
- Unit viewer (3D via Babylon.js, run outside Angular zone), loadout selection, rocket loading
- UI-heavy; Angular handles all menus/panels; game viewport is a plain canvas element
- Unloads when the player confirms loadout and transitions to game

### `game` — Game phase (MF remote, to be created)
Loaded after prep. Handles everything inside a match:
- Game loop, canvas rendering (Phaser / PixiJS / BabylonJS / raw WebGL)
- Tower placement, wave logic, extraction objectives
- Angular is **not used** inside the game viewport — direct canvas/WebGL
- WebWorkers for pathfinding and physics
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

## Where to create things

- **Applications** → always inside `apps/` (e.g. `apps/hangar`)
- **Libraries** → always inside `libs/` under the appropriate scope (e.g. `libs/shared/web-ui`)
- Never create apps at the workspace root

---

## Conventions

- **Lib tagging**: scope (`shared`, `one`, `two`) + type (`feature`, `ui`, `data-access`, `model`, `entity`)
- **Feature libs** own routing and smart components; **UI libs** export only presentational components
- **Shared models** (`libs/shared/shared-models`) are the source of truth for cross-app domain types
- Game-related code goes into a dedicated `game` scope once the game app is created: `libs/game/`
- Angular components use the standalone API (no NgModules)
- Styles: Tailwind utility classes first; component SCSS only for layout/animation that Tailwind can't express
