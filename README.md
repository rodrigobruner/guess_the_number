# Guess the Number

Guess the Number is a lightweight party game built with React, TypeScript, and Vite. Players add their guesses for a hidden number, and the closest guess wins when the secret is revealed.

Projected GitHub Pages URL: https://rodrigobruner.github.io/guess_the_number/

## Features

- Add as many player guesses as you like with just a name and a number.
- Reveal or hide the secret “magic” number at any time to keep the suspense going.
- Automatically calculates the winner based on whose guess is closest to the magic number.
- Remove individual guesses to keep the list clean before revealing the result.
- Built with modern tooling (React 19 + Vite) for fast local development and easy deployment.

## Getting Started

```bash
# install dependencies
npm install

# start the dev server on http://localhost:5173
npm run dev
```

## Gameplay Flow

1. Choose a maximum value for the secret number (defaults to 10).
2. Each player enters their name and a guess within the allowed range.
3. When ready, click **Show magic number** to reveal the secret and announce the closest guesser.
4. Toggle the magic number back to hidden to start a fresh round; you can remove old guesses or add new ones.

## Available Scripts

- `npm run dev` – Launch the Vite development server with hot reloading.
- `npm run build` – Create an optimized production build.
- `npm run preview` – Preview the production build locally.
- `npm run lint` – Run ESLint across the project.

## Tech Stack

- React 19 + TypeScript
- Vite build tool
- ESLint for static analysis

