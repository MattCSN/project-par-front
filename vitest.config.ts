import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.test.{ts,tsx}"],
    exclude: ["vitest-setup.js"],
    setupFiles: [`vitest-setup.js`],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "./coverage",
      reporter: ["lcov"],
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["vitest-setup.js"],
    },
  },
});
