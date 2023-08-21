# Rubric Monorepo

### Home of Rubric Labs

This repo contains Rubric's landing page, UI library, docs, and code config.

This makes it easier to

- Share code across projects
- Coordinate global style changes with a single PR
- Skip common setup in new projects: Tailwind, ESLint, Typescript, etc.

## What's inside?

This monorepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `@rubriclab/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `tailwind-config`: `tailwind.config.js` used throughout the monorepo

Each package/app is 100% [Typescript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [Typescript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```sh
yarn build
```

### Develop

To develop all apps and packages, run the following command:

```sh
yarn dev
```

To add a dependency to a subrepo, run:

```sh
yarn workspace [subrepo name] add dependency
```

To add a global dependency, run:

```sh
yarn add -W dependency
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share build artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. Remote Caching has also been configured with Vercel by running:

```sh
npx turbo login
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

1234567
