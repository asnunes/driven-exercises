module.exports = {
  moduleDirectories: ["node_modules"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  testMatch: ["<rootDir>/.hub/tests/**/*.(test|spec).ts"],
  coverageProvider: "babel",
  coverageDirectory: "coverage",
};
