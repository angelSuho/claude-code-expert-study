# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository overview

This is a scratch/learning repository with small, independent example programs — not a single application. Each file (or file group) is a standalone exercise with no shared dependencies or build system tying them together:

- `Hello.py` — minimal Python script (`print("Hello World")`).
- `index.html` / `script.ts` / `script.js` / `tsconfig.json` — a static HTML page with an input field and button that displays the entered value on screen. `script.ts` is the source; `script.js` is the compiled output that `index.html` actually loads.

There is no `package.json`, no test suite, and no bundler/framework — treat each exercise as isolated when making changes.

## Commands

Run the Python example:
```bash
python3 Hello.py
```

Compile the TypeScript example (regenerate `script.js` after editing `script.ts`):
```bash
npx tsc
```
Note: the environment's default Node version may be too old for the latest `typescript` package on npm. If `npx tsc` fails with an ESM/engine error, pin a compatible version instead:
```bash
npx -p typescript@5.4.5 tsc
```

Serve and view the HTML/TS example (it needs `script.js` compiled first):
```bash
python3 -m http.server 8123
# then open http://localhost:8123/index.html
```
