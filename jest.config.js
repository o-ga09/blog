module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["app"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testMatch: ["**/*.test.ts"],
};