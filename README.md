# Playwright testing project with TypeScript

This repository contains a sample Playwright testing project using TypeScript. It includes automated end2end browser tests, linting, code formatting, and pre-commit hooks.

## Features

- Automated end2end browser tests with Playwright
- Linting with ESLint
- Code formatting with Prettier
- Husky pre-commit hooks for linting and formatting
- Faker.js for generating realistic test data
- Page Object Model (POM) for better test structure
- Playwright Test Runner for running tests in multiple browsers

## Getting Started

### Prerequisites

- Node.js v18 or newer

### Install dependencies

```sh
npm ci
```

### Run tests

- All browsers headless (default):
  ```sh
  npm run test
  ```
- Headed mode:
  ```sh
  npm run test:headed
  ```
- Specific browser:

  ```sh
  npm run test:chromium
  npm run test:firefox
  npm run test:safari
  ```

- Interactive UI:
  ```sh
  npm run test:ui
  ```
- Debug mode:
  ```sh
  npm run debug
  ```
- Code generation:
  ```sh
  npm run codegen
  ```

### Update Playwright

To update Playwright and install the latest browser binaries:

```sh
npm run update:playwright
```

### Check Playwright version

To check the installed Playwright version:

```sh
npm run playwright:version
```

### Lint and format code

- Lint:
  ```sh
  npm run lint
  ```
- Lint and fix:
  ```sh
  npm run lint:fix
  ```
- Prettier check:
  ```sh
  npm run prettier
  ```
- Prettier fix:
  ```sh
  npm run prettier:fix
  ```

## Project Structure

```
.
├── .husky/               # Git hooks (e.g. pre-commit with linting)
├── config/               # Env file and configuration files
├── fixtures/             # Test data and fixtures (page object)
├── pages/                # Page objects for different application pages
├── shared/               # Shared utilities and types
├── test-data/            # Test data generation (Faker.js)
├── tests/                # Test files
├── utils/                # Utility functions and helpers
├── .gitignore            # Files ignored by Git
├── .prettierignore       # Files ignored by Prettier
├── .prettierrc           # Prettier formatting rules
├── eslint.config.mjs     # ESLint configuration
├── package-lock.json     # Lock file for exact dependency versions
├── package.json          # Project metadata, dependencies, npm scripts
├── playwright.config.ts  # Playwright settings (browsers, timeouts, reporters)
├── README.md             # Project overview and usage instructions
├── tsconfig.json         # TypeScript compiler options
```
