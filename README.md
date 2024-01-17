Quick exercises I did for incepto in 2023 

- yarn run dev
- http://127.0.0.1:8081/feed
- It presents a feed component that calls an API when the user scrolls
- There are some tests for it

The tech stack is:

- [ViteJS](https://vitejs.dev/): for bundling
- [Preact](): like React; more optimized.
- [Vitest](https://vitest.dev/): a test runnner with an API similar to Jest
- [Preact Testing Library](https://preactjs.com/guide/v10/preact-testing-library/): for DOM testing. Analogous to React Testing Library.
- CSS and SASS are available. PostCSS is configured with
  - [Autoprefixer](https://github.com/postcss/autoprefixer#readme)
  - [postcss-rem](https://github.com/pierreburel/postcss-rem): Rem helpers. e.g. `rem(10px)`
  - [cssnano](https://cssnano.co/): to compress CSS
  - [purge-css](https://purgecss.com/): prevents emitting unused styles.

