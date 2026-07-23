# JavaScript Testing Lab (Vitest & Jest)

This project demonstrates the basics of unit testing using both **Vitest** and **Jest**.

## Features

### Vitest

- describe() and it() test suites
- expect().toBe()
- expect().toEqual()
- vi.fn() mock functions
- Coverage reporting with @vitest/coverage-v8

### Jest

- describe() and test() suites
- expect().toBe()
- expect().toEqual()
- jest.fn() mock functions
- Coverage reporting
- Coverage threshold validation

## Project Structure

```
src/
tests/
package.json
vitest.config.js
jest.config.js
README.md
```

## Installation

```bash
npm install
```

## Run Vitest

```bash
npm run test:vitest
```

## Run Vitest Coverage

```bash
npm run coverage:vitest
```

## Run Jest

```bash
npm run test:jest
```

## Run Jest Coverage

```bash
npm run coverage:jest
```

## Expected Outcomes

- All Vitest tests pass.
- All Jest tests pass.
- Object comparison works with `toEqual()`.
- Mock functions are verified using `vi.fn()` and `jest.fn()`.
- Coverage reports show statements, branches, functions, and lines.
- Jest coverage threshold fails when code is insufficiently tested.