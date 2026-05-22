# Playwright Task Board Assessment

This project contains a Playwright test suite for validating tasks on the demo application board.

## Tech Stack

- TypeScript
- Playwright
- Page Object Model (POM)
- Data-driven testing with JSON

## Setup

```bash
npm install
npx playwright install
```

## Run Tests

```bash
npx playwright test
```

## View Test Report

```bash
npx playwright show-report
```

## Project Structure

- `pages/LoginPage.ts` - handles login functionality
- `pages/BoardPage.ts` - handles board and task validations
- `test-data/tasks.json` - contains test scenarios and test data
- `tests/taskBoard.spec.ts` - executes data-driven test cases

## Features Implemented

- Automated login functionality
- Validation of tasks in specific columns
- Validation of task tags
- Data-driven test execution using JSON
- Reusable Page Object Model structure
- Cross-browser execution support (Chromium, Firefox, WebKit)