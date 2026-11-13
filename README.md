# neu5 games

Studio site for [neus.games](https://neus.games): small games I make for fun, in English, Polish and French.

Plain HTML, CSS and JS. No build step.

## Run locally

Start a small server in this folder:

```bash
python3 -m http.server 4173
```

Open http://localhost:4173.

Do not open `index.html` as a file. Pages use root paths like `/style.css`, so they need a server.

- Game pages: `/game/helpful-fairy/`, `/game/tiny-laps/`, `/game/snails/`, `/game/realm-war/`
- Language: add `?lang=en`, `?lang=pl` or `?lang=fr`. The choice is remembered in the browser.

## Files

- `index.html`: home page
- `game/<slug>/index.html`: one page per game. Keep slugs stable, as stats are grouped by them.
- `main.js`: all text in three languages, language picker, stats
- `style.css`: styles, light and dark
- `img/`: game images

To add a language, add a block to `LANGS` in `main.js`. Missing keys fall back to English.

## Stats

Stats use [Umami](https://umami.is): no cookies, no personal data.

- Set `UMAMI_ID` in `main.js` to the Umami website ID. Empty means no script loads.
- The site counts page views and `play-click` (with `game`).
- The games send `game-start` when built with `VITE_UMAMI_ID` set.

To test stats locally, set the ID, reload, and check Umami. Ad blockers can block the script.

## Deploy

Render static site from `render.yaml`. Add the `neus.games` custom domain in Render.
