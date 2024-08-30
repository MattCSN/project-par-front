import { renderHook } from "@testing-library/react";
import { useTranslation } from "react-i18next";
import { expect } from "vitest";

import i18next from "./i18n";

import type { UseTranslationResponse } from "react-i18next";

type languageMatrix = {
  language: string;
  expected: string;
};

describe("i18next configuration", (): void => {
  it("should initialize i18next with the correct configuration", (): void => {
    expect(i18next.isInitialized).toBeTrue();
  });

  describe.each`
    language   | expected
    ${`fr-FR`} | ${`Ceci est une phrase test`}
    ${`en-GB`} | ${`This is a test sentence`}
  `(
    `when language is set to $language`,
    ({ language, expected }: languageMatrix): void => {
      it(`should return ${expected}`, (): void => {
        const { result } = renderHook(
          (): UseTranslationResponse<string, never> =>
            useTranslation(`common`, { lng: language }),
        );
        const { t } = result.current;

        // You can add assertions to validate the translations if needed
        expect(t(`test`)).toBe(expected);
      });
    },
  );
});
