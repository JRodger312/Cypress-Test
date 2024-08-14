# Blackbox Automation Tests

This repository is to serve as a source of truth for our black box E2E automation.  The monolith has a ton of tests, but they mostly rely on data being directly created in the db to test small modules of functionality.  This repository is not going to use direct access to the database to create data (although we may create data via the api, which is available to our customers).  This ruleset should allow for tests that are developed here to be platform agnostic (only in dev can we directly access the db) and work across our development, future staging, production, and private cloud environments.

# Cypress

Cypress is an E2E and API testing tool (though it's main purpose is to do E2E testing).  It functions in a similar capacity to Selenium WebDriver in terms of what it can do, but with several key differences in how it achieves those outcomes:

- Cypress executes it's actions from inside of the browser context rather than an external API.
- Cypress executes it's browser actions synchronously.
- Cypress by default waits for asynchronous actions to complete.
- Cypress does not require a translation layer to be written (it is by default in javascript).
- Cypress has built in assertion libraries.
- Cypress natively handles some cross browser testing (Chrome, Firefox, Electron).

# Cypress Documentation

- Cypress Overview: https://docs.cypress.io/guides/overview/why-cypress
- Cypress Command Line: https://docs.cypress.io/guides/guides/command-line
- Cypress Commands: https://docs.cypress.io/api/table-of-contents
- Cypress Assertions: https://docs.cypress.io/guides/references/assertions
- Free Cypress Course for Beginners: https://learn.cypress.io/

# Getting Started With This Repository

- Clone the repository locally.
- Ensure that you have node.js installed locally.
- Run `npm install`
- Run `npm run cypress dev`
- Start Developing!
