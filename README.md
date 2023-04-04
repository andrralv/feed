# Incepto Interview Question

We will be building a control to show list items.

- **Running Tests**: Run tests with `npm test` or `npm run test-watch`
- **Browser with Hot Reload**: Run the dev server with `npm run dev`. Then open [http://localhost:8081](http://localhost:8081).

## Task 1 - Render a list of items

Use generics to create list component to render the items. In this exercise, the types already exist and tests cases exist.

- Implement the rendering function for a list of items.
- Finish writing the tests for rendering and the onClick handler. Ensure the tests pass.
- Show the control working in the browser.

To preview in browser, use [http://localhost:8081/list](http://localhost:8081/list)

## Task 2 - Menu

The menu component displays a button to show/hide a popup menu.

- Implement the control to show/hide a hover menu.
- When the user clicks a menu item, pass the value to the onClick handler and close the menu.

To preview in browser, use [http://localhost:8081/menu](http://localhost:8081/menu)

Here is an example of a hover menu.

<img src="./docs/menu.gif" width="256"></img>

## Task 3 - Feed

Create a list component to render a list of items. Load new items any time the user scrolls to the bottom of the list.

To preview in browser, use [http://localhost:8081/feed](http://localhost:8081/feed)

# Incepto Frontend Tech Stack

This repo contains a scaffold for building frontend apps. Includes testing, hot reload, and build.

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
