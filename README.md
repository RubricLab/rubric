# Rubric Monorepo

### Home of Rubric Labs

This repo contains Rubric's, UI library, docs, and code config.

This makes it easier to

- Share code across projects
- Coordinate global style changes with a single PR
- Skip common setup in new projects: Tailwind, Biome, Typescript, etc.

## What's inside?

This monorepo includes the following packages and apps:

### Packages

Core framework packages for building agentic applications:

- [@rubriclab/actions](https://github.com/RubricLab/actions): Type-safe API primitives that can be chained together, designed for both developers and AI systems
- [@rubriclab/agents](https://github.com/RubricLab/agents): Core agent functionality and types
- [@rubriclab/blocks](https://github.com/RubricLab/blocks): UI components for generative interfaces
- [@rubriclab/chains](https://github.com/RubricLab/chains): Type-safe chaining primitives for structured outputs
- [@rubriclab/events](https://github.com/RubricLab/events): Type-safe event system
- [@rubriclab/auth](https://github.com/RubricLab/auth): Agent-native authentication and authorization
- [@rubriclab/ui](https://github.com/RubricLab/ui): React component library with modern design system
- [@rubriclab/webhooks](https://github.com/RubricLab/webhooks): Webhook handling utilities
- [@rubriclab/memory](https://github.com/RubricLab/memory): Flexible fact-keeping system for AI agents

Development and tooling:

- [@rubriclab/cli](https://github.com/RubricLab/cli): Type-safe CLI framework built with Zod
- [@rubriclab/codegen](https://github.com/RubricLab/codegen): Code generation tools for type-safe file watching and template generation
- [@rubriclab/create-rubric-app](https://github.com/RubricLab/create-rubric-app): Scaffold new AI-powered applications with our opinionated stack
- [@rubriclab/package](https://github.com/RubricLab/package): Tools for scaffolding and publishing NPM packages
- [@rubriclab/config](https://github.com/RubricLab/config): Shared Biome, TypeScript, Tailwind, and other configurations

### Apps

Notable applications built with our framework:

- [rOS](https://github.com/RubricLab/rOS): Operating system for AI agents
- [chat](https://github.com/RubricLab/chat): Real-time chat application
- [x](https://github.com/RubricLab/x): Core agent system with iOS integration
- And more experimental applications

### Build

To build all apps and packages, run:

```sh
bun build
```

### Develop

To develop all apps and packages:

```sh
bun dev
```

To develop a specific app:

```sh
cd apps/[app_name]
bun run dev
```

### Dependencies

To add a dependency to a specific app:

```sh
cd apps/[app_name]
bun i dependency
```

To add a global dependency:

```sh
bun add -W dependency
```

## Technologies

- [Bun.js](https://bun.sh) for fast JavaScript runtime and package management
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Next.js](https://nextjs.org) for full-stack React applications
- [Turborepo](https://turbo.build/repo) for monorepo management
- [Biome](https://biomejs.dev) for fast, modern code linting and formatting

## License

MIT
