# Cypress Cucumber BDD E2E & API Test Suite

Automated end-to-end (E2E) testing framework built with Cypress, TypeScript, Cucumber BDD (Gherkin syntax), Page Object Model (POM), and API Object Model (AOM).

> **Note on Architecture:** This branch contains the **Cucumber BDD** implementation featuring `.feature` files, tag-based execution, and automated HTML reporting. For the standard Cypress version (`.cy.ts` specs), see the `main`.

> **Implementation Versions**
> * **Standard Cypress (Main Branch):** Standard `.cy.ts` specs using Page Object Model and direct Cypress assertions.
> * **Cucumber BDD Version:** Feature-based tests using Gherkin syntax (`.feature` files), tag-based filtering, and HTML reporting. Switch directly to the [`cucumber_integration`](https://github.com/Yasya23/cypress-e2e-framework/tree/cucumber_integration) branch or see [Pull Request #3: Cucumber BDD Migration](https://github.com/Yasya23/cypress-e2e-framework/pull/3) for full architecture details and CI workflow.

---

## Project Structure

```text
cypress/
├── components/ # Reusable UI component models (e.g., ToastComponent)
├── constants/ # Route definitions, API endpoints, error & status messages
├── data/ # Static data and dynamic test data generators
├── e2e/
│   ├── features/         # BDD Gherkin feature files (.feature)
│   └── step_definitions/ # Step definition files mapping Gherkin steps to Cypress actions
├── pages/ # Page Object Model (POM) classes extending BasePage
├── support/
│ ├── api/ # API Object Model classes (AuthApi, FavoritesApi, ProductsApi)
│ ├── commands.ts # Custom Cypress commands (cy.login, cy.getByTestId, etc.)
│ ├── e2e.ts # E2E test configuration and global setup
│ └── index.d.ts # TypeScript type definitions for custom commands
├── types/ # TypeScript interfaces (Auth, Product, API types)
├── utils/ # Utility helper functions (generators, formatters)
├── .cypress-cucumber-preprocessorrc.json # Configuration for Cucumber preprocessor (step definitions path, HTML report settings)
├── .gitignore # Git ignore settings
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

Execute all BDD scenarios:

```bash
npm run test
```

Execute specific test suites using tags:

```bash
npm run test:smoke      # Runs scenarios tagged with @smoke
npm run test:favorites  # Runs scenarios tagged with @favorites
npm run test:guest      # Runs scenarios tagged with @guest
```

## Key Features

- **Behavior-Driven Development (BDD):** Uses `@badeball/cypress-cucumber-preprocessor` and Gherkin syntax (`.feature` files) to bridge the gap between technical implementation and business requirements.
- **Tag-Based Test Execution:** Supports scenario filtering via tags (e.g., `@smoke`, `@favorites`, `@guest`), allowing targeted runs locally and in CI pipelines.
- **Automated HTML Reporting:** Generates detailed execution reports outputting directly to `cypress/reports/cucumber-html-report.html`.
- **Session Management:** Caches API authentication tokens via `cy.session()` across scenarios to optimize execution speed.
- **State Management via API:** Pre-conditions (clearing favorites, seeding test data) execute directly through API services to maintain fast, isolated tests.
- **Resilient Element Selection:** Utilizes custom `cy.getByTestId()` commands targeting `data-test` attributes to eliminate brittle DOM-dependent selectors.
