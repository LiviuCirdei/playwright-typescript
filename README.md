# README

This project is demo of Playwright with Typescript, ESLint, Prettier, Husky

## Getting Started

### Prerequisites

Node.js (version 18 or higher)

### Installation

1. Clone the repository
2. Install the dependencies:
   `npm ci`

## Environment Variables

The project uses dotenv to manage environment variables. Create a .env file in the root directory of your project and define the necessary variables.

## Linting and Formatting

To lint the code:
`npm run lint`

To automatically fix linting issues:
`npm run lint:fix`

To check code formatting with Prettier:
`npm run prettier`

To automatically format the code:
`npm run prettier:fix`

## Git Hooks

Husky is used to manage Git hooks. It automatically sets up pre-commit hooks to run linting and formatting checks before commits.
