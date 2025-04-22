# NestJS + Expo Turborepo

This is a monorepo setup with [NestJS](https://nestjs.com/) for the backend and [Expo](https://expo.dev/) for the mobile frontend, built with [Turborepo](https://turbo.build/repo).

## What's inside?

This monorepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following:

### Apps and Packages

- `apps/api`: a [NestJS](https://nestjs.com/) app
- `apps/expo`: an [Expo](https://expo.dev/) React Native app with TypeScript and App Router
- `packages/shared`: shared TypeScript types, constants, and utilities
- `packages/eslint-config`: ESLint configurations
- `packages/typescript-config`: TypeScript configurations

### Utilities

This Turborepo has some additional tools already set up:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### ESLint Configuration

The project uses a shared ESLint configuration found in `packages/eslint-config`. Additionally:

- Root `.eslintrc.js` extends the shared configuration
- Each app has its own ESLint configuration tailored to its specific needs
  - The API app uses NestJS recommended rules
  - The Expo app includes React and React Native specific linting rules

To run ESLint on all projects:

```
pnpm lint
```

To run ESLint on a specific app:

```
pnpm lint --filter=api
# or
pnpm lint --filter=expo
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

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following command:

```
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
pnpm dlx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

Learn more about NestJS:

- [NestJS Documentation](https://docs.nestjs.com/)

Learn more about Expo:

- [Expo Documentation](https://docs.expo.dev/)
