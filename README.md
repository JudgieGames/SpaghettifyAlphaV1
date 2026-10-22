# Spaghettify

A black hole eating its way from the Solar System to the edge of the observable universe, ships of four races,
and Earth's whole story from its birth to the Sun's last light. A single-page mobile web game (build v289).

## Play
Open the site's address in Chrome on your phone, then menu → **Install app** (or **Add to Home screen**) to get the
Spaghettify icon, full screen, and play offline after the first visit.

## Publish with GitHub Pages (once)
1. On github.com: **New repository** → name it (e.g. `spaghettify`) → Public → **Create repository**.
2. On the new repository's page: **uploading an existing file** (or **Add file → Upload files**), drag in **every file
   in this folder**, then **Commit changes**.
3. **Settings → Pages** → *Build and deployment*: Source **Deploy from a branch**, Branch **main**, folder **/ (root)** → **Save**.
4. After a minute or two the address appears at the top of that page: `https://YOUR-NAME.github.io/spaghettify/`.

## Updating to a new build
Upload the new build's files the same way (they replace the old ones) and commit. The game picks up the new build
the next time it's opened online (the offline copy is replaced automatically).

## What's in this folder
| File | What it is |
|---|---|
| `index.html` | the page itself |
| `game-1.js`, `game-2.js` | the game's code |
| `data-ship-glb-data.js` | the 3D ships |
| `data-music-ascending.js`, `data-music-descending.js` | the menu music |
| `data-title-glb-data.js` | the title screen's 3D logo |
| `manifest.webmanifest`, `icon-*.png` | the app's name and icon, for installing |
| `sw.js` | keeps the game on the phone for offline play |
| `.nojekyll` | tells GitHub Pages to serve the files exactly as they are |

Every file is under 10 MB (GitHub's web upload allows up to 25 MB each).
