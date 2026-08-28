# Playwright TypeScript Test Automation

[![Playwright tests](https://github.com/LiviuCirdei/playwright-typescript/actions/workflows/playwright.yml/badge.svg)](https://github.com/LiviuCirdei/playwright-typescript/actions/workflows/playwright.yml)
[![Playwright](https://img.shields.io/badge/tested%20with-Playwright-2EAD33?logo=playwright)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/language-TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

An end-to-end browser-testing project for [Sauce Demo](https://www.saucedemo.com/), built with Playwright and TypeScript. It demonstrates a maintainable test architecture using page objects, custom fixtures, generated test data, and automated quality checks.

## Test scenario

The included test automates a complete checkout journey:

1. Log in to Sauce Demo.
2. Add the first product to the cart.
3. Validate its name, price, and quantity.
4. Enter generated checkout information.
5. Validate the order summary.
6. Complete the order and verify its confirmation.

## Features

- Cross-browser testing with Chromium, Firefox, and WebKit
- Page Object Model for reusable page interactions
- Custom Playwright fixtures for page-object injection
- Faker-generated checkout data
- Screenshots and traces retained for failed tests
- Video recording on the first retry in CI
- HTML test reports
- ESLint, Prettier, and Husky pre-commit checks
- GitHub Actions continuous integration

## Technology stack

- [Playwright Test](https://playwright.dev/docs/test-intro)
- TypeScript
- ESLint and Prettier
- Faker
- Husky

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (included with Node.js)

## Installation

Clone the repository and install the exact dependency versions from the lockfile:

```bash
git clone https://github.com/LiviuCirdei/playwright-typescript.git
cd playwright-typescript
npm ci
npx playwright install
```

On Linux or in a CI environment, install the browser system dependencies too:

```bash
npx playwright install --with-deps
```

## Environment configuration

Create your local environment file from the provided template:

```bash
cp .env.example .env
```

The project requires these variables:

```dotenv
BASE_URL=https://www.saucedemo.com
USERNAME=standard_user
PASSWORD=secret_sauce
```

`.env` is ignored by Git. Do not commit real credentials.

## Running tests

Run all browser projects in headless mode:

```bash
npm test
```

Other useful commands:

| Command                 | Purpose                                 |
| ----------------------- | --------------------------------------- |
| `npm run test:headless` | Run all tests headlessly                |
| `npm run test:headed`   | Run all tests with visible browsers     |
| `npm run test:chromium` | Run the Chromium project                |
| `npm run test:firefox`  | Run the Firefox project                 |
| `npm run test:webkit`   | Run the WebKit project                  |
| `npm run test:ui`       | Open Playwright's interactive UI mode   |
| `npm run debug`         | Run tests with the Playwright Inspector |
| `npm run codegen`       | Open Playwright's test generator        |

Tests also carry `@smoke` and `@checkout` tags:

```bash
npx playwright test --grep @smoke
npx playwright test --grep @checkout
```

## Reports and debugging

Open the most recent HTML report:

```bash
npm run test:report
```

When a test fails, Playwright saves a screenshot and trace in `test-results/`. Open a trace with:

```bash
npx playwright show-trace path/to/trace.zip
```

In CI, the HTML report is uploaded as a GitHub Actions artifact even when the test job fails.

## Code quality

```bash
npm run lint          # Check ESLint rules
npm run lint:fix      # Automatically fix supported lint problems
npm run prettier      # Check formatting
npm run prettier:fix  # Format files
```

Husky runs the lint and formatting checks before each commit.

## Updating Playwright

Update Playwright and reinstall its browser binaries:

```bash
npm run playwright:update
```

Check the installed version:

```bash
npm run playwright:version
```

## Project structure

```text
.
├── .github/workflows/   # Continuous-integration workflow
├── .husky/              # Git hooks
├── config/              # Environment configuration
├── fixtures/            # Custom Playwright fixtures
├── pages/               # Page objects grouped by application page
├── shared/              # Shared constants and TypeScript types
├── test-data/           # Faker-powered test-data builders
├── tests/               # End-to-end test specifications
├── utils/               # Reusable test utilities
├── .env.example         # Safe environment-variable template
└── playwright.config.ts # Browser, reporter, retry, and artifact settings
```

## Continuous integration

GitHub Actions runs linting, formatting, and the Playwright suite for pushes and pull requests targeting `main`. Test reports are retained as downloadable artifacts for 14 days.

## Contributing

1. Create a branch from `main`.
2. Make your changes and add or update tests.
3. Run `npm run lint`, `npm run prettier`, and `npm test`.
4. Open a pull request describing the change.

## License

This project is available under the [ISC License](LICENSE).
