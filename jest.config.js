
module.exports = {
  verbose: true,
  collectCoverage:true,
  setupTestFrameworkScriptFile: "<rootDir>/src/tests/setupTests.js",
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
}
