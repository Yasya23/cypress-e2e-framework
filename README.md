# Cypress Automated E2E & API Test Suite

Automated end-to-end (E2E) testing framework built with Cypress, TypeScript, Page Object Model (POM), and API Object Model (AOM).

## Project Structure

```text
cypress/
├── components/ # Reusable UI component models (e.g., ToastComponent)
├── constants/ # Route definitions, API endpoints, error & status messages
├── data/ # Static data and dynamic test data generators
├── e2e/ # E2E test spec files (e.g., auth, favorites, product actions)
├── pages/ # Page Object Model (POM) classes extending BasePage
├── support/
│ ├── api/ # API Object Model classes (AuthApi, FavoritesApi, ProductsApi)
│ ├── commands.ts # Custom Cypress commands (cy.login, cy.getByTestId, etc.)
│ ├── e2e.ts # E2E test configuration and global setup
│ └── index.d.ts # TypeScript type definitions for custom commands
├── types/ # TypeScript interfaces (Auth, Product, API types)
├── utils/ # Utility helper functions (generators, formatters)
├── .gitignore # Git ignore settings
├── BDD_scenarios.md # BDD feature files and scenario definitions
├── cypress.config.ts # Main Cypress configuration file
├── env-template.md # Template for required environment variables
├── package-lock.json # Dependency lockfile
├── package.json # Project metadata and script commands
├── README.md # Project documentation
└── tsconfig.json # TypeScript compiler configuration
```

## Local Installation & Execution

1. Clone the repository and enter the directory:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Set up the environment variables:

```bash
cp .env-template.md .env
```

4. Run the test suite:

```bash
npm run test
```

## Key Features

- **Session Management:** Uses `cy.session()` to cache API authentication tokens across specs, reducing test execution duration.
- **State Management via API:** State initialization (such as resetting favorites or seeding test products) is executed directly through API services to maintain fast and isolated tests.
- **Resilient Element Selection:** Utilizes custom `cy.getByTestId()` commands targeting `data-test` attributes to prevent brittle DOM-dependent selectors.
