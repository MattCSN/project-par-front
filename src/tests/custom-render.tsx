import type { ReactElement } from "react";

import { render } from "@testing-library/react";
import i18next from "i18next";

import { i18nConfig } from "../i18n";

import type { RenderResult } from "@testing-library/react";

async function customRender(ui: ReactElement): Promise<RenderResult> {
  return i18next.init(i18nConfig).then((): RenderResult => render(ui));
}

export { customRender };
