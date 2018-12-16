
module.exports = {
  verbose: true,
  collectCoverage:true,
  setupTestFrameworkScriptFile: "<rootDir>/src/tests/setupTests.js",
  coverageReporters:["lcov", "text"],
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/*.{config}.{js}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/coverage/**",
    "!**/src/index.js"
  ]
}
