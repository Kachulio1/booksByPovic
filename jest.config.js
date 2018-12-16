
module.exports = {
  verbose: true,
  collectCoverage:true,
  setupTestFrameworkScriptFile: "<rootDir>/src/tests/setupTests.js",
  coverageReporters:["lcov", "text"],
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
}
