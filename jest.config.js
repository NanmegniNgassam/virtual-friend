// jest.config.ts
export default {
    preset: "ts-jest/presets/default-esm",
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": ["ts-jest", { useESM: true }],
    },
  };
  