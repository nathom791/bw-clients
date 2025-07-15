# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the Bitwarden clients repository, a monorepo containing all client applications (browser extension, desktop app, CLI tool, web vault) and shared libraries. The codebase is built with TypeScript/Angular and uses Nx for monorepo management.

## Essential Commands

### Development

- `npm run lint` - Run ESLint on all projects
- `npm run lint:fix` - Fix linting issues automatically
- `npm run prettier` - Format code with Prettier
- `npm run test` - Run Jest tests across all projects
- `npm run test:watch` - Run tests in watch mode

### Building Applications

- **Browser Extension**: `npm run build:chrome` (or firefox, edge, opera, safari)
- **Desktop App**: `npm run build` (in apps/desktop/)
- **CLI Tool**: `npm run build:oss` (in apps/cli/)
- **Web Vault**: `npm run build:oss` (in apps/web/)

### Application-Specific Commands

- **Browser**: `npm run build:watch:chrome` for development
- **Desktop**: `npm run electron` to run in development mode
- **CLI**: `npm run build:oss:debug` for debugging
- **Web**: `npm run build:oss:watch` for development server

### Testing

- `npm run test:types` - TypeScript type checking
- `npm run test:locales` - Validate translation files
- Single test file: `jest path/to/test.spec.ts`
- Watch tests: `npm run test:watch` or `npm run test:watch:all`

## Project Structure

### Applications (`apps/`)

- **`browser/`** - Browser extension (Chrome, Firefox, Edge, Opera, Safari)
- **`desktop/`** - Electron desktop application with native Rust components
- **`cli/`** - Command-line interface tool
- **`web/`** - Web vault application

### Libraries (`libs/`)

- **`common/`** - Core business logic, models, and services
- **`angular/`** - Angular-specific utilities and services
- **`components/`** - Reusable UI component library
- **`auth/`** - Authentication and authorization
- **`vault/`** - Vault management functionality
- **`admin-console/`** - Organization and admin features
- **`billing/`** - Subscription and billing
- **`key-management/`** - Cryptographic key handling
- **`platform/`** - Platform abstraction layer
- **`storage-core/`** - Storage abstraction and utilities
- **`importer/`** - Data import functionality
- **`tools/`** - Generator, send, and export tools

## Architecture Patterns

### Monorepo Structure

- Nx workspace with shared build configuration
- TypeScript path mapping for imports (`@bitwarden/common`, etc.)
- Shared dependencies and build tools
- Team-based library ownership

### Code Organization

- **Domain-driven design**: Libraries organized by business domain
- **Layered architecture**: Platform → Common → Domain → UI
- **Dependency injection**: Angular-style DI throughout
- **Service-oriented**: Business logic in injectable services

### Build System

- **Webpack** for bundling applications
- **Jest** for testing with shared configuration
- **ESLint** with custom rules and TypeScript support
- **Nx** for build orchestration and caching

## Development Guidelines

### Import Patterns

- Use barrel exports from library index files
- Prefer `@bitwarden/common/*` imports over relative paths
- Import from specific lib modules: `@bitwarden/auth/common`

### Testing

- Unit tests co-located with source files (`.spec.ts`)
- Mock external dependencies using `jest-mock-extended`
- Use fake services from `@bitwarden/common/spec`
- Test utilities in individual library test.setup.ts files

### Code Style

- Follow existing patterns in the codebase
- Use Angular coding conventions
- Prefer composition over inheritance
- Use TypeScript strict mode features

## Key Technologies

- **Framework**: Angular 19.x
- **Language**: TypeScript 5.x
- **Build**: Webpack 5, Nx 21.x
- **Testing**: Jest 29.x
- **Linting**: ESLint 9.x with TypeScript support
- **Styling**: Tailwind CSS (for components)
- **Desktop**: Electron 36.x with Rust native modules
- **CLI**: Node.js with Commander.js
- **Crypto**: Node-forge, Argon2

## Common Patterns

### Services

- Injectable services with proper DI tokens
- Abstract base classes for platform-specific implementations
- State management through reactive services
- Crypto operations through dedicated services

### Components

- Angular components with OnPush change detection
- Reactive forms with custom validators
- Accessibility-first component design
- Tailwind CSS for styling

### State Management

- RxJS for reactive programming
- Custom state services for complex state
- Local storage abstraction through platform services
- Encrypted storage for sensitive data

## Troubleshooting

### Build Issues

- Clear Nx cache: `npx nx reset`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check TypeScript compilation: `npm run test:types`

### Testing Issues

- Clear Jest cache: `npm run test:clearCache`
- Run tests in band: `npm run test -- --runInBand`
- Check for memory leaks in large test suites

### Development Setup

- Node.js 22.x and npm 10.x required
- Use `npm install` in root directory
- Enable TypeScript strict checking in IDE
- Install recommended VS Code extensions for Angular development
