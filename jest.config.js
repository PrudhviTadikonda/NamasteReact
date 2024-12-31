module.exports = {
  // Automatically clear mock calls, instances, contexts, and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected
  collectCoverage: true,

  // Directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Setup files that will run some code to configure the environment before tests
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],

  // Ignore transformations for node_modules
  transformIgnorePatterns: ["\\\\node_modules\\\\", "\\.pnp\\.[^\\\\]+$"],
};
