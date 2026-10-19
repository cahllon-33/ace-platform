# Rank 3D viewer — loading architecture (R38-J)

**Current state.** The "3D" rank viewer (`src/components/rank-turntable.tsx`) is a CSS-3D turntable:
a rotating rig (crown, two rings, emblem core) driven by `rotateY`, with drag, arrow-key and
auto-rotate (auto-rotate is off under `prefers-reduced-motion`). No WebGL, three.js or React-Three-Fiber
is installed. **R3F is not a dependency** and none was added.

## Asset contract (`RankEmblemAsset` in `src/lib/ranks.ts`)
| field | used by |
|---|---|
| `heroSrc` | turntable core (SVG emblem / illustrated PNG) |
| `stillSrc` | cards, emblems, codex |
| `staticSrc` | **lists/tables** (leaderboard, /ranks table, rank-board list) and **turntable fallback**. Standard: `/ranks/static/NN-name.webp` (512², rendered from the vector emblems with sharp). Premium: the HD WebP. |
| `gltfSrc` | reserved GLB slot; `null` for every tier today |

## Fallback rules
1. On mount the turntable probes its asset (`gltfSrc` if set, else `heroSrc`).
2. Loaded → stays in 3D mode (`data-mode="3d"`).
3. Error, or nothing within **2.5 s** (`FALLBACK_MS`) → `data-mode="static"`: a static WebP `<img>` is shown in
   exactly the same absolutely-positioned box as the core, and the rig is `visibility:hidden` (still occupies
   space) → **no layout shift**.

## Adding real GLB models later
- Put `NN-name.glb` (Draco/meshopt compressed, < 400 KB each) under `public/ranks/glb/` and set `gltfSrc`.
- Load the 3D runtime **lazily** (`next/dynamic`, `ssr:false`) only inside the turntable, only after the
  stage enters the viewport; never in lists/tables. Option A: `@google/model-viewer` web component.
  Option B: `three` + `@react-three/fiber` + `drei/useGLTF` (≈150 KB+ gz) — would be a new dependency
  needing approval.
- Keep the 2.5 s/onError fallback to `staticSrc`, and keep RankOrb (admin) untouched.
