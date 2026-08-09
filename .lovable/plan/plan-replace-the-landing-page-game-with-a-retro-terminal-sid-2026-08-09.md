# Plan: Replace the landing page game with a retro terminal side-scrolling platformer

## Goal
Replace the current **Packet Rush** arcade game with a simple side-scrolling platformer (Mario-style) that fits the retro terminal / private server aesthetic of the landing page.

## Design direction
- Keep the CRT scanline, phosphor glow, and grid background already in place.
- Theme: a tiny "data courier" runs through a server network, jumping over firewalls, pits, and corrupted packets.
- Mood: fast, pixel-ish, endless runner that anyone can play in a few seconds.

## Game concept
An **endless auto-runner platformer**:
- The player character runs automatically to the right.
- Tap / click / spacebar to jump. Tap again while in the air for a double-jump.
- Avoid obstacles: firewall blocks, spikes, bottomless pits.
- Collect "data bits" (small glowing squares) for points.
- Speed gradually increases over time to raise difficulty.
- Score = distance travelled + collected data bits. Best score saved to `localStorage`.
- Game over on collision or falling into a pit. One button restarts.

## Controls
- **Desktop:** `Space` or `Arrow Up` to jump.
- **Mobile:** tap the game area to jump, plus an optional on-screen jump button.
- **Gamepad-style D-pad:** optional on-screen controls for mobile users.

## Technical approach
- Use a canvas-based React component for the game loop (`requestAnimationFrame`).
- Hand-rolled physics: gravity, velocity, simple AABB collision detection.
- Procedural level generation: spawn platforms, gaps, obstacles, and pickups as the runner advances.
- Replace the existing `src/components/game/PacketRush.tsx` with the new component.
- Update `src/pages/Index.tsx` copy and title to match the new game.
- Update `index.html` metadata (title, description, OpenGraph, keywords) to describe the new game.
- Keep `404.tsx` in the same terminal style, but redirect text stays relevant.

## Out of scope
- No backend, auth, or database. Persist only a high score in `localStorage`.
- No level editor, no real sound engine (optional simple synthesized sound effects only if quick to add).
- No complex animation library; the game loop is pure canvas.

## Deliverables
- New `src/components/game/SideRunner.tsx` (or renamed) component.
- Updated `src/pages/Index.tsx`.
- Updated `index.html` metadata.
- Updated `src/pages/NotFound.tsx` copy if needed.
- Clean build and basic manual play test.
