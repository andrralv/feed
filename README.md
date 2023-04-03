# Incepto Interview Question

We will be building a control to list items.

## Task 1 - Render a list of items

Use generics to create list component to render the items.

## Task 2 - Click event

Make the items clickable so the parent component can receive the event.

## Task 3 - Typed events

Make the events typed using generics such that the caller can receive a custom payload with the event.

## Task 4 - Inifinite scroll

Enhance the component to load new items any time the user scrolls to the bottom of the list.

# Incepto Frontend Tech Stack

This repo contains a scaffold for building frontend apps. Includes testing, hot reload, and build integrated.

The tech stack is:

- [ViteJS](https://vitejs.dev/): for bundling
- [Preact](): like React; more optimized.
- [Vitest](https://vitest.dev/): a test runnner with an API similar to Jest
- [Preact Testing Library](https://preactjs.com/guide/v10/preact-testing-library/): for DOM testing. analogous to React Testing Library.
- CSS and SASS are available. PostCSS is configured with
  - [Autoprefixer](https://github.com/postcss/autoprefixer#readme)
  - [postcss-rem](https://github.com/pierreburel/postcss-rem): Rem helpers. e.g. `rem(10px)`
  - [cssnano](https://cssnano.co/): to compress CSS
  - [purge-css](https://purgecss.com/): prevents emitting unused styles.
