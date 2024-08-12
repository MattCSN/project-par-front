import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import * as jestExtendedMatchers from "jest-extended";
import { expect } from "vitest";

expect.extend(jestExtendedMatchers);

afterEach(() => {
  cleanup();
});
