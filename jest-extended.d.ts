import type CustomMatchers from "jest-extended";
import "vitest";

declare module "vitest" {
  type Assertion<T = any> = NonNullable<unknown> & CustomMatchers<T>;

  type AsymmetricMatchersContaining<T = any> = NonNullable<unknown> &
    CustomMatchers<T>;

  type ExpectStatic = NonNullable<unknown> & CustomMatchers<T>;
}
