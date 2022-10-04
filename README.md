# Web Component Comparison

This repository tests web components built with different web frameworks.

## What's inside?

This [turborepo](https://turborepo.org/) uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `astro`: an [Astro](https://astro.build/) app
- `react`: a [React.js](https://reactjs.org/) app
- `vue`: a [Vue.js](https://vuejs.org/) app
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `lit-ui`: a [Lit](https://lit.dev/) library containing test components
- `solid-ui`: a [Solid.js](https://www.solidjs.com/) library containing test components
- `svelte-ui`: a [Svelte.js](https://svelte.dev/) library containing test components
- `tsconfig`: used throughout the monorepo

TODO: Add Stencil.js and Element.js - https://github.com/webtides/element-js/blob/main/docs/README.md

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/). Packages were created [Vite](https://vitejs.dev/). Runs and build use Vite as the development environment.

![Screenshot](/assets/screenshot.png)

### Utilities

This repository has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [UnoCSS](https://github.com/unocss/unocss) for CSS. UnoCSS is an on-demand Atomic CSS engine. It supports all Tailwind styling but 10x faster, smaller and more powerful.


## Getting started

### Installation

Install dependencies

```
pnpm install
```

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```

## Things discovered

https://www.npmjs.com/package/svelte-tag
