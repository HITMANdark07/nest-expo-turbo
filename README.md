# NestJS + Expo Turborepo

This is a monorepo setup with [NestJS](https://nestjs.com/) for the backend and [Expo](https://expo.dev/) for the mobile frontend, built with [Turborepo](https://turbo.build/repo).

## What's inside?

This monorepo uses [yarn](https://yarnpkg.com) as a package manager. It includes the following:

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

### Code Quality Tools

The project uses several tools to maintain code quality:

- **ESLint**: Shared configuration in `packages/eslint-config`
- **Prettier**: Code formatting with `.prettierrc` configuration
- **Husky**: Git hooks for pre-commit formatting and linting
- **Lint Staged**: Runs Prettier + ESLint only on staged files

#### Quick Commands

```bash
# Format all files
yarn format

# Lint all packages
yarn lint

# Lint and fix all packages
yarn lint:fix

# Check formatting without changes
yarn format:check
```

#### Git Hooks

- **Pre-commit**: Automatically formats and lints staged files
- **Skip hooks**: Use `git commit --no-verify` (emergency only)

### Build

To build all apps and packages, run the following command:

```
yarn build
```

### Develop

To develop all apps and packages, run the following command:

```
yarn dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following command:

```
yarn dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
yarn dlx turbo link
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
