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

- `@rubriclab/actions`: Type-safe API primitives that can be chained together, designed for both developers and AI systems
- `@rubriclab/agents`: Core agent functionality and types
- `@rubriclab/blocks`: UI components for generative interfaces
- `@rubriclab/memory`: Vector-based memory system for AI agents with support for graph memory
- `@rubriclab/state`: Real-time state management with WebSocket support and SSR capabilities

Development and tooling:

- `@rubriclab/cli`: Type-safe CLI framework built with Zod
- `@rubriclab/codegen`: Code generation tools for type-safe file watching and template generation
- `@rubriclab/create-rubric-app`: Scaffold new AI-powered applications with our opinionated stack
- `@rubriclab/package`: Tools for scaffolding and publishing NPM packages
- `@rubriclab/config`: Shared ESLint, TypeScript, and other configurations
- `@rubriclab/events`: Type-safe event system
- `@rubriclab/auth`: Authentication providers and utilities
- `@rubriclab/ui`: React component library with modern design system
- `@rubriclab/webhooks`: Webhook handling utilities

### Apps

Notable applications built with our framework:

- `rOS`: Operating system for AI agents
- `chat`: Real-time chat application
- `x`: Core agent system with iOS integration
- `maige`: AI-powered code review and generation
- `browser-agent`: Web browsing automation
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
