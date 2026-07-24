export default {
  testMatch: ["**/tests/jest/**/*.test.js"],

  testEnvironment: "node",

  transform: {},

  collectCoverage: false,

  collectCoverageFrom: ["src/**/*.js"],

  coverageDirectory: "coverage/jest",

  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};